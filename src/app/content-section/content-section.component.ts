import { Component, Input } from '@angular/core';
import { card } from '../models/card';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html'
})
export class ContentSectionComponent {
  contents : card[] = [
    {thumbnail: '../assets/img/vid1.jpg', channelName: 'Netflix', title: 'Wednesday | Season 2 Announcement', desc: '11M views , 2 days ago'},
    {thumbnail: '../assets/img/vid2.jpg', channelName: 'Power Couple', title: 'I solved 541 Leetcode problems.', desc: '1M views , 2 months ago'},
    {thumbnail: '../assets/img/vid3.jpg', channelName: 'Gej Yu Ve?', title: 'Нүцгэн нүдээр Астрономи...', desc: '33K views , 1 year ago'},
    {thumbnail: '../assets/img/vid4.jpg', channelName: '에익쿠', title: 'MBTI in Senior Center', desc: '20K views , 19 hours ago'},
    {thumbnail: '../assets/img/vid5.jpg', channelName: 'The New Travel', title: 'London, how many languages do you speak?', desc: '1.4M views , 3 weeks ago'},
    {thumbnail: '../assets/img/vid6.jpg', channelName: 'Benj Haisch', title: 'The $50 Film Camera You Should Actually Buy.', desc: '537K views , 3 months ago'},
    {thumbnail: '../assets/img/vid7.jpg', channelName: 'F:Eight', title: 'Ditto // Slowed to Perfection"><b>Ditto // Slowed to Perfection', desc: '88K views , 3 weeks ago'},
    {thumbnail: '../assets/img/vid8.jpg', channelName: 'Zach Star', title: 'Random things that will (likely) surprise you', desc: '1.8M views , 3 years ago'},
    {thumbnail: '../assets/img/vid1.jpg', channelName: 'Netflix', title: 'Wednesday | Season 2 Announcement', desc: '11M views , 2 days ago'},
    {thumbnail: '../assets/img/vid2.jpg', channelName: 'Power Couple', title: 'I solved 541 Leetcode problems.', desc: '1M views , 2 months ago'},
    {thumbnail: '../assets/img/vid3.jpg', channelName: 'Gej Yu Ve?', title: 'Нүцгэн нүдээр Астрономи...', desc: '33K views , 1 year ago'},
    {thumbnail: '../assets/img/vid4.jpg', channelName: '에익쿠', title: 'MBTI in Senior Center', desc: '20K views , 19 hours ago'},
    {thumbnail: '../assets/img/vid5.jpg', channelName: 'Netflix', title: 'Wednesday | Season 2 Announcement', desc: '11M views , 2 days ago'},
    {thumbnail: '../assets/img/vid6.jpg', channelName: 'Power Couple', title: 'I solved 541 Leetcode problems.', desc: '1M views , 2 months ago'},
    {thumbnail: '../assets/img/vid7.jpg', channelName: 'Gej Yu Ve?', title: 'Нүцгэн нүдээр Астрономи...', desc: '33K views , 1 year ago'},
    {thumbnail: '../assets/img/vid8.jpg', channelName: '에익쿠', title: 'MBTI in Senior Center', desc: '20K views , 19 hours ago'}
  ]

}
