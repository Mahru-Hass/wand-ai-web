# Wand AI Frontend

A modern React 19 frontend application with stunning animations, built with TypeScript, Tailwind CSS v3, and professional state management for multi-agent orchestration.

## 🚀 Features

- **React 19** - Latest React with modern features and concurrent rendering
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS v3** - Modern utility-first styling with PostCSS integration
- **Framer Motion** - Smooth animations and transitions
- **Zustand** - Lightweight client state management
- **WebSocket** - Real-time bidirectional communication with retry logic
- **React Router v6** - Client-side routing with 404 error handling
- **i18next** - Internationalization support
- **Vite** - Lightning-fast build tool and dev server
- **ESLint** - Modern flat config with React hooks and TypeScript rules
- **Error Boundaries** - Graceful error handling and recovery
- **Markdown Rendering** - Rich text display with syntax highlighting

## 🎨 UI Features

- **Search Interface** - Dynamic textarea with auto-expansion and ChatGPT-style layout
- **Real-time Status Updates** - Sequential agent progress with smooth animations
- **Markdown Results** - Rich text rendering with syntax highlighting
- **Error Boundaries** - Professional error handling with retry logic
- **Animated Background** - Floating orbs with gradient mesh
- **Particle System** - 50+ floating particles with smooth animations
- **Typewriter Effect** - Dynamic welcome messages
- **Interactive 3D Cards** - Hover effects and glassmorphism
- **Floating Icons** - Animated AI-related icons
- **Responsive Design** - Mobile-first approach
- **Custom Scrollbars** - Styled with gradient colors
- **404 Error Page** - Professional not-found page with navigation

## 📋 Prerequisites

- Node.js 18+ (recommended: Node.js 22 LTS)
- npm 9+

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wand-ai-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR) at `http://127.0.0.1:5173`

## 🔌 WebSocket Integration

This application uses WebSocket for real-time communication with the backend API. The WebSocket connection provides:

### **Real-time Features:**
- **Live Agent Status Updates** - See agents working in real-time
- **Progress Tracking** - Watch as each agent completes their tasks
- **Instant Results** - Receive final answers immediately when ready
- **Connection Status** - Visual indicator of WebSocket connection state

### **WebSocket Architecture:**
```typescript
// WebSocket connection management
const { sendMessage } = useWebSocket('ws://127.0.0.1:4000/ws');

// State management with Zustand
const { messages, isConnected, isLoading } = useAppStore();

// Message processing with custom hook
useMessageProcessor(); // Handles sequential message display
```

### **Message Flow:**
1. **User submits query** → WebSocket sends request
2. **Backend processes** → Sends agent status updates
3. **Agents complete** → Individual results received
4. **Gemini synthesis** → Final answer delivered
5. **UI updates** → Real-time status and results display

### **Connection Management:**
- **Auto-reconnect** - Automatically reconnects on connection loss
- **Error handling** - Graceful error states and user feedback
- **Loading states** - Visual feedback during processing
- **Message queuing** - Ensures no messages are lost

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

## 🏗️ Project Structure

```
src/
├── components/                    # UI Components
│   ├── SearchForm.tsx            # Main search interface with textarea
│   ├── SearchResults/            # Search results components
│   │   ├── FinalResult.tsx       # Final Gemini response display
│   │   └── StatusMessage.tsx     # Real-time agent status updates
│   ├── SearchPageLayout.tsx      # Search page layout wrapper
│   ├── SearchHeader.tsx          # Navigation header
│   ├── SearchTitle.tsx           # Page title component
│   ├── FeaturesSection.tsx       # Features display
│   ├── MarkdownRenderer.tsx      # Rich text rendering
│   ├── ErrorBoundary.tsx         # Error handling component
│   ├── AnimatedBackground.tsx    # Floating orbs & gradient mesh
│   ├── FloatingElements.tsx      # Animated AI icons
│   ├── InteractiveCard.tsx       # 3D hover card with glassmorphism
│   ├── ParticleSystem.tsx        # 50+ floating particles
│   └── TypewriterWelcome.tsx     # Dynamic welcome messages
├── pages/                        # Application pages
│   ├── HomePage.tsx              # Landing page
│   ├── SearchPage.tsx            # Main search interface
│   └── NotFoundPage.tsx          # 404 error page
├── hooks/                        # Custom React hooks
│   ├── useWebSocket.ts           # WebSocket connection with retry logic
│   ├── useMessageProcessor.ts    # Sequential message processing
│   └── useRetry.ts               # Retry logic for error handling
├── stores/                       # State management
│   └── useAppStore.ts            # Zustand store with WebSocket integration
├── lib/                          # Utilities and configuration
│   ├── animations.ts             # Reusable animation constants
│   ├── constants.ts              # App configuration & colors
│   └── features.ts               # Static feature data
├── locales/                      # Internationalization
│   └── en/
│       └── translation.json
├── types/                        # TypeScript type definitions
│   └── websocket.ts              # WebSocket message types
├── App.tsx                       # Main app component with routing
├── main.tsx                      # Application entry point
├── i18n.ts                       # i18n configuration
└── index.css                     # Global styles with Tailwind v3
```

