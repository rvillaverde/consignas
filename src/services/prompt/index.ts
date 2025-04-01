import { Prompt } from '../../data';
import { parseDate } from '../../helpers/date';
import { GoogleSheetsService } from '../../lib/google-sheets';

const PAGE = 'Prompts';

const transformDataToPrompt = (data: string[]): Prompt => {
  const [
    id,
    description = '',
    likes = '0',
    reports = '0',
    cratedAt = '',
    show = '',
    tags = '',
  ] = data;

  return {
    createdAt: parseDate(cratedAt),
    id: parseInt(id),
    description,
    likes: parseInt(likes),
    reports: parseInt(reports),
    show: show === 'TRUE',
    tags: tags ? tags.split(',') : [],
  };
};

export class PropmtService {
  private static cache: Prompt[] = [];
  private static service = new GoogleSheetsService(PAGE);

  constructor() {
    throw new Error('Cannot instantiate static class');
  }

  static create = async (prompt: Omit<Prompt, 'id'>) => {
    return Promise.resolve('Not implemented');
  };

  static list = async (tag?: string) => {
    const data = await this.service.fetch('A2', 'G200');

    this.cache = data.map(transformDataToPrompt);

    return this.cache.filter(prompt =>
      prompt.show && tag ? prompt.tags.includes(tag) : true,
    );
  };

  static like = async (id: Prompt['id']) => {
    const prompt = this.findInCache(id);

    if (prompt) {
      prompt.likes++;

      this.update(prompt);

      return Promise.resolve(prompt);
    }
  };

  static report = async (id: Prompt['id']) => {
    const prompt = this.findInCache(id);

    if (prompt) {
      prompt.reports++;

      this.update(prompt);

      return Promise.resolve(prompt);
    }
  };

  private static findInCache = (id: Prompt['id']) =>
    this.cache.find(prompt => prompt.id === id);

  private static update = async (prompt: Prompt) => {
    return Promise.resolve('Not implemented');
  };
}
