import { BaseRecord } from '../lib/airtable';

export interface API<T extends BaseRecord> {
  create: (record: Partial<T>) => Promise<T['id']>;
  find: (id: T['id']) => Promise<T>;
  list: () => Promise<T[]>;
  update: (id: T['internalId'], item: Partial<T>) => Promise<void>;
}
