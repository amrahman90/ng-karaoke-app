import { Component, EventEmitter, Input, OnInit, Output, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Song } from '../songs/song.interface';

@Component({
  selector: 'song-selection',
  templateUrl: './song-selection.component.html',
  styleUrls: ['./song-selection.component.css']
})
export class SongSelectionComponent implements OnInit {

  @Input() songList: Song[]
  @Input() currentSong: Song
  @Output() onChooseSong = new EventEmitter<Song>()

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    for(var i=0; i<this.songList.length; i++) {
      this.songList[i]["liked"] = false;
      if(!localStorage.getItem('song'+i)) {
        localStorage.setItem('song'+i, "0");
        this.songList[i]["likes"] = 0;
      }
      else {
        this.songList[i]["likes"] = parseInt(localStorage.getItem('song'+i));
      }
    }
  }

  handleChooseSong($event, song: Song) {
    $event.preventDefault()
    this.onChooseSong.emit(song)
  }

  openDialog(id): void {
    this.dialog.open(ShareSongDialog, {
      width: '250px',
      data: {id: id}
    });
  }

  liked(id) {
    for(var i=0; i<this.songList.length; i++) {
      if(this.songList[i].id == id) {
        if(this.songList[i]["liked"]) {
          this.songList[i]["liked"] = false;
          this.songList[i]["likes"] -= 1;
          localStorage.setItem('song'+i, this.songList[i]["likes"]);
        }
        else {
          this.songList[i]["liked"] = true;
          this.songList[i]["likes"] += 1;
          localStorage.setItem('song'+i, this.songList[i]["likes"]);
        }
      }
    }
  }

}

@Component({
  selector: 'share-song-dialog',
  templateUrl: './share-song-dialog.html',
})
export class ShareSongDialog {

  shareUrl: any;

  constructor(
    public dialogRef: MatDialogRef<ShareSongDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.shareUrl = location.host + '/song/' + this.data.id;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
