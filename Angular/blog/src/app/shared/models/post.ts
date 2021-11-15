export class Post {
  title: string;
  subtitle: string;
  message: string;
  count: number;
  createDate: Date;

  constructor(post?: any) {
    post = post || {};
    this.title = post.title || '';
    this.subtitle = post.subtitle || '';
    this.message = post.message || '';
    this.count = post.count || 0;
    this.createDate = post.createDate || '';
  }
}
