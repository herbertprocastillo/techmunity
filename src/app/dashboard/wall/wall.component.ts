import {Component, OnInit} from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  post$  = this.postSvc.posts;

  constructor(private postSvc: PostService) {
  }

  ngOnInit(): void {
  }

}
