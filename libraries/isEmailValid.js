const isEmailValid = (email) => {
  const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  return regex.test(email);
};

export default isEmailValid;
