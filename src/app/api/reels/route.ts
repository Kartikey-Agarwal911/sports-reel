import { NextResponse } from 'next/server';
import { generateScript, generateVideo } from '@/services/ai';
import { GenerateReelRequest, GenerateReelResponse } from '@/types';

export async function POST(request: Request) {
  try {
    const body: GenerateReelRequest = await request.json();
    const { celebrityName } = body;

    // Generate script using AI
    const script = await generateScript({ celebrityName });

    // Generate video with the script and celebrity name
    const { videoUrl, thumbnailUrl } = await generateVideo(script, celebrityName);

    // Create response
    const response: GenerateReelResponse = {
      success: true,
      reel: {
        id: Date.now().toString(),
        celebrityName,
        script,
        videoUrl,
        thumbnailUrl,
        createdAt: new Date().toISOString(),
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error generating reel:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate reel' },
      { status: 500 }
    );
  }
} 