import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { card } from '../models/card';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
})
export class ContentSectionComponent {
  @Input() contents: card[] = contents;
  loggedIn: number | undefined;
  constructor(
    public sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    for (var i = 0; i < contents.length; i++) {
      contents[i].safeEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(
        contents[i].embed
      );
    }
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loggedIn = +params['log'];
    });
  }
}

export const contents: card[] = [
  {
    id: 1,
    thumbnail: '../../assets/img/vid1.jpg',
    channelName: 'Netflix',
    channelProfile:
      'https://yt3.ggpht.com/ytc/AMLnZu8ez2zjv7E2Sp0qzjYCnrpBMLMm5c26MJkGBIQHww=s88-c-k-c0x00ffffff-no-rj',
    channelSubCount: 25638635,
    title: 'Wednesday Addams | Season 2 Announcement | Netflix',
    embed: 'https://www.youtube.com/embed/j_MuZmJNirw',
    gif: 'https://i.ytimg.com/an_webp/j_MuZmJNirw/mqdefault_6s.webp?du=3000&sqp=COz1j54G&rs=AOn4CLAaPEHRxRGJhXHTeiAJYrt-XlulKA',
    safeEmbed: '',
    likeCount: 595738,
    views: 14012920,
    // Month parameter is zero based
    date: new Date(2023, 0, 12),
    description:
      "About Netflix: Netflix is the world's leading streaming entertainment service with 223 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.",
    keywords: ['wednesday', 'addams'],
  },
  {
    id: 2,
    thumbnail: '../assets/img/vid2.jpg',
    channelName: 'Power Couple',
    channelProfile:
      'https://yt3.googleusercontent.com/h_5EX_GD2dB4Ti3cQbQ1BjGkm_M-EN_z_mWSw7KG-kYzswbULF5bTogzGRm-KcawIqiXgcnJiOM=s176-c-k-c0x00ffffff-no-rj',
    channelSubCount: 245898,
    title: 'I solved 541 Leetcode problems. But you need only 150.',
    embed: 'https://www.youtube.com/embed/xF554Tlzo-c',
    gif: 'https://i.ytimg.com/an_webp/j_MuZmJNirw/mqdefault_6s.webp?du=3000&sqp=COz1j54G&rs=AOn4CLAaPEHRxRGJhXHTeiAJYrt-XlulKA',
    safeEmbed: '',
    likeCount: 39422,
    views: 1009050,
    date: new Date(2022, 11, 8),
    description:
      "DISCLAIMER: All opinions shared on this channel are our own and don't express views or opinions of our employers. We only use our experiences and public knowledge to make our content. NO CONFIDENTIAL INFORMATION of our employers is used or shared on this channel. This is not a Professional Coaching channel, it only highlights the public resources that have worked for our careers.",
    keywords: ['coding', 'problems'],
  },
  {
    id: 3,
    thumbnail: '../assets/img/vid3.jpg',
    channelName: 'Gej Yu Ve?',
    channelProfile:
      'https://yt3.ggpht.com/oYmh_vAg_RMbv3BQWPhobyD8S0UOwP5W0ZUJl30Hh911AKRDKe5JTxJC8FS1fuUvmRgObuyaaA=s88-c-k-c0x00ffffff-no-rj',
    channelSubCount: 87796,
    title: 'Нүцгэн нүдээр Астрономи...',
    embed: 'https://www.youtube.com/embed/CL-f66Ks_yA',
    gif: 'https://i.ytimg.com/an_webp/j_MuZmJNirw/mqdefault_6s.webp?du=3000&sqp=COz1j54G&rs=AOn4CLAaPEHRxRGJhXHTeiAJYrt-XlulKA',
    safeEmbed: '',
    likeCount: 1520,
    views: 104411,
    date: new Date(2021, 10, 25),
    description:
      'Тэнгэрийг судлахад заавал телескопны шаардлага байхгүй. Эхний ээлжинд одон орны энгийн объектуудыг таних, ялгахыг биеэ даан сурч болно. Таньд хэрэгтэй зүйл гэвэл ердөө л гэрлийн бохирдол багатай цэлмэг тэнгэр бас багахан хэмжээний мэдлэг. Энэхүү бичлэгээр бүгдээрээ хэрхэн нүцгэн нүдээрээ одон оронч болохыг сурцгаая!',
    keywords: ['astronomy'],
  },
  {
    id: 4,
    thumbnail: '../assets/img/vid4.jpg',
    channelName: '에익쿠',
    channelProfile:
      'https://yt3.ggpht.com/ytc/AMLnZu9Y3Du2zy4Vg6laGb_3-eWKECdEUDneuwqpqs5-fA=s88-c-k-c0x00ffffff-no-rj',
    channelSubCount: 306189,
    title: 'MBTI in Senior Center',
    embed: 'https://www.youtube.com/embed/JkBwd-k82IE',
    gif: 'https://i.ytimg.com/an_webp/j_MuZmJNirw/mqdefault_6s.webp?du=3000&sqp=COz1j54G&rs=AOn4CLAaPEHRxRGJhXHTeiAJYrt-XlulKA',
    safeEmbed: '',
    likeCount: 2797,
    views: 55891,
    date: new Date(2022, 11, 31),
    description:
      '22년도 재밌었습니다~<br>▶  insta : eicku_16<br>※ 비하발언, 욕설 댓글 등 보기불편한 댓글은 삭제될 수 있습니다. 22년도 재밌었습니다~<br>▶  insta : eicku_16<br>※ 비하발언, 욕설 댓글 등 보기불편한 댓글은 삭제될 수 있습니다. 22년도 재밌었습니다~<br>▶  insta : eicku_16<br>※ 비하발언, 욕설 댓글 등 보기불편한 댓글은 삭제될 수 있습니다.',
    keywords: ['mbti', 'korean'],
  },
  {
    id: 5,
    thumbnail: '../assets/img/vid5.jpg',
    channelName: 'The New Travel',
    channelProfile:
      'https://yt3.ggpht.com/n9ZfVxi2_kdet0XKTyQX79l_w2ISOMVEU3sOEWV1DMRyOef4AsYoq2bE12HYnUlFteqrw8OzXQ=s88-c-k-c0x00ffffff-no-rj',
    channelSubCount: 211893,
    title: 'London, how many languages do you speak?',
    embed: 'https://www.youtube.com/embed/0DOMlNJ9sOk',
    safeEmbed: '',
    gif: 'https://i.ytimg.com/an_webp/j_MuZmJNirw/mqdefault_6s.webp?du=3000&sqp=COz1j54G&rs=AOn4CLAaPEHRxRGJhXHTeiAJYrt-XlulKA',
    likeCount: 35988,
    views: 1542819,
    date: new Date(2022, 11, 25),
    description:
      'Today we visit London, England and ask strangers how many languages they speak. Support my channel: 👉 https://www.patreon.com/thenewtravel. Support my channel: https://www.patreon.com/thenewtravel',
    keywords: ['language', 'london', 'travel'],
  },
  {
    id: 6,
    thumbnail: '../assets/img/vid6.jpg',
    channelName: 'Benj Haisch',
    channelProfile:
      'https://yt3.ggpht.com/ytc/AMLnZu9UAfBSjgPJhlW-L-4rMnYh5r9DBEKMlMAzRkkm81o=s88-c-k-c0x00ffffff-no-rj',
    channelSubCount: 49289,
    title: 'The $50 Film Camera You Should Actually Buy.',
    embed: 'https://www.youtube.com/embed/qCcnF5Jk4ZE',
    safeEmbed: '',
    gif: 'https://i.ytimg.com/an_webp/j_MuZmJNirw/mqdefault_6s.webp?du=3000&sqp=COz1j54G&rs=AOn4CLAaPEHRxRGJhXHTeiAJYrt-XlulKA',
    likeCount: 18897,
    views: 546429,
    date: new Date(2023, 0, 17),
    description:
      'DISCLAIMER: This video and description contain affiliate links, which means that if you click on one of the product links, I’ll receive a small commission. This helps to support the channel and allows me to continue to make videos like this.',
    keywords: ['camera'],
  },
  {
    id: 7,
    thumbnail: '../assets/img/vid7.jpg',
    channelName: 'F:Eight',
    channelProfile:
      'https://yt3.ggpht.com/y0_55vKIPAKpWYOUUeLSLKCULCKLJloGbd_g0FYJIF--GZkgOFY4VLHlJGHmCmZX31wGBgDwDg=s88-c-k-c0x00ffffff-no-nd-rj',
    channelSubCount: 513,
    title: 'Ditto // Slowed to Perfection',
    embed: 'https://www.youtube.com/embed/bXcLbGs9rlM',
    safeEmbed: '',
    gif: 'https://i.ytimg.com/an_webp/j_MuZmJNirw/mqdefault_6s.webp?du=3000&sqp=COz1j54G&rs=AOn4CLAaPEHRxRGJhXHTeiAJYrt-XlulKA',
    likeCount: 8880,
    views: 100192,
    date: new Date(2022, 5, 1),
    description:
      'NewJeans (뉴진스) "Ditto" // Slowed & Reverb. "Ditto" is a song recorded by South Korean girl group NewJeans for their first single album OMG. The single album was released by ADOR, a subsidiary of Hybe Corporation, on January 2, 2023, "Ditto" was released as a pre-release track on December 19, 2022.',
    keywords: ['kpop', 'newjeans', 'ditto', 'korean'],
  },
  {
    id: 8,
    thumbnail: '../assets/img/vid8.jpg',
    channelName: 'Zach Star',
    channelProfile:
      'https://yt3.ggpht.com/ytc/AMLnZu_ix5z4zrFoi9h0bWrH1ZpOvC8jOYLyOxnO42NUBQ=s88-c-k-c0x00ffffff-no-rj',
    channelSubCount: 1137000,
    title: 'Random things that will (likely) surprise you',
    embed: 'https://www.youtube.com/embed/3ARVIkbbf3o',
    safeEmbed: '',
    gif: 'https://i.ytimg.com/an_webp/j_MuZmJNirw/mqdefault_6s.webp?du=3000&sqp=COz1j54G&rs=AOn4CLAaPEHRxRGJhXHTeiAJYrt-XlulKA',
    likeCount: 71820,
    views: 1823555,
    date: new Date(2015, 3, 15),
    description:
      'Get free access to over 2500 documentaries on CuriosityStream: http://go.thoughtleaders.io/112862019... STEMerch Store: https://stemerch.com/Support the Channel: https://www.patreon.com/zachstarPayPal(one time donation): https://www.paypal.me/ZachStarYT',
    keywords: ['surprise', 'random'],
  },
];
