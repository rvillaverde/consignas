import { NextApiRequest, NextApiResponse } from 'next';
import { TagType } from '../../../api/task';
import { WebContentService } from '../../../services/web-content';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { query } = req;

    const tag = query.tag ? (query.tag as TagType) : 'default';
    const content = await WebContentService.fetch(tag);

    return res.status(200).json(content);
  }
};

export default handler;
