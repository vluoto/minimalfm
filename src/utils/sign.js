import md5 from 'md5'

export default function sign (params) {
  const keys = Object.keys(params)
  const parts = keys.sort().map(key => `${key}${params[key]}`)

  parts.push(process.env.LASTFM_SHARED_SECRET)

  return md5(parts.join(''))
}
