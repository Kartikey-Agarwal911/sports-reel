# Deployment Troubleshooting Guide

## 500 Error When Creating Reels - Root Causes & Solutions

### 🔍 **Primary Issue: Missing Environment Variables**

The most common cause of 500 errors is missing or incorrectly configured environment variables.

#### **Required Environment Variables:**

```bash
# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-api-key-here

# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-s3-bucket-name
```

#### **How to Configure Environment Variables:**

**For Vercel Deployment:**
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable with the correct name and value
5. Redeploy your application

**For Local Development:**
1. Create a `.env.local` file in the root directory
2. Add the environment variables above
3. Restart your development server

### 🚨 **Common Error Scenarios & Solutions**

#### **1. OpenAI API Key Issues**
- **Error**: "OpenAI API key is invalid or expired"
- **Solution**: 
  - Verify your OpenAI API key is correct
  - Check if you have sufficient credits
  - Ensure the key has the necessary permissions

#### **2. AWS S3 Configuration Issues**
- **Error**: "AWS S3 access denied" or "bucket not found"
- **Solution**:
  - Verify AWS credentials are correct
  - Ensure the S3 bucket exists
  - Check bucket permissions (IAM policies)
  - Verify the AWS region matches your bucket

#### **3. Rate Limiting**
- **Error**: "OpenAI rate limit exceeded"
- **Solution**:
  - Upgrade your OpenAI plan
  - Implement request throttling
  - Wait before making additional requests

### 🔧 **Debugging Steps**

#### **1. Check Environment Variables**
Add this temporary debug endpoint to verify your environment variables:

```typescript
// Add to src/app/api/debug/route.ts
export async function GET() {
  return NextResponse.json({
    hasOpenAI: !!process.env.OPENAI_API_KEY,
    hasAWS: !!(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY),
    hasBucket: !!process.env.AWS_S3_BUCKET,
    region: process.env.AWS_REGION || 'not-set'
  });
}
```

#### **2. Check Application Logs**
- **Vercel**: Check Function Logs in the dashboard
- **Local**: Check terminal/console output
- Look for specific error messages that indicate the root cause

#### **3. Test Individual Services**
Create test endpoints for each service:

```typescript
// Test OpenAI
export async function POST() {
  try {
    const script = await generateScript({ celebrityName: "Test" });
    return NextResponse.json({ success: true, script });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
```

### 🛠️ **Quick Fixes**

#### **For Immediate Testing (Without Real Services):**
The application includes fallback logic for missing credentials:

1. **Without OpenAI**: Will use mock scripts
2. **Without AWS**: Will use mock video URLs
3. **With partial config**: Will work with available services

#### **For Production Deployment:**
1. Ensure all environment variables are set
2. Test with a small request first
3. Monitor logs for any errors
4. Verify AWS S3 bucket permissions

### 📋 **Deployment Checklist**

- [ ] All environment variables configured
- [ ] OpenAI API key is valid and has credits
- [ ] AWS S3 bucket exists and is accessible
- [ ] AWS credentials have proper permissions
- [ ] Application builds successfully
- [ ] Test with a simple celebrity name
- [ ] Check function logs for errors
- [ ] Verify response format matches expected type

### 🆘 **Getting Help**

If you're still experiencing issues:

1. **Check the logs** for specific error messages
2. **Verify environment variables** are correctly set
3. **Test with a simple request** first
4. **Check service status** (OpenAI, AWS)
5. **Review the error response** for specific details

### 📝 **Recent Fixes Applied**

1. **Fixed API Response Type**: Added missing `timestamp` field
2. **Improved Error Handling**: More specific error messages
3. **Better Validation**: Request body and field validation
4. **Enhanced Logging**: More detailed console output for debugging

### 🔄 **Next Steps**

After applying the fixes:

1. **Redeploy** your application
2. **Test** with a simple celebrity name
3. **Monitor** the logs for any remaining issues
4. **Verify** all services are working correctly

---

**Note**: The application is designed to gracefully handle missing credentials by using mock data, so it should work even without all services configured, but will return placeholder content instead of real AI-generated content and videos. 