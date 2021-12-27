class Blog {
    constructor( id, userId, title, content, createdAt) {
            this.blogId = id;
            this.userId = userId;
            this.title = title;
            this.content = content;   
            this.createdAt = createdAt;         
    }
}

module.exports = Blog;