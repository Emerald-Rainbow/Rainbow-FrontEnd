import db from   '../../../../utils/db/firebaseAdmin';

export default async (req, res) => {
     if(req.method === 'POST') {

    try {
        const data = req.body;
        const userData = data.userData;
        const followerData = data.followerData;
        console.log(data);
        const following = db.collection('users').doc(followerData.id).collection('public').doc('relations').collection('following').doc(userData.id);
        await following.set(userData);
        const follower = db.collection('users').doc(userData.id).collection('public').doc('relations').collection('followers').doc(followerData.id);
         await  follower.set(followerData);
         const message = {
            message: `the follow request was successful`,
            success : true
        }
         res.send(message); 
        }
     catch (error) {
        const errorMessage = {
            message: error.message,
            success : false
        }
        res.status(400).send(errorMessage);
        console.log(error.message);
    }
}
    else if(req.method === 'DELETE'){
        try {
        const data = req.query;
        const userId = data.userId;
        
       const followerId = data.followerId;
        await db.collection('users').doc(followerId).collection('public').doc('relations').collection('following').doc(userId).delete();
        await db.collection('users').doc(userId).collection('public').doc('relations').collection('followers').doc(followerId).delete();
        const message = {
            message: `the unfollow request was successful`,
            success : true
        }
        res.send(message);
        
    }
    catch (error) {
        const errorMessage = {
            message: error.message,
            success : false
        }
        res.status(400).send(errorMessage);
        console.log(error.message);
    }
    }

  }