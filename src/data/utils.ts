function getKeyByValue(object: {[key: string]: string | number}, value: string | number): any{
  return Object.keys(object).find(key => object[key] === value);
}

export { getKeyByValue }
