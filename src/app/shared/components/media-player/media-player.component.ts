import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    _id: 1,
    cover: "https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc",
    album: "Giolì & Assia",
    name: "BEBE (Official Video)",
    url: "http://localhost:3000/track-3.mp3",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
