import { CURRENT_USER } from '../mock/users';
import type { User } from '../types/auth';

export const authService = {
  async getCurrentUser(): Promise<User> {
    return Promise.resolve(CURRENT_USER);
  },
  async login(credentials: { email: string; role?: string }): Promise<{ user: User; token: string }> {
    return Promise.resolve({
      user: { ...CURRENT_USER, email: credentials.email },
      token: 'nova_jwt_mock_token_8849302',
    });
  },
  async logout(): Promise<void> {
    localStorage.removeItem('nova_auth_token');
    return Promise.resolve();
  },
};
