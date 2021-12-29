import db from '../../../utils/db/firebaseAdmin';

export default async (req, res) => {
    try {
        const data = req.body;
        await db.collection('blogs').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}