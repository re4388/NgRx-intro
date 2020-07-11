import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostCountComponent } from './post-count/post-count.component';


import { StoreModule } from '@ngrx/store';
import { AppReducers } from './data/reducer';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppReducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /* Since we only need the method to be called once,
  we can put it in our AppModule constructor for now. */
  constructor(blogService: BlogService) {
    blogService.getPosts();
  }
}
