export const MyApplicatoonPromice = (email) =>{
    return fetch(`http://localhost:3000/applcation?email=${email}`)
    .then(res => res.json())
}