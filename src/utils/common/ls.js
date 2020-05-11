export const getLSItem = key => {
  if (key === undefined) return null;
  let result = window.localStorage.getItem(key);
  try {
    result = JSON.parse(result);
  } catch (e) {
    console.warn('er---', e);
  }
  return result;
};

export const setLSItem = (key, item) => {
  if (key === undefined || item === undefined) return;
  if (typeof item === 'object') {
    item = JSON.stringify(item);
  }
  window.localStorage.setItem(key, item);
};

export const removeLSItem = key => {
  if (key === undefined) return;
  window.localStorage.removeItem(key);
};
