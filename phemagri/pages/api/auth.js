// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios');

export default async function authAPI(req, res) {

  console.log({body: req.body})
  const {name, email, phone, password, loginType} = req.body;
  const dbUrl = `https://phemagri-899c0-default-rtdb.firebaseio.com/credentials/users/${email.split('@')[0]}.json`

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


    const reqResponse = await axios(
      {
        method: 'get',
        url: dbUrl
      }
    )

     // auth
    const verifyEmail = () => JSON.stringify(reqResponse.data).match(email) !== null
    const verifyPassword = () => JSON.stringify(reqResponse.data).match(password) !== null


       // Login User
       if (verifyEmail() && verifyPassword){
         switch (loginType[0]) {
           case "Farmer":
             res.status(200).redirect("/Farmer");
             break;
           case "Input Provider":
             res.status(200).redirect("/InputProvider");
             break;
           case "Vendor":
             res.status(200).redirect("/Vendor");
             break;
           case "Investor":
             res.status(200).redirect("/Investor");
             break;
           default:
             res.status(200).redirect("/Farmer");
             break;
         }
        
        }
        else{
          res.status(200).redirect('/')
        }

    // res.status(200).redirect('/')
  }
  catch(error){
  console.log(error.message)
 }

}
}
