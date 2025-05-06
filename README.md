# Sports Reels Generator 🏆

A Next.js application that generates engaging sports reels for celebrities using AI. Built with modern web technologies and scalable cloud infrastructure.

## Live Demo

[View Live Demo](https://sports-reel.vercel.app)

## Features

- 🤖 AI-powered script generation using OpenAI GPT-4
- 🎥 Dynamic video generation and storage
- 📱 Responsive design with mobile-first approach
- ⚡ Real-time video playback with Swiper.js
- 🔒 Secure AWS S3 integration for video storage
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI GPT-4
- **Cloud Storage**: AWS S3
- **Deployment**: Vercel
- **Video Player**: Swiper.js

## API Documentation

### Generate Reel

```http
POST /api/reels
Content-Type: application/json

{
  "celebrityName": "string"
}
```

#### Response

```json
{
  "success": true,
  "reel": {
    "videoUrl": "string",
    "thumbnailUrl": "string",
    "script": "string"
  },
  "timestamp": "string"
}
```

### Environment Variables

```env
OPENAI_API_KEY=your_openai_api_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET=your_s3_bucket_name
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/Kartikey-Agarwal911/sports-reel.git
cd sports-reel
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with required environment variables

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technical Architecture

### Frontend
- Next.js App Router for routing and API routes
- React Server Components for improved performance
- Client components for interactive features
- Tailwind CSS for styling
- Swiper.js for video carousel

### Backend
- Next.js API routes for serverless functions
- OpenAI GPT-4 for script generation
- AWS S3 for video storage
- Error handling and fallbacks

### Infrastructure
- Vercel for hosting and deployment
- AWS S3 for scalable storage
- Environment variables for configuration

## Deployment

The application is deployed on Vercel with the following configuration:

- Framework Preset: Next.js
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`
- Environment Variables: Configured in Vercel dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Kartikey Agarwal - [@KartikeyAgarwal](https://github.com/Kartikey-Agarwal911)

Project Link: [https://github.com/Kartikey-Agarwal911/sports-reel](https://github.com/Kartikey-Agarwal911/sports-reel) 