import { CanActivateFn } from '@angular/router';

export const streamerProfileGuard: CanActivateFn = (route, state) => {
  return true;
};
