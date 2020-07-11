import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BlogService } from '../blog.service';



@Component({
  selector: 'app-post-count',
  template: `<p> There are {{ postCount$ | async }} posts.</p>`,
  styles: [
  ]
})
export class PostCountComponent implements OnInit {

  constructor(private service: BlogService) { }

  postCount$ = this.service.postCount$;

  ngOnInit(): void {
  }

}
