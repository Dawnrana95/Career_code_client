export const MyAddJobPromice = (email) =>{
    return fetch(`http://localhost:3000/data?email=${email}`)
    .then(res => res.json())
}