import { SafeResourceUrl } from '@angular/platform-browser';

export interface card {
  thumbnail: String;
  channelName: String;
  channelProfile: String;
  channelSubCount: String;
  title: String;
  embed: string;
  safeEmbed: SafeResourceUrl;
  likeCount: String;
  views: String;
  time: String;
  description: String;
}
