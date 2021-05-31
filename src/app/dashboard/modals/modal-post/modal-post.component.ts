import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {

  @Input() user:any;

  constructor() { }

  ngOnInit(): void {
  }

}
