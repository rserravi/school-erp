// =======================|| USAGE ||===========================//
//                                                              //
//      From parent component:                                  //
//      <ImageForm handleChange={handleChange} />                //
//      "handleChange" of parent will obtain KEY and VALUE      //
//                                                              //
//==============================================================//

import React from "react";
import Webcam from "react-webcam";
import FileResizer from 'react-image-file-resizer';

// MUI AND MUI-X IMPORTS
import Paper from '@mui/material/Paper';
import { ButtonBase, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';

// ==============================|| NAME FORM COMPONENT ||============================== //


export const ImageForm = ({handleChange}) =>{

    const videoConstraints = {
        width: 160,
        height: 160,
        facingMode: "user"
    };

    const imageInit= "/assets/images/users/Portrait_Placeholder.png";

    const [image, setImage] = React.useState(imageInit);
    const [webcamShow, setWebcamShow] = React.useState(false);
    const webcamRef = React.useRef(null);

    const resizeFile = (file) => new Promise(resolve => {
      FileResizer.imageFileResizer(file, 160, 160, 'JPEG', 100, 0,
      uri => {
        resolve(uri);
      }, 'base64' );
    });

    const  handleFileChange = async (e) =>{
      const file = e.target.files[0];
      const base64 = await resizeFile(file)
      setImage(base64);
      handleChange("image", base64);
    }

    const getWebcamShot = ()=>{
      if (!webcamShow){
          setWebcamShow(true);
  }
      else {
          const image = capture();
          setImage(image);
          setWebcamShow(false);
      }
  }
   
  const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        handleChange("image", imageSrc)
        setImage(imageSrc);
        return imageSrc
      },
      [webcamRef]
  );
  
  const deletePicture = () =>{
     setImage(imageInit)
  }

  const Input = styled('input')({
    display: 'none',
  });

    return (
        <React.Fragment>
             <Grid container direction="column">
              <Paper>
                <Grid item xs={12} sm={12} md={12} >
                  <ButtonBase height="150" width="150" sx={{m:2}}>
                      
                      {webcamShow ? <Webcam
                          audio={false}
                          height={160}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          width={160}
                          videoConstraints={videoConstraints}
                      /> :
                      <img width={145} height={165} src={image} alt="Upload"></img>
                      }
                  </ButtonBase>
                </Grid>
               
                <Grid container direction="row" justifyContent="space-around" alignItems="flex-end">
                    <label htmlFor="upload-button">
                      <Input accept="image/*" id="upload-button" type="file" onChange={handleFileChange}/>
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <UploadIcon />
                      </IconButton>
                    </label>
                    <label htmlFor="camera-button">
                      <IconButton color={!webcamShow?"primary":"success"} aria-label="make picture" component="span" onClick={getWebcamShot}>
                        <PhotoCamera />
                      </IconButton>
                    </label>
                    <IconButton color="primary" aria-label="make picture" component="span" onClick={deletePicture}>
                        <DeleteIcon />
                    </IconButton>
                  </Grid>
                  </Paper>
              </Grid>
        </React.Fragment>
    )
}