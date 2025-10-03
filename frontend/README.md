# AI Robo Advisor - Frontend

A modern React application providing a web interface for the AI Robo Advisor.

## Features

- Landing page with value proposition and feature highlights
- User authentication (login/register)
- Portfolio creation wizard with questionnaire
- Interactive portfolio dashboard
- Real-time analysis results with charts
- Responsive design for mobile and desktop

## Tech Stack

- React 19 with TypeScript
- Vite for build tooling
- React Router for navigation
- TanStack Query for data fetching
- Recharts for data visualization
- Lucide React for icons
- Axios for API communication

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts (Auth, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # API client and utilities
│   ├── pages/          # Page components
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
└── vite.config.ts      # Vite configuration
```

## Environment Variables

Create a `.env` file:

```
VITE_API_URL=http://localhost:8000
```

## Available Routes

- `/` - Landing page
- `/login` - User login
- `/register` - User registration
- `/dashboard` - Portfolio dashboard (protected)
- `/analyze` - Create new portfolio (protected)
- `/results` - Analysis results (protected)

## Key Features Implementation

### Authentication

Mock authentication is implemented via localStorage. In production, integrate with a real authentication service.

### Portfolio Analysis

The analysis flow includes:
1. User completes investment questionnaire
2. Real-time progress indicators
3. Results display with interactive charts
4. Downloadable reports (placeholder)

### Data Visualization

Uses Recharts for:
- Asset allocation pie charts
- Geographical diversification bar charts
- Portfolio holdings visualizations

### Error Handling

- Error boundary for crash recovery
- Loading states throughout the application
- User-friendly error messages

## Future Enhancements

- Real backend API integration
- WebSocket support for live updates
- PDF report generation
- Portfolio comparison features
- Historical performance tracking
- User preferences persistence
