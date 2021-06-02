//export type Categories = 'VIDEO' | 'REQUEST' | 'REPO';

export interface Post {
  id?: string;
  ownerId: string;
  ownerName: string;
  ownerPhotoUrl:string;
  content?: string;
  visibility?:string;
  //category?: Categories;
  edited: boolean;
  shares?: [{
    uid: string, displayName: string, photoURL: string, destiny: string
  }];
  likes?: [{
    uid: string, displayName: string, photoURL: string
  }];
  comments?: [{
    uid: string, displayName: string, photoURL: string, content: string
  }];

}
