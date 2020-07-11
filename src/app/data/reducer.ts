import { createReducer, on } from '@ngrx/store';
import { ProvidePosts, DeletePost } from './actions';

/* Defining the shape of state  */
interface BlogState {
  posts: any[];
}

const initialBlogState: BlogState = {
  posts: [],
};

// const BlogReducer = createReducer(
//   initialBlogState,
//   on(ProvidePosts, (state: BlogState, payload: any) => {
//     return {
//       ...state,
//       posts: payload.posts,
//     };
//   })
// );

/* shorter version via destructuring*/
const BlogReducer = createReducer(
  initialBlogState,

  on(ProvidePosts, (state: BlogState, { posts }) => ({
    ...state,
    posts,
  })),

  on(DeletePost, (state: BlogState, { id }) => ({
    ...state,
    posts: state.posts.filter(p => p.id !== id)
  }))

);


export interface AppState {
  blog: BlogState;
}

export const AppReducers = {
  blog: BlogReducer,
};
