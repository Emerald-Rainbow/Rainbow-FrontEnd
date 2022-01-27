import db from '../../../utils/db/firebaseAdmin';
import Blog from '../../../utils/models/blogModel';

export default async (req, res) => {
    try {
        const blogs = await db.collection('blogs');
        const data = await blogs.get();
        const blogsArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const blog = new Blog(
                    doc.id,
                    doc.data().userId,
                    doc.data().title,
                    doc.data().content,
                    doc.data().createdAt
                );
                blogsArray.push(blog);
            });
            res.send(blogsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
  }