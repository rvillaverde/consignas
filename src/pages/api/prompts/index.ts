import { NextApiRequest, NextApiResponse } from 'next';
import { PropmtService } from '../../../services/prompt';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { query } = req;

    const prompts = await PropmtService.list(
      query.tags ? (query.tags as string) : undefined,
    );

    return res.status(200).json(prompts);
  }

  if (req.method === 'POST') {
    const { description } = req.body;

    if (description && description.length > 0) {
      try {
        await PropmtService.create({
          description,
          likes: 0,
          reports: 0,
          show: true,
          tags: [],
        });

        // @TODO: Respond with task
        return res.status(200).send({});
      } catch (e) {
        return res.status(500).send('Error creating task');
      }
    } else {
      return res.status(500).send('Empty description');
    }
  }
};

export default handler;
