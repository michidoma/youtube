import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { card } from '../models/card';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
})
export class ContentSectionComponent {
  constructor(private _router: Router) {}

  navigateToHome() {
    this._router.navigate(['home']);
  }
  navigateToWatch() {
    this._router.navigateByUrl('/watch');
  }

  contents: card[] = [
    {
      thumbnail: '../../assets/img/vid1.jpg',
      channelName: 'Netflix',
      channelProfile:
        'https://yt3.ggpht.com/ytc/AMLnZu8ez2zjv7E2Sp0qzjYCnrpBMLMm5c26MJkGBIQHww=s88-c-k-c0x00ffffff-no-rj',
      channelSubCount: '25.6M',
      title: 'Wednesday Addams | Season 2 Announcement | Netflix',
      embed: 'https://www.youtube.com/embed/j_MuZmJNirw?controls=0',
      likeCount: '595K',
      views: '14M',
      time: '5 days',
      description:
        "About Netflix: Netflix is the world's leading streaming entertainment service with 223 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.",
    },
    {
      thumbnail: '../assets/img/vid2.jpg',
      channelName: 'Power Couple',
      channelProfile:
        'https://yt3.googleusercontent.com/h_5EX_GD2dB4Ti3cQbQ1BjGkm_M-EN_z_mWSw7KG-kYzswbULF5bTogzGRm-KcawIqiXgcnJiOM=s176-c-k-c0x00ffffff-no-rj',
      channelSubCount: '245K',
      title: 'I solved 541 Leetcode problems. But you need only 150.',
      embed: 'https://www.youtube.com/embed/xF554Tlzo-c',
      likeCount: '39K',
      views: '1M',
      time: '2 months',
      description:
        "DISCLAIMER: All opinions shared on this channel are our own and don't express views or opinions of our employers. We only use our experiences and public knowledge to make our content. NO CONFIDENTIAL INFORMATION of our employers is used or shared on this channel. This is not a Professional Coaching channel, it only highlights the public resources that have worked for our careers.",
    },
    {
      thumbnail: '../assets/img/vid3.jpg',
      channelName: 'Gej Yu Ve?',
      channelProfile:
        'https://yt3.ggpht.com/oYmh_vAg_RMbv3BQWPhobyD8S0UOwP5W0ZUJl30Hh911AKRDKe5JTxJC8FS1fuUvmRgObuyaaA=s88-c-k-c0x00ffffff-no-rj',
      channelSubCount: '',
      title: 'Нүцгэн нүдээр Астрономи...',
      embed: 'https://www.youtube.com/embed/CL-f66Ks_yA',
      likeCount: '1.5K',
      views: '104K',
      time: '1 year',
      description:
        'Тэнгэрийг судлахад заавал телескопны шаардлага байхгүй. Эхний ээлжинд одон орны энгийн объектуудыг таних, ялгахыг биеэ даан сурч болно. Таньд хэрэгтэй зүйл гэвэл ердөө л гэрлийн бохирдол багатай цэлмэг тэнгэр бас багахан хэмжээний мэдлэг. Энэхүү бичлэгээр бүгдээрээ хэрхэн нүцгэн нүдээрээ одон оронч болохыг сурцгаая!',
    },
    {
      thumbnail: '../assets/img/vid4.jpg',
      channelName: '에익쿠',
      channelProfile:
        'https://yt3.ggpht.com/ytc/AMLnZu9Y3Du2zy4Vg6laGb_3-eWKECdEUDneuwqpqs5-fA=s88-c-k-c0x00ffffff-no-rj',
      channelSubCount: '306K',
      title: 'MBTI in Senior Center',
      embed: 'https://www.youtube.com/embed/JkBwd-k82IE',
      likeCount: '2.7K',
      views: '55K',
      time: '3 weeks',
      description:
        '22년도 재밌었습니다~<br>▶  insta : eicku_16<br>※ 비하발언, 욕설 댓글 등 보기불편한 댓글은 삭제될 수 있습니다.',
    },
    {
      thumbnail: '../assets/img/vid5.jpg',
      channelName: 'The New Travel',
      channelProfile:
        'https://yt3.ggpht.com/n9ZfVxi2_kdet0XKTyQX79l_w2ISOMVEU3sOEWV1DMRyOef4AsYoq2bE12HYnUlFteqrw8OzXQ=s88-c-k-c0x00ffffff-no-rj',
      channelSubCount: '211K',
      title: 'London, how many languages do you speak?',
      embed: 'https://www.youtube.com/embed/0DOMlNJ9sOk',
      likeCount: '35K',
      views: '1.5M',
      time: '4 weeks',
      description:
        'Today we visit London, England and ask strangers how many languages they speak. Support my channel: 👉 https://www.patreon.com/thenewtravel',
    },
    {
      thumbnail: '../assets/img/vid6.jpg',
      channelName: 'Benj Haisch',
      channelProfile:
        'https://yt3.ggpht.com/ytc/AMLnZu9UAfBSjgPJhlW-L-4rMnYh5r9DBEKMlMAzRkkm81o=s88-c-k-c0x00ffffff-no-rj',
      channelSubCount: '49.2K',
      title: 'The $50 Film Camera You Should Actually Buy.',
      embed: 'https://www.youtube.com/embed/qCcnF5Jk4ZE',
      likeCount: '18K',
      views: '546K',
      time: '3 months',
      description:
        'DISCLAIMER: This video and description contain affiliate links, which means that if you click on one of the product links, I’ll receive a small commission. This helps to support the channel and allows me to continue to make videos like this.',
    },
    {
      thumbnail: '../assets/img/vid7.jpg',
      channelName: 'F:Eight',
      channelProfile:
        'https://yt3.ggpht.com/y0_55vKIPAKpWYOUUeLSLKCULCKLJloGbd_g0FYJIF--GZkgOFY4VLHlJGHmCmZX31wGBgDwDg=s88-c-k-c0x00ffffff-no-nd-rj',
      channelSubCount: '513',
      title: 'Ditto // Slowed to Perfection',
      embed: 'https://www.youtube.com/embed/bXcLbGs9rlM',
      likeCount: '8.8K',
      views: '100K',
      time: '3 weeks',
      description: "NewJeans (뉴진스) 'Ditto' // Slowed & Reverb",
    },
    {
      thumbnail: '../assets/img/vid8.jpg',
      channelName: 'Zach Star',
      channelProfile:
        'https://yt3.ggpht.com/ytc/AMLnZu_ix5z4zrFoi9h0bWrH1ZpOvC8jOYLyOxnO42NUBQ=s88-c-k-c0x00ffffff-no-rj',
      channelSubCount: '1.13M',
      title: 'Random things that will (likely) surprise you',
      embed: 'https://www.youtube.com/embed/3ARVIkbbf3o',
      likeCount: '71K',
      views: '1.8M',
      time: '3 years',
      description:
        'Get free access to over 2500 documentaries on CuriosityStream: http://go.thoughtleaders.io/112862019... STEMerch Store: https://stemerch.com/Support the Channel: https://www.patreon.com/zachstarPayPal(one time donation): https://www.paypal.me/ZachStarYT',
    },
  ];
}
