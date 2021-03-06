import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    new Post({
      title: 'Post 1',
      subtitle: 'Subtitle 1',
      message: 'Message 1',
      count: 0,
      createDate: '01/01/2020',
    }),
    new Post({
      title: 'Post 2',
      subtitle: 'Subtitle 2',
      message: 'Message 2',
      count: 0,
      createDate: '02/02/2020',
    }),
    new Post({
      title: 'Post 3',
      subtitle: 'Subtitle 3',
      message: 'Message 3',
      count: 0,
      createDate: '03/03/2020',
    }),
    new Post({
      title: 'Post 4',
      subtitle: 'Subtitle 4',
      message: 'Message 4',
      count: 0,
      createDate: '04/04/2020',
    }),
    new Post({
      title: 'Post 5',
      subtitle: 'Subtitle 5',
      message: 'Message 5',
      count: 0,
    }),
  ];

  constructor() {}

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: number): Post {
    return this.posts[id];
  }
}
