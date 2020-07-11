import { createAction, props } from '@ngrx/store';

export const DeletePost = createAction(
  // first parameter just give the action a name
  'Delete Post',
  // second parameter is to describe payload's shape
  props<{ id: number }>());

export const ProvidePosts = createAction(
  'Provide Posts',
  props<{ posts: any[] }>());
