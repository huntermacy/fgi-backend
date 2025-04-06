# FGI Backend

A modern Next.js backend application ready for deployment on Vercel.

## Features

- TypeScript support
- API routes with proper error handling
- CORS configuration
- Modern development setup

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000/api/hello](http://localhost:3000/api/hello) to test the API.

## Project Structure

```
src/
  ├── pages/
  │   └── api/         # API routes
  ├── types/           # TypeScript types
  └── utils/           # Utility functions
```

## Deployment

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Vercel will automatically detect it's a Next.js project and deploy it

## API Documentation

### GET /api/hello
Returns a simple hello message.

Response:
```json
{
  "success": true,
  "data": {
    "message": "Hello from the API!"
  }
}
```

## Development

- Use `npm run dev` for local development
- Use `npm run build` to create a production build
- Use `npm run start` to run the production build locally
- Use `npm run lint` to check for linting errors 