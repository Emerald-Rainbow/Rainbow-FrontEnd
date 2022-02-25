import db from '../../../../utils/db/firebaseAdmin';

export default async (req, res) => {
    try {
        const data = req.body;
        const docRef = db.collection('requests').doc();
        await docRef.set(data);
        res.send(docRef.id);
    } catch (error) {
        res.status(400).send(error.message);
    }
}