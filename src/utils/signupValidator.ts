const signupValidator = (userInfo: any): boolean => {
  return userInfo.name.length >= 2 && userInfo.agreement == true;
};

export default signupValidator;
