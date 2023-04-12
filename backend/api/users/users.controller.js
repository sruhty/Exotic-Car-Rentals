import { generateControllers } from "../../modules/query";
import { Users } from "./users.model";
const router = express.Router();


const ProfileData = async (req, res) => {
  try {
    const data = req.body;
    const isExists = await Users.find({_id: data.id});
    res.status(200).send(isExists);
  } catch (err) {
    console.log("Error", err);
    res.status(422).send({error: "Error in getting user time info"});
  }
};
// API route to fetch user data
router.get('/user/:email', async (req, res) => {
  try {
    const email = req.params.email;

    // Fetch user data based on email ID
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
     // Check if email ID matches the particular email ID you're interested in
     const isParticularEmail = user.email === 'admin@gmail.com';

     return res.json({ user, isParticularEmail });
   } catch (error) {
     return res.status(500).json({ message: 'Server error' });
   }
 });
 
 

const UpdateProfileData = async (req, res) => {
  try {
    const data = req.body;
    const result = await Users.findByIdAndUpdate(req.params.Users_id,{
        firstName:data.firstName,
        lastName:data.lastName,
        emailId:data.emailId,
        mobile:data.mobile,
        country:data.country,
        state:data.state,
        city:data.city,
        pincode:data.pincode,
        photo:data.photo
    });
    res.status(200).send(result);
  } catch (err) {
    console.log("Error", err);
    res.status(422).send({error: "Error in getting user time info"});
  }
};

 const countData  = async (req, res) => {
  try {
    const create = await Users.aggregate( [{ $count: "employeeCount" }])
    res.status(200).send({done: true, data: create })
  } catch (err) {
    console.log(err)
    res.status(422).send({done: false, message: err.message, error: "Error in create category!"})
  }
}

export default generateControllers(Users, {
   ProfileData,UpdateProfileData,countData,router
});
