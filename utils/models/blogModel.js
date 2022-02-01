class Blog {
    constructor( id, userId, title, content, createdAt, likes) {
            this.blogId = id;
            this.userId = userId;
            this.title = title;
            this.content = content;   
            this.createdAt = createdAt;       
            this.likes =  likes;  
    }
}

module.exports = Blog;