import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Observable<Post[]> | undefined;

  private postCollection: AngularFirestoreCollection<Post>;

  constructor(private readonly afs: AngularFirestore) {
    this.postCollection = afs.collection<Post>('posts');

    this.getPost();
  }

  savePost(post: Post, postId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = postId || this.afs.createId();
        const data = { id, ...post };
        const result = await this.postCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  deletePost(postId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.postCollection.doc(postId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  getPost(): void {
    this.posts = this.postCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Post))
    );
  }


}
