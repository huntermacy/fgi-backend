import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse } from '@/types';

type ErrorTestData = {
  errorType: string;
  simulated: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<ErrorTestData>>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  const { type } = req.query;

  switch (type) {
    case '400':
      return res.status(400).json({
        success: false,
        error: 'Bad Request - Simulated 400 error',
        data: {
          errorType: 'BAD_REQUEST',
          simulated: true
        }
      });
    
    case '401':
      return res.status(401).json({
        success: false,
        error: 'Unauthorized - Simulated 401 error',
        data: {
          errorType: 'UNAUTHORIZED',
          simulated: true
        }
      });
    
    case '500':
      return res.status(500).json({
        success: false,
        error: 'Internal Server Error - Simulated 500 error',
        data: {
          errorType: 'INTERNAL_SERVER_ERROR',
          simulated: true
        }
      });
    
    default:
      return res.status(200).json({
        success: true,
        data: {
          errorType: 'NO_ERROR',
          simulated: false
        }
      });
  }
} 