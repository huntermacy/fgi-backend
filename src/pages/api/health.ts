import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse } from '@/types';

type HealthData = {
  status: string;
  timestamp: string;
  uptime: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<HealthData>>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  const healthData: HealthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  };

  res.status(200).json({
    success: true,
    data: healthData
  });
} 