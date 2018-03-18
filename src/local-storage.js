export const loadAuthToken = () => {
  try {
    return localStorage.getItem('authToken');
  }catch(e){
    //console.log(e);
  }
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {
      //console.log(e);
    }
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {
     // console.log(e);
    }
};
