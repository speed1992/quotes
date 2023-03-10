export const isUndefined = (value) => typeof value === 'undefined'
export const isObjEmpty = (obj) => Object.values(obj).length === 0 && obj.constructor === Object
