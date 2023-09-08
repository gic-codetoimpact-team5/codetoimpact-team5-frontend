import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/'; // To replace with the actual API endpoint

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(ANTHROPIC_API_URL, {
        message: req.body.message,
      });

      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error sending message to Anthropic API:', error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}