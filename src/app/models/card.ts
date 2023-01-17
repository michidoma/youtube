import { SafeResourceUrl } from '@angular/platform-browser';

export interface card {
  id: number;
  thumbnail: String;
  channelName: String;
  channelProfile: String;
  channelSubCount: String;
  title: String;
  embed: string;
  safeEmbed: SafeResourceUrl;
  gif: String;
  likeCount: String;
  views: String;
  time: String;
  description: String;
  keywords: String[];
}
