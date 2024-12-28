import { NextApiRequest, NextApiResponse } from 'next';
import { isNumericString } from '../../../../helpers/is-numeric-string';
import { PropmtService } from '../../../../services/prompt';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'POST') {
    if (!id || typeof id !== 'string' || !isNumericString(id)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const prompt = await PropmtService.report(parseInt(id));

    if (!prompt) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    res.status(200).json(prompt);
  }
};

export default handler;
