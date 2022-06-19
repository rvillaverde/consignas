import { omit } from 'lodash';
import { API } from '..';
import Airtable, { AirtableRecord } from '../../lib/airtable';

const TABLE = 'task';

export interface Task {
  description: string;
  id: string;
  internalId: string;
  likes: number;
  reports: number;
}

const map = (record: AirtableRecord): Promise<Task> => {
  return Promise.resolve({
    id: record.get('id') as string,
    internalId: record.id,
    description: record.get('description') as string,
    likes: record.get('likes') as number,
    reports: record.get('reports') as number,
  });
};

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
  list: async (): Promise<Task[]> => airtable.selectAll(),
  update: async (id: Task['internalId'], task: Partial<Task>): Promise<void> =>
    airtable.update(id, task),
};

export default api;
