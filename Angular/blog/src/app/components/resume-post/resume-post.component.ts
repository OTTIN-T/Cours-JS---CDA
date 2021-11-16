import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-resume-post',
  templateUrl: './resume-post.component.html',
  styleUrls: ['./resume-post.component.css'],
})
export class ResumePostComponent implements OnInit {
  id: number = 0;
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getPost(this.id);
  }

  getPost(id: number): Post {
    return (this.post = this.postService.getPost(id));
  }
}
