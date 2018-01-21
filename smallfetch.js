const rs = 'application/json';
export default (url,method,json,shouldFail=true) => {
    if(typeof method !== 'string' ) return fetch(url,fetch);
    if(typeof json === 'boolean') { 
      shouldFail = json; 
      json = undefined; 
    }
    return fetch(url,{
        method,  
        headers: {
            'Accept':rs ,
            'Content-Type': rs
        },
        body: JSON.stringify(json)
    }).then(x=>{if(!x.ok&&shouldFail)throw x; return x.json()});
};
