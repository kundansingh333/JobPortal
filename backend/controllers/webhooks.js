import { Webhook } from "svix";
import User from "../models/User.js";

//API controller function to manage Clerk user with database
export const clerkWebhooks=async(req,res)=>{
  try{
      //Create a svix instance with clerk webhook secret
      const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET);

      //verifying headers
      await whook.verify(JSON.stringify(req,body),{
        "svix-id": req.headers["svix-id"],
        "svix-timestamp":req.headers["svix-timestamp"],
        "svix-signature": req.headers["svix-signature"],
      });

      //getting data from request body
      const {data,type}=req.body;//type=user update,create,delete,data=payload data for the user

      //Switch cases for different events
      switch (type) {
        
        case "user.created":{
          const userData={
            _id:data.id,
            email:data.email_addresses[0].email_address,
            name:data.first_name+" "+data.last_name,
            image:data.image_url,
            resume:''
          }
          
          await User.create(userData);
          console.log("User created");
          res.json({});
          break;

          
        }
        case "user.updated":{
            const userData={
              email:data.email_addresses[0].email_address,
              name:data.first_name+" "+data.last_name,
              image:data.image_url,
            }
            await User.findByIdAndUpdate(data.id,userData);
            res.json({});
            break;
        }
        case "user.deleted":{
            await User.findByIdAndDelete(data.id);
            res.json({});
            break;
        }

        default:
          break;
      }
  }catch(err){
    console.log(err.message);
    res.json({success:false,message:"Webhook error"});
  }
}