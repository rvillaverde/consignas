import { NextApiRequest, NextApiResponse } from 'next';
import { WebContentService } from '../../../services/web-content';
import { Tag } from '../../../data';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { query } = req;

    const tag = query.tag ? (query.tag as Tag) : 'default';
    const content = await WebContentService.fetch(tag);

    return res.status(200).json(content);
  }
};

export default handler;
