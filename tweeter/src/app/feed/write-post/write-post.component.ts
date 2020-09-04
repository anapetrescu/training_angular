import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss']
})
export class WritePostComponent implements OnInit {

  constructor(
    private feedService: FeedService
  ) { }
  tweet: string;
  ngOnInit(): void {
  }

  postTweet() {
    console.log(localStorage.getItem("user_id"));
    const newTweet = {
      tweet: this.tweet,
      user_id: localStorage.getItem("user_id")
    }
    console.log(newTweet);
    this.feedService.saveTweet(newTweet).subscribe(response => {
      this.tweet = "";
    });
  }
}
