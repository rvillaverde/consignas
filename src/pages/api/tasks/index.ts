import { NextApiRequest, NextApiResponse } from 'next';
import taskApi from '../../../services/task';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const tasks = await taskApi.list();
    res.status(200).json(tasks);
  }
  if (req.method === 'POST') {
    const { description } = req.body;

    if (description && description.length > 0) {
      try {
        await taskApi.create({ description, likes: 0, reports: 0 });
        res.status(200).send({});
      } catch (e) {
        res.status(500).send('Error creating task');
      }
    } else {
      res.status(500).send('Empty description');
    }
  }
};

export default handler;
