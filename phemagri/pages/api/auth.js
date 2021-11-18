// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { getFirestore, collection, getDocs } from 'firebase/database'
// import { app } from '../../shared/firebase'
const axios = require('axios');

export default async function authAPI(req, res) {

  const dbUrl = 'https://phemagri-899c0-default-rtdb.firebaseio.com/credentials/users.json'


  const {name, email, phone, password} = req.body;


    // Create User
if (req.body.phone !== undefined) {
 
    try {
      const response = await axios({
        method: 'post',
        url: dbUrl,
        data: {name, email, phone, password}
      })

      if(response){
        res.status(200).redirect('/')
      }
    }
    catch(error){
      console.log(error.message)
    }
}
else
{
    // Read User

  try {
    const emailResponse = await axios(
      {
        method: 'get',
        url: queryEmailUrl
      }
    )

    const passwdResponse = await axios(
      {
        method: 'get',
        url: queryPasswdUrl
      }
    )

    // auth
    if(emailResponse && passwdResponse){
       console.log({emailResponse, passwdResponse})
    }
  }
  catch(error){
  console.log(error.message)
 }

}
}
