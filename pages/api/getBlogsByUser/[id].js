import db from   '../../../utils/db/index';
import Blog from '../../../utils/models/blogModel';

export default async (req, res) => {
    const { id } = req.query;
    try {
        const blogs = db.collection('blogs');
        const data = await blogs.where('userId', '==', id).get();
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