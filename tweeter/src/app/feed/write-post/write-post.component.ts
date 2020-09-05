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
  @Output() newPost = new EventEmitter<any>();
  ngOnInit(): void {
  }

  postTweet() {
    const newTweet = {
      tweet: this.tweet
    }
    this.feedService.saveTweet(newTweet).subscribe(response => {
      this.tweet = "";
      this.newPost.emit(newTweet);
    });
  }
}
