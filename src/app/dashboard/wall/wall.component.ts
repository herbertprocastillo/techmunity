import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  listPost = [
    {
      userName: 'Herbert Pro Castillo',
      postContent: 'primer post con contenido ramdom',
      cargo: 'Desarrollador Frontend',
      linkVideo:'5qtlCOBKQvc'
    },
    {
      userName: 'Vanessa Valle Miranda',
      postContent: 'segundo post con contenido ramdom',
      cargo:'Jefe Area legal',
      linkVideo:''
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
