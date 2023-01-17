import { SafeResourceUrl } from '@angular/platform-browser';

export interface card {
  id: number;
  thumbnail: String;
  channelName: String;
  channelProfile: String;
  channelSubCount: number;
  title: String;
  embed: string;
  safeEmbed: SafeResourceUrl;
  gif: String;
  likeCount: number;
  views: number;
  date: Date;
  description: String;
  keywords: String[];
  categories: String[];
}