## 🎯 Performance Optimizations

- **useMemo** - Random values generated once for animations
- **Reusable Constants** - Centralized animation and color configurations
- **Optimized Imports** - Properly sorted imports for better tree-shaking
- **Component Splitting** - Modular components for better code splitting
- **Efficient Animations** - Hardware-accelerated CSS transforms

## 🌍 Internationalization

The app supports multiple languages using i18next:

```typescript
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  return <h1>{t('app.title')}</h1>
}
```

### Available Translations
- **English** - Complete translation set
- **Extensible** - Easy to add new languages

## 🎨 Styling & Animations

### Tailwind CSS v3
- PostCSS integration for better compatibility
- Custom scrollbar styling
- Gradient color schemes
- Responsive design utilities
- Docker-friendly build process

### Framer Motion
- Smooth page transitions
- Hover and tap animations
- Infinite rotation effects
- Staggered animations

### Custom Animations
- Floating orbs with random movement
- Particle system with opacity transitions
- Typewriter effect with multiple messages
- 3D card hover effects

## 🔗 API Integration

The frontend integrates with the Wand AI backend API:

- **Health Check**: `GET /healthz`
- **Ping**: `GET /api/v1/ping`
- **WebSocket**: `ws://127.0.0.1:4000/ws` (for real-time updates)

## 🧪 Development

### Code Quality
- **ESLint** - Linting with React hooks and TypeScript rules
- **TypeScript** - Strict type checking
- **Import Sorting** - Alphabetically sorted imports
- **Performance** - Optimized animations and re-renders

### Best Practices
- **Component Composition** - Reusable, focused components
- **Custom Hooks** - Logic separation and reusability
- **Constants** - Centralized configuration
- **Type Safety** - Full TypeScript coverage

## 📦 Dependencies

### Production
- **react** (^19.1.1) - React library with concurrent features
- **react-dom** (^19.1.1) - React DOM
- **zustand** (^5.0.8) - Client state management
- **react-router-dom** (^7.8.2) - Routing
- **react-i18next** (^15.7.3) - Internationalization
- **framer-motion** (^12.23.12) - Animation library
- **react-type-animation** (^3.2.0) - Typewriter effects
- **lucide-react** (^0.543.0) - Icon library

### Development
- **vite** (^7.1.2) - Build tool and dev server
- **@vitejs/plugin-react** (^5.0.0) - React plugin for Vite
- **typescript** (~5.8.3) - TypeScript compiler
- **@types/node** (^24.3.1) - Node.js types
- **eslint** (^9.33.0) - Linting with flat config
- **tailwindcss** (^3.4.0) - CSS framework with PostCSS
- **postcss** - CSS processing
- **autoprefixer** - CSS vendor prefixing
- **react-markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown
- **rehype-highlight** - Syntax highlighting
- **highlight.js** - Code syntax highlighting

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

## 🎯 Key Features Implemented

- ✅ **Modern React 19** - Latest features and concurrent rendering
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS v3** - Modern styling with PostCSS integration
- ✅ **Framer Motion** - Smooth animations and transitions
- ✅ **State Management** - Zustand with WebSocket integration
- ✅ **Error Handling** - Error boundaries and retry logic
- ✅ **Markdown Rendering** - Rich text display with syntax highlighting
- ✅ **Real-time Updates** - WebSocket with sequential message processing
- ✅ **404 Error Handling** - Professional not-found page
- ✅ **Docker Support** - Containerized deployment ready
- ✅ **Internationalization** - i18next support
- ✅ **Performance Optimized** - useMemo, proper imports, efficient animations
- ✅ **Clean Architecture** - Modular components, reusable utilities
- ✅ **Professional Code** - ESLint, sorted imports, best practices

**Built with ❤️ using React 19, TypeScript, and modern web technologies**