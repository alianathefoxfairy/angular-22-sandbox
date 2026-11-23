import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { PostService } from '../services/post-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // DO NOT MODIFY ORIGINAL REQUEST
  //const modifiedRequest = req.clone({
  //  setHeaders:{
  //    'X-app-version': '1.0'
  //    //x-consumer-username could go here?
  //  }
  //})
  //return next(modifiedRequest);

  /* JWT Authentication */

  // get auth using service:
  //const postService = inject(PostService);
  //const token = postService.getToken();

  // local storage example:
  const token = localStorage.getItem('token');
  if (token) {
    const authRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next(authRequest);
  }
  return next(req);
};
