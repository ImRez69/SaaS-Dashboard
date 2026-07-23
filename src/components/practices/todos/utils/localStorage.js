const localSet = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(
      `Error Setting localStorage Key and Value - Details: key = ${key}, value = ${value}, err = ${err}`,
    );
  }
};

const localGet = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (err) {
    console.error(
      `Error Parsing localStorage Key - Details: key = ${key}, err = ${err}`,
    );
    return null;
  }
};

export { localGet, localSet };
