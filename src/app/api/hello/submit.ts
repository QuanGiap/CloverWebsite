import { submitPlaceEntry } from '@/firebase';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, placeId, entryData } = req.body;

    try {
      await submitPlaceEntry(userId, placeId, entryData);
      res.status(200).json({ message: 'Entry submitted successfully!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
