import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'youtube-clone';
  contents = [
    {thumbnail: 'thumbnail', channelName: 'ABC', profile: '0', title: 'title', desc: '1M views'},
    {thumbnail: 'thumbnail', channelName: 'DEF', profile: '0', title: 'title', desc: '2M views'},
    {thumbnail: 'thumbnail', channelName: 'GHI', profile: '0', title: 'title', desc: '3M views'},
    {thumbnail: 'thumbnail', channelName: 'JKL', profile: '0', title: 'title', desc: '4M views'}
  ]
}
