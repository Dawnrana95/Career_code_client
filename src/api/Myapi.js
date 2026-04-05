export const MyApplicatoonPromice = (email) =>{
    return fetch(`https://career-code-server-gilt.vercel.app/application?email=${email}`,{
        credentials: 'include'
    })
    .then(res => res.json())
}