export default (url,method,json) => {
    if(typeof method !== 'string' ) return fetch(url,fetch);
    return fetch(url,{
        method,  
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    }).then(x=>x.json());
};
