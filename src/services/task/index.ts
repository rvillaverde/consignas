import { omit } from 'lodash';
import { API } from '..';
import Airtable, { AirtableRecord } from '../../lib/airtable';

const TABLE = 'task';

interface TaskQueryParams {
  tags?: 'narrativas-visuales';
}

export interface Task {
  description: string;
  id: string;
  internalId: string;
  likes: number;
  reports: number;
  show?: boolean;
}

const map = (record: AirtableRecord): Promise<Task> =>
  Promise.resolve({
    id: record.get('id') as string,
    internalId: record.id,
    description: record.get('description') as string,
    likes: record.get('likes') as number,
    reports: record.get('reports') as number,
  });

const toRecord = (task: any) => ({
  fields: {
    ...omit(task, ['id']),
  },
});

const airtable = new Airtable<Task>(TABLE, map, toRecord);

const api: API<Task> = {
  create: async (task: Pick<Partial<Task>, 'description'>) =>
    airtable.create(task),
  find: async (id: string): Promise<Task> => airtable.find(id),
  list: async (query: TaskQueryParams = {}): Promise<Task[]> =>
    airtable.findByField({
      ...query,
      show: '1',
    }),
  update: async (id: Task['internalId'], task: Partial<Task>): Promise<void> =>
    airtable.update(id, task),
};

export default api;
