import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  postsinService: Observable<Post[]> = null;

  readonly URL = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
    this.postsinService = httpClient.get<Post[]>(this.URL);
   }

  fetchPostById(id: number) {
    return this.httpClient.get<Post>(this.URL + '/' + id);
  }
}
