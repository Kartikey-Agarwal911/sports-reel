import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Initialize S3 client with dummy credentials for build
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'dummy-key',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'dummy-secret',
  },
});

export async function uploadVideo(key: string, content: string): Promise<void> {
  try {
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      console.warn('AWS credentials not found, skipping upload');
      return;
    }

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
      Body: content,
      ContentType: 'video/mp4',
    });

    await s3Client.send(command);
  } catch (error) {
    console.error('Error uploading video:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to upload video: ${error.message}`);
    }
    throw new Error('Failed to upload video');
  }
}

export async function getSignedVideoUrl(key: string): Promise<string> {
  try {
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      console.warn('AWS credentials not found, returning mock URL');
      return 'https://example.com/mock-video.mp4';
    }

    const command = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
    });

    return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  } catch (error) {
    console.error('Error getting signed URL:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to get signed URL: ${error.message}`);
    }
    throw new Error('Failed to get signed URL');
  }
} 