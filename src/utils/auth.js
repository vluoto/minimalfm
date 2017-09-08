import localforage from 'localforage'

export const loadSession = (session) => {
  return localforage.getItem(
    'session'
  ).then(value => {
    return value
  }).catch(err => {
    console.error(err)
  })
}

export const restoreSession = () => {
  return new Promise((resolve, reject) => {
    loadSession().then(session => {
      if (session) {
        resolve(session)
      } else {
        reject()
      }
    }).catch(() => {
      reject()
    })
  })
}

export const saveSession = (session) => {
  return localforage.setItem(
    'session',
    session
  ).then(value => {
    return value
  }).catch(err => {
    console.error(err)
  })
}
