import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() userName: string | undefined;
  @Input() postContent: string | undefined;
  @Input() cargo: string | undefined;
  @Input() linkVideo: string | undefined;

  constructor() {

  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }


}
