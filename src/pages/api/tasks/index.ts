import { NextApiRequest, NextApiResponse } from 'next';
import taskApi from '../../../services/task';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { query } = req;

    const params = query.tags ? { tags: query.tags as string } : undefined;

    const tasks = await taskApi.list(params);
    res.status(200).json(tasks);
  }
  if (req.method === 'POST') {
    const { description } = req.body;

    if (description && description.length > 0) {
      try {
        await taskApi.create({ description, likes: 0, reports: 0, show: true });
        // @TODO: Respond with task
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
