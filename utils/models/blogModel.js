class Blog {
    constructor( id, userId, title, content, createdAt, likes, author, authorPic) {
            this.blogId = id;
            this.userId = userId;
            this.title = title;
            this.content = content;   
            this.createdAt = createdAt;       
            this.likes =  likes;  
            this.author = author;
            this.authorPic = authorPic;
    }
}

module.exports = Blog;