import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: any;
  @Input() id: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  addLike() {
    this.post.count++;
  }

  removeLike() {
    if (this.post.count > 0) {
      this.post.count--;
    }
  }

  removePost() {
    this.post = false;
  }
}
