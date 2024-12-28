import { GoogleSheetsService } from '../../lib/google-sheets';
import { Tag, WebContent } from '../../data';

const isValidTag = (tag: string): tag is Tag =>
  ['default', 'narrativas-visuales'].includes(tag);

const transformWebContentData = (data: string[]): WebContent => {
  const [key, value, tag = ''] = data;

  return {
    key,
    value,
    tag: isValidTag(tag) ? tag : 'default',
  };
};

const PAGE = 'WebContent';

export class WebContentService {
  private static cache: WebContent[] = [];
  private static service = new GoogleSheetsService(PAGE);

  constructor() {
    throw new Error('Cannot instantiate static class');
  }

  static fetch = async (tag: Tag) => {
    const data = await this.service.fetch('A2', 'C133');

    this.cache = data.map(transformWebContentData);

    return this.cache.filter(webContent =>
      tag ? webContent.tag === tag : true,
    );
  };
}
