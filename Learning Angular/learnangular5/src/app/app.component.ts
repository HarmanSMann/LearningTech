import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Artist {
  name: string
  shortname: string
  reknown: string
  bio: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
    .list-group-item:first-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: 0;
    }
    `
  ]
})

export class AppComponent implements OnInit{
  query: string;
  artists: object;

  showArtist(item: Artist) {
    this.query = item.name;
  }

  constructor(private http: HttpClient) {
    this.query = '';
    this.artists = [];
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(data => {
      this.artists = data;
    })
  }

  title = 'my Application';
}
