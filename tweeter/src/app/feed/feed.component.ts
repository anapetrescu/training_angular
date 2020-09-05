import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(
    private feedService: FeedService
  ) { }
  
  posts: Array<any>;
  ngOnInit(): void {
    this.getPosts();
  }

  newPost(newTweet) {
    this.posts.unshift(newTweet);
  }

  getPosts() {
    this.feedService.getPosts().subscribe(posts => {
      this.posts = posts.reverse();
    });
  }

}
