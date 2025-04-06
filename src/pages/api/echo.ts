import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse } from '@/types';

type EchoData = {
  message: string;
  receivedAt: string;
  method: string;
  headers: Record<string, string>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<EchoData>>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Please use POST.'
    });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      error: 'Message is required in the request body'
    });
  }

  const echoData: EchoData = {
    message,
    receivedAt: new Date().toISOString(),
    method: req.method,
    headers: {
      'content-type': req.headers['content-type'] || '',
      'user-agent': req.headers['user-agent'] || ''
    }
  };

  res.status(200).json({
    success: true,
    data: echoData
  });
} 