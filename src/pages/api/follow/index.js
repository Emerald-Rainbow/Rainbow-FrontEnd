import db from   '../../../../utils/db/firebaseAdmin';
import Blog from '../../../../utils/models/blogModel';

export default async (req, res) => {
  
    try {
        const data = req.body;
        const userData = data.userData;
        const followerData = data.followerData;
        console.log(data);
        const following = db.collection('users').doc(followerData.id).collection('public').doc('relations').collection('following').doc();
        await following.set(userData);
        const follower = db.collection('users').doc(userData.id).collection('public').doc('relations').collection('followers').doc();
         await  follower.set(followerData);
         res.send('follow request success'); 
        }
     catch (error) {
        res.status(400).send(error.message);
        console.log(error.message);
    }

  }