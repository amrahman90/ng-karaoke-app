import { Injectable } from '@angular/core';

import { Song } from './song.interface'

@Injectable()
export class SongsService {

  constructor() { }

  private readonly songList: Song[] = [
    {
      id: 1,
      artist: 'Rick Astley',
      title: 'Never Gonna Give You Up',
      audio: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.mp3',
      lyrics: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.lrc',
      lyricDelay: 1,
    },
    {
      id: 2,
      artist: 'Journey',
      title: 'Don\'t Stop Believing',
      audio: 'assets/songs/dont-stop-believing/dont-stop-believing.mp3',
      lyrics: 'assets/songs/dont-stop-believing/dont-stop-believing.lrc',
      lyricDelay: 1,
    },
    {
      id: 3,
      artist: 'Taylor Swift',
      title: 'I Knew You Were Trouble',
      audio: 'assets/songs/i-knew-you-were-trouble/i-knew-you-were-trouble.mp3',
      lyrics: 'assets/songs/i-knew-you-were-trouble/i-knew-you-were-trouble.lrc',
      lyricDelay: 1,
    },
    {
      id: 4,
      artist: 'One Republic',
      title: 'Apologize',
      audio: 'assets/songs/apologize/apologize.mp3',
      lyrics: 'assets/songs/apologize/apologize.lrc',
      lyricDelay: 1,
    },
    {
      id: 5,
      artist: 'Lady Antebellum',
      title: 'Need You Now',
      audio: 'assets/songs/need-you-now/need-you-now.mp3',
      lyrics: 'assets/songs/need-you-now/need-you-now.lrc',
      lyricDelay: 1,
    },
    {
      id: 6,
      artist: 'Lady Gaga',
      title: 'Poker Face',
      audio: 'assets/songs/poker-face/poker-face.mp3',
      lyrics: 'assets/songs/poker-face/poker-face.lrc',
      lyricDelay: 1,
    },
    {
      id: 7,
      artist: 'Adele',
      title: 'Someone Like You',
      audio: 'assets/songs/someone-like-you/someone-like-you.mp3',
      lyrics: 'assets/songs/someone-like-you/someone-like-you.lrc',
      lyricDelay: 1,
    },
    {
      id: 8,
      artist: 'Backstreet Boys',
      title: 'As Long As You Love Me',
      audio: 'assets/songs/as-long-as-you-love-me/as-long-as-you-love-me.mp3',
      lyrics: 'assets/songs/as-long-as-you-love-me/as-long-as-you-love-me.lrc',
      lyricDelay: 1,
    }
  ]

  getSongList() {
    return this.songList
  }

}
