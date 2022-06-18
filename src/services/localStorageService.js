const USER = "user";
export const localStorageService = {
  setUserInfo: (user) => {
    let dataJson = JSON.stringify(user);
    localStorage.setItem(USER, dataJson);
  },
  getUserInfor: () => {
    let dataJson = localStorage.getItem(USER);
    if (dataJson) {
      return JSON.parse(dataJson);
    }
    return null;
  },
  removeUserInfor: () => {
    localStorage.removeItem(USER);
  },
};
