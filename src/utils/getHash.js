// location: elemento del navegador 
const getHash = () => // obtener el hash
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
    // ['', '1', '']

export default getHash    