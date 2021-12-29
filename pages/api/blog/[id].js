import db from '../../../utils/db/firebaseAdmin';

export default async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === 'PUT') {
        const data = req.body;
        const blog =  await db.collection('blogs').doc(id);
        await blog.update(data);
        res.send('Blog record updated successfuly');
    } else if (req.method === 'GET') {
        const blogs = await db.collection('blogs').doc(id);
        const data = await blogs.get();
        //console.log(blogs)
        // console.log(data.data())
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            res.send(data.data());
        }
    } else if (req.method === 'DELETE') {
        await db.collection('blogs').doc(id).delete();
        res.send('Record deleted successfuly');
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).send(error.message);
  }
}