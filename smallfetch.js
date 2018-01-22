const rs = 'application/json';
export default (url, method = 'GET', json, shouldFail = (json?json:true) ) => {
  if (typeof method !== 'string') return fetch(url, method);
  return fetch(url, {
    method,
    headers: {
      'Accept': rs,
      'Content-Type': rs
    },
    body: JSON.stringify(json)
  }).then(x => {
    if (!x.ok && shouldFail) throw x;
    return x.json()
  });
};
