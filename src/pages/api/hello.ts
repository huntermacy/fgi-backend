import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse } from '@/types';

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Data>>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  res.status(200).json({
    success: true,
    data: {
      message: 'Hello from the API!'
    }
  });
} 