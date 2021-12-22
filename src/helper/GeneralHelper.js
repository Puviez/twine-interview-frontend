export const generateId = (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const setLocalStorage = (key, value) => {
  if (typeof key !== 'string') {
    // Dummy error handling
    console.log('Invalid Key')
    return
  }
  window.localStorage.setItem(key, JSON.stringify(value))
}