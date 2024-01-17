export class Post {
    postId: string | undefined;
    title: string;
    content: string;
    author: string | undefined;
    createdDate: any;

    constructor() {
        this.title = '';
        this.content = '';
    }
}
