// posts.js

import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("userdetails");
  switch (req.method) {
    case "POST":

      const allPost = await db.collection("id").find({}).toArray();
      // console.log(allPost);
      const user=await db.collection("id").find({}).toArray();
    
     let bodyObject = JSON.parse(req.body);
     let x=false;
      for(let index=0;index<user.length;index++){
          const temp=JSON.stringify(user[index]);
          const temp1=JSON.parse(temp);
          if(temp1.email===bodyObject.email){
            x=true;
            console.log("User already exist");
            break;
          }

      }
    
      if(!x){
        let myPost = await db.collection("id").insertOne(bodyObject);
        res.json(myPost.ops[0]);
        
      }
     res.json("{}");
     break;
    
     
    case "GET":
      const allPosts = await db.collection("id").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
