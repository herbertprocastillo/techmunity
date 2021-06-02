import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {

  @Input() user: any;
  postForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private postSvc: PostService) {
    this.postForm = this.fb.group({
      ownerId: [''],
      ownerName: [''],
      ownerPhotoUrl: [''],
      content: ['', [Validators.required]],
      visibility: ''
    });
  }

  ngOnInit(): void {
  }

  onSave(): void {
    console.log('Guardado', this.postForm.value);
    if (this.postForm.valid) {
      const post = this.postForm.value;
      const postId = post?.id || null;
      this.postSvc.savePost(post, postId);
      this.postForm.reset();
    }
  }

}