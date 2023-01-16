import { omit } from 'lodash';
import { TagType } from '../../api/task';
import Airtable, { AirtableRecord, BaseRecord } from '../../lib/airtable';

const TABLE = 'web-content';

export interface WebContent extends BaseRecord {
  key: string;
  value: string;
  tag?: TagType;
}

const map = (record: AirtableRecord): Promise<WebContent> =>
  Promise.resolve({
    id: record.get('id') as string,
    key: record.get('key') as string,
    internalId: record.id,
    value: record.get('value') as string,
  });

const toRecord = (webContent: any) => ({
  fields: {
    ...omit(webContent, ['id']),
  },
});

const airtable = new Airtable<WebContent>(TABLE, map, toRecord);

const api = {
  fetchContent: (tag: TagType): Promise<WebContent[]> =>
    airtable.findByField({ tag }),
};

export default api;
