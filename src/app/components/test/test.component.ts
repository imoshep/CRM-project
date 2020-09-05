import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {

  constructor(private testService: TestService) { }

  postsInComponent = null
  unsub: Subscription = null;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  getAllPosts() {
    this.testService.postsinService.subscribe(data => {
      this.postsInComponent = data;
    })
  }

  getPostById(id: number) {
    // this.postsInComponent = this.testService.fetchPostById(id)
    this.testService.fetchPostById(id).subscribe(data => {
      this.postsInComponent = data;
    });
  }
}
