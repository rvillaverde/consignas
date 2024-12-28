import { NextApiRequest, NextApiResponse } from 'next';
import promptApi from '../../../api/task';
import { random } from '../../../helpers/random';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const tasks = await promptApi.list();
      const index = random(tasks.length);

      res.status(200).json(tasks[index]);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};

export default handler;
