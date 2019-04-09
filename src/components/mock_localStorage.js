export const localStorage= {};
  localStorage.getItem=(key)=>{
    return localStorage[key]
  }

  localStorage.setItem= (key, value)=> {
    localStorage[key] = value;
  }
  localStorage.removeItem = (key) => {
    delete localStorage[key];
  } 
