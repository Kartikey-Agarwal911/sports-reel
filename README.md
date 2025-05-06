# AI-Generated Sports Celebrity History Reels

A Next.js application that generates AI-powered history reels for sports celebrities. Built for the EssentiallySports Web Engineer position.

## About Me
I'm a passionate full-stack developer with expertise in React, Next.js, Backend and cloud technologies. I love building scalable applications and solving complex problems. This project demonstrates my ability to integrate AI, cloud storage, and modern web technologies to create engaging user experiences.

## Features

- 🤖 AI-generated scripts using OpenAI GPT-4
- 🎥 Video generation and storage in AWS S3
- 📱 TikTok-style vertical scrolling reel interface
- 🎨 Modern, mobile-optimized UI with Tailwind CSS
- ⚡ Real-time video playback and lazy loading
- 🔒 Secure API endpoints and environment variables

## Tech Stack

- **Frontend:**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Swiper.js for reel interface

- **Backend:**
  - Next.js API Routes
  - OpenAI API for script generation
  - AWS S3 for video storage

- **DevOps:**
  - Vercel for deployment
  - GitHub for version control
  - Environment variables for security

## Live Demo

[View Live Demo](https://sports-reel.vercel.app)

## Project Structure

```
src/
  ├── app/              # Next.js app directory
  │   ├── api/         # API routes
  │   └── page.tsx     # Main page component
  ├── components/      # React components
  ├── services/        # External service integrations
  └── types/          # TypeScript type definitions
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kartikey-Agarwal911/sports-reel.git
   cd sports-reel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file with:
   ```env
   # OpenAI
   OPENAI_API_KEY=your_openai_api_key

   # AWS
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   AWS_S3_BUCKET=your_s3_bucket_name
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Deployment

### GitHub Setup
1. Create a new repository on GitHub
2. Initialize git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Kartikey-Agarwal911/sports-reel.git
   git push -u origin main
   ```

### Vercel Deployment
1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in Vercel dashboard
6. Deploy!

## Future Improvements

- [ ] Implement video generation using RunwayML
- [ ] Add user authentication
- [ ] Implement video caching
- [ ] Add analytics tracking
- [ ] Optimize video loading performance
- [ ] Add more interactive features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Contact

Feel free to reach out to me at [your.email@example.com](mailto:your.email@example.com) or connect with me on [LinkedIn](https://linkedin.com/in/yourprofile). 