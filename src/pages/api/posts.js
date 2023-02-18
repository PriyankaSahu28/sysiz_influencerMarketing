import clientPromise from "../../../lib/mongodb";
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("userdetails");
  switch (req.method) {
    case "POST":
      const allId = await db.collection("id").find({}).toArray();
      //  console.log(allId);
       const user = await db.collection("id").find({}).toArray();
        console.log(user);
      let bodyObject = JSON.parse(req.body);
      console.log(bodyObject);
      let userregistered = false;
      for (let index = 0; index < user.length; index++) {
        const temp = JSON.stringify(user[index]);
        const temp1 = JSON.parse(temp);
        console.log(temp1.email);
        console.log(bodyObject.email);
        if (temp1.googleid === bodyObject.googleid) {
          userregistered = true;
          console.log("User already exist");
          break;
        }
      }
      if (!userregistered) {
        let myPost = await db.collection("id").insertOne(bodyObject);
        res.json(myPost.ops[0]);
      }
      res.json("{}");
      break;
    case "GET":
      const allIds = await db.collection("id").find({}).toArray();
      res.json({ status: 200, data: allIds });
      break;
  }
}
