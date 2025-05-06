import OpenAI from 'openai';
import { GenerateReelRequest } from '@/types';
import { uploadVideo, getSignedVideoUrl } from './s3';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateScript(request: GenerateReelRequest): Promise<string> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const prompt = `Write a short, engaging 30-second script about ${request.celebrityName}'s sports career and achievements. Focus on the most interesting and impactful moments. Keep it concise and exciting.`;

    console.log('Generating script for:', request.celebrityName);
    
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4-turbo-preview",
      max_tokens: 150,
    });

    const script = completion.choices[0].message.content || '';
    console.log('Generated script:', script);
    
    return script;
  } catch (error) {
    console.error('Error generating script:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to generate script: ${error.message}`);
    }
    throw new Error('Failed to generate script');
  }
}

export async function generateVideo(script: string, celebrityName: string): Promise<{ videoUrl: string; thumbnailUrl: string }> {
  try {
    // For now, we'll use a placeholder video
    // In production, you would:
    // 1. Use Amazon Polly to convert script to speech
    // 2. Use RunwayML or similar to generate video
    // 3. Combine audio and video using ffmpeg
    
    const videoKey = `videos/${celebrityName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.mp4`;
    
    // Upload placeholder video to S3
    const videoBuffer = Buffer.from('placeholder video content');
    await uploadVideo(videoBuffer, videoKey);
    
    // Get signed URL for video
    const videoUrl = await getSignedVideoUrl(videoKey);
    
    // For now, use a placeholder thumbnail
    const thumbnailUrl = `https://via.placeholder.com/400x600?text=${encodeURIComponent(celebrityName)}`;
    
    return { videoUrl, thumbnailUrl };
  } catch (error) {
    console.error('Error generating video:', error);
    throw new Error('Failed to generate video');
  }
} 