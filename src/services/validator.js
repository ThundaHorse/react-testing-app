export const validateText = value => {
  if (/^[\s\t\r\n]*\S+/gi.test(value)) {
    return true;
  }
  return false;
};

export const validateEmail = value => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) return true;
  return false;
};

export const validateUrl = value => {
  if (
    /^(http:\/\/|https:\/\/)[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm.test(
      value
    )
  )
    return true;
  return false;
};
