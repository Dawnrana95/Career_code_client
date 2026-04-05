export const MyAddJobPromice = (email) =>{
    return fetch(`https://career-code-server-gilt.vercel.app/data?email=${email}`)
    .then(res => res.json())
}