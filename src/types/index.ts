export interface Reel {
  id: string;
  celebrityName: string;
  script: string;
  videoUrl: string;
  thumbnailUrl: string;
  createdAt: string;
}

export interface GenerateReelRequest {
  celebrityName: string;
  duration?: number; // in seconds
}

export interface GenerateReelResponse {
  success: boolean;
  reel?: Reel;
  error?: string;
} 