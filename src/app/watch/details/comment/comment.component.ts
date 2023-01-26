import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styles: [],
})
export class CommentComponent implements OnInit {
  signedIn?: string;
  fullName?: string;

  ngOnInit() {
    this.signedIn = localStorage.getItem('loggedIn') || '-1';
    this.fullName = localStorage.getItem('fullName') || 'username';
  }
}
