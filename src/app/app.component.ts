import { Component } from '@angular/core';
import { SongsService } from './songs/songs.service'
import { Song } from './songs/song.interface'
import './natural'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public songList: Song[] = []
  public currentSong: Song
  public searchText: String;

  constructor(
    private Songs: SongsService
  ) {}

  ngOnInit() {
    this.songList = this.Songs.getSongList()
  }

  handleChooseSong(song: Song) {
    this.currentSong = song
  }

  handleClearCurrentSong() {
    this.currentSong = null
  }

  searchSong() {
    this.songList = this.Songs.getSongList();
    this.songList = this.songList.filter((song) => {
      if(song.artist.toLowerCase().indexOf(this.searchText.trim().toLowerCase()) > -1 || song.title.toLowerCase().indexOf(this.searchText.trim().toLowerCase()) > -1) return true;
      else return false;
    })
  }

  searchChanged(ev) {
    if(!ev.data) {
      this.songList = this.Songs.getSongList();
    }
  }
}
