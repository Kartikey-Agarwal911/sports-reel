import { NextResponse } from 'next/server';
import { generateScript, generateVideo } from '@/services/ai';
import { GenerateReelRequest, GenerateReelResponse } from '@/types';

export async function POST(request: Request) {
  try {
    // Validate request body
    let body: GenerateReelRequest;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json(
        { success: false, error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const { celebrityName } = body;

    // Validate required fields
    if (!celebrityName || typeof celebrityName !== 'string' || celebrityName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'celebrityName is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    console.log('Processing reel generation for:', celebrityName);

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
      timestamp: new Date().toISOString(),
    };

    console.log('Successfully generated reel for:', celebrityName);
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error generating reel:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to generate reel';
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;
      
      // Set appropriate status codes based on error type
      if (errorMessage.includes('OpenAI API key') || errorMessage.includes('AWS access key')) {
        statusCode = 401;
      } else if (errorMessage.includes('rate limit')) {
        statusCode = 429;
      } else if (errorMessage.includes('bucket not found') || errorMessage.includes('access denied')) {
        statusCode = 403;
      }
    }

    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: statusCode }
    );
  }
} 