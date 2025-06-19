import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const envStatus = {
      hasOpenAI: !!process.env.OPENAI_API_KEY,
      hasAWS: !!(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY),
      hasBucket: !!process.env.AWS_S3_BUCKET,
      region: process.env.AWS_REGION || 'not-set',
      nodeEnv: process.env.NODE_ENV || 'not-set',
      timestamp: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      environment: envStatus,
      message: 'Debug endpoint working correctly'
    });
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 