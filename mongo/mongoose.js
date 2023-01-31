import mongoose from 'mongoose';
const connectDb=handler=> async(req,res)=>{
  if(mongoose.connections[0].readyState){
    return handler(req,res)
  }

  await mongoose.connect(process.env.MONGODB_URI)
  return handler(req,res);
}
app.post('/id', (req, res)=>{
  var myData=new contact(req.body);
  myData.save().then(()=>{
      res.send("This item has been saved to database");
  }).catch(()=>{
      res.status(400).send("Item was not saved to the database ")
  });

  // res.status(200).render('contact.pug');
})

export default connectDb
