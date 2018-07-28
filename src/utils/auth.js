import localforage from 'localforage'

export const loadSession = async () => {
  let session
  try {
    session = await localforage.getItem('session')
  } catch (err) {
    console.error(err)
  }
  return session
}

export const restoreSession = () => {
  return new Promise(async (resolve, reject) => {
    let session
    try {
      session = await loadSession()
    } catch (err) {
      reject()
    }
    session ? resolve(session) : reject()
  })
}

export const storeSession = async session => {
  let value
  try {
    value = await localforage.setItem('session', session)
  } catch (err) {
    console.error(err)
  }
  return value
}
