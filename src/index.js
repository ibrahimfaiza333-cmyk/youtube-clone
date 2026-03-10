import dotenv from "dotenv";
dotenv.config();
import express from "express"
import connectDB from "./db/index.js";

const app=express();

;(async ()=>{
  try {
    await connectDB()


app.listen(process.env.PORT,()=>{
  console.log(`app listens at ${process.env.PORT}`);
  
})



  } catch (error) {
    console.log(error);
    throw error
  }
})();



// ;(async()=>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.on("error",(error)=>{
//         console.log("error",error);
//       })
      
//       app.listen(process.env.PORT,()=>{
//         console.log(`app is listening at ${process.env.PORT}`);
        
//       })
//     } catch (error) {
//         console.log(error);
//         throw error
//     }
// })()