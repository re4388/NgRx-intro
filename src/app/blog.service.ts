import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { POSTS } from './data/posts';

import { Store } from '@ngrx/store';
import { AppState } from './data/reducer.js';


import { ProvidePosts, DeletePost } from './data/actions';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  /* inject store into service with defined shape */
  constructor(private store: Store<AppState>) { }


  /* NgRx like redux and most state management lib
  use CQRS Pattern —
  Command Query Responsibility Segregation
  we use different interfaces to read and update data.
  This is as opposed to CRUD — Create Read Update Delete,
  where we use a single interface to perform
  all the reads and updates.
  more: https://medium.com/@swazza85/understanding-redux-as-a-cqrs-system-177526aa4671
  */


  /* read data, e.g. select data */
  posts$: Observable<any[]> =
    this.store.select( s  => s.blog).pipe(
      map( b => b.posts));

  postCount$: Observable<number> = this.posts$.pipe(
    map( b => b.length));

  /* write data, e.g. dispatch data */
  getPosts() {
    // Normally we would use the HttpClient to fetch some data
    // and then dispatch it
    this.store.dispatch(ProvidePosts({ posts: POSTS }));
  }

  deletePost(id: number) {
    this.store.dispatch(DeletePost({ id }));
  }
}
