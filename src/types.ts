import {Auth} from './apps/auth/types';

export interface AppState {
  auth: Auth;
}

export * from './apps/auth/types';

export default AppState;
