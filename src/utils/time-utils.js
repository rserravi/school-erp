export const getAge = (birthdate) =>{

    if (birthdate){
      if (typeof birthdate==="string"){
        birthdate = new Date (birthdate);
      }  
      var diff_ms = Date.now() - birthdate.getTime();
      var age_dt = new Date(diff_ms); 
    
      return Math.abs(age_dt.getUTCFullYear() - 1970);
      }
    return 0;
  }

export const localDate = (date) =>{
  if (date){
    const dateObj = new Date (date);
    return dateObj.toLocaleDateString('es-ES')
  }
  return new Date().toLocaleTimeString('es-ES')
}

export const daysToDate = (date) =>{
  const birthdate = new Date (date)
  const today = new Date()
  //Set current year or the next year if you already had birthday this year
  birthdate.setFullYear(today.getFullYear());
  if (today > birthdate) {
    birthdate.setFullYear(today.getFullYear() + 1);
  }
  const diff = Math.floor((birthdate.getTime() - today.getTime()) /(1000 * 3600 * 24))
  return diff;
}