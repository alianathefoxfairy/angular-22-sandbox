import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isLoggedIn = true;  // this comes from authenticator

  if (isLoggedIn)
    return true;

  return router.createUrlTree(['/pages/login']);
};
