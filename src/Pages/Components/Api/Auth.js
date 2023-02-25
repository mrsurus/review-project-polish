export const setAuthToken =(user)=>{

    const currentUser = {
        email: user.email
     }
     console.log(currentUser);
     fetch('http://localhost:5000/jwt',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
     })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        console.log(data.token)
        localStorage.setItem('review-token', data.token)
     })

}