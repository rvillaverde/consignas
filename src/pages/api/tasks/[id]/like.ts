import { NextApiRequest, NextApiResponse } from 'next';
import taskApi from '../../../../services/task';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'POST') {
    const task = await taskApi.find(id as string);

    task.likes++;
    await taskApi.update(task.internalId, { likes: task.likes });

    res.status(200).json(task);
  }
};

export default handler;
