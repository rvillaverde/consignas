import { NextApiRequest, NextApiResponse } from 'next';
import { random } from '../../../helpers/random';
import taskApi from '../../../services/task';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const tasks = await taskApi.list();
    const index = random(tasks.length);

    res.status(200).json(tasks[index]);
  }
};

export default handler;
