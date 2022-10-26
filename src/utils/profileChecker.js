import _ from 'lodash';
import PropTypes from 'prop-types';
import { validateDNI } from './validation-utils';


export const profileCompletness = user => {
    let percent = 0;
    if (user.firstname && user.firstname!=="") {percent+=10};
    if (user.lastname && user.lastname!=="") {percent+=10};

    if (user.picture.file) {percent+=10}
    if (user.gender && user.gender!=="none") {percent+=10};
    if (validateDNI(user.dni)) {percent+=10;};

    if (new Date(user.birthdate) < Date.now()) {percent+=10};
    

    if (!_.isEmpty(user.emails) && !_.isNull(user.email)) {percent+=10};
    if (!_.isEmpty(user.address) && !_.isNull(user.address)){percent+=10};
    if (!_.isEmpty(user.phones) && !_.isNull(user.phones)) {percent+=10};
    if (!_.isEmpty(user.social) && !_.isNull(user.social))  {percent+=10}; 

    //console.log("SE ESTA PRODUCIENDO CAMBIO EN PERCENT",percent, user)
    return percent

};

profileCompletness.propTypes = {
    user: PropTypes.shape({
        firstname: PropTypes.string,
        lastname: PropTypes.string,
        picture: PropTypes.shape({
            filename : PropTypes.string,
            file: PropTypes.string,
            uploadTime: PropTypes.date,
            type: PropTypes.string
        }),
        company: PropTypes.shape({
            name: PropTypes.string,
            logo: PropTypes.object,
            web: PropTypes.string,
            address: PropTypes.object,
            phones : PropTypes.object,
            emails: PropTypes.object,
            social: PropTypes.object,
            mongoDataBase : PropTypes.strinh
        }),
        genre: PropTypes.string,
        dni : PropTypes.string,
        birthdate: PropTypes.date,
        emails: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            emailDescription: PropTypes.string,
            emailUrl: PropTypes.string,
        })),
        address: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            streetAddress: PropTypes.string,
            cityAddress: PropTypes.string,
            stateProvinceAddress: PropTypes.string,
            postcodeAddress: PropTypes.string,
            countryAddress: PropTypes.string,
            name: PropTypes.string,
            
        })),
        phones: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            telNum: PropTypes.string,
        })),
        social: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            socialNetwork: PropTypes.string,
            socialUser: PropTypes.string,
        }))
    }),
};

