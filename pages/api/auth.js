// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require("axios");


export default async function authAPI(req, res) {

;
  const { name, email, phone, password } = req.body;
  
 const { loginType } = req.query;

  console.log(loginType);

  const dbUrl = `https://phemagri-899c0-default-rtdb.firebaseio.com/credentials/users/${
    email.split("@")[0]
  }.json`;


  // Create User
  if (req.body.phone !== undefined) {
    try {
      const response = await axios({
        method: "post",
        url: dbUrl,
        data: { name, email, phone, password },
      });

      if (response) {
        res.writeHead(302, { Location: '/UserCreated' }).end()
      }
    } catch (error) {
      console.log(error.message);
    }
  } else {
    // Read User

    try {
      const reqResponse = await axios({
        method: "get",
        url: dbUrl,
      });

      // auth
      const verifyEmail = () =>
        JSON.stringify(reqResponse.data).match(email) !== null;
      const verifyPassword = () =>
        JSON.stringify(reqResponse.data).match(password) !== null;

      // Login User
      if (verifyEmail() && verifyPassword()) {

        switch (loginType) { 
          case "Farmer":
            res.writeHead(302, { Location: '/Farmer' }).end()
            break;
          case "Input Provider":
            res.writeHead(302, { Location: '/InputProvider' }).end()
            break;
          case "Vendor":
            res.writeHead(302, { Location: '/Vendor' }).end()
            break;
          case "Investor":
            res.writeHead(302, { Location: '/Investor' }).end()
            break;
          default:
            res.writeHead(302, { Location: '/InFarmer' }).end()
            break;
        }
      } else {
        res.status(200).redirect("/");
      }

    } catch (error) {
      console.log({error:error.message});
    }
  }
}
