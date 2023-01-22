import { SafeResourceUrl } from '@angular/platform-browser';

export interface card {
  id: number;
  channelName: String;
  channelProfile: String;
  channelSubCount: number;
  thumbnail: String;
  gif: String;
  title: String;
  embed: string;
  safeEmbed: SafeResourceUrl;
  likeCount: number;
  views: number;
  date: Date;
  duration: String;
  description: String;
  keywords: String[];
  categories: String[];
}
