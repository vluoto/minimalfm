export default function withQuery (url, params) {
  const esc = encodeURIComponent
  const query = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&')

  return `${url}?${query}`
}
