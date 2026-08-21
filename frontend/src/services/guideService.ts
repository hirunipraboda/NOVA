import { MOCK_GUIDES } from '../mock/guides';
import type { Guide } from '../types/travel';

export const guideService = {
  async getGuides(): Promise<Guide[]> {
    return Promise.resolve(MOCK_GUIDES);
  },
};
