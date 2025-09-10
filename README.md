# Wand AI Frontend

A modern React 19 frontend application with stunning animations, built with TypeScript, Tailwind CSS, and professional state management for multi-agent orchestration.

## 🚀 Features

- **React 19** - Latest React with modern features and concurrent rendering
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS v4** - Modern utility-first styling with custom animations
- **Framer Motion** - Smooth animations and transitions
- **TanStack Query v5** - Advanced server state management
- **Zustand** - Lightweight client state management
- **React Router v6** - Client-side routing
- **i18next** - Internationalization support
- **Vite** - Lightning-fast build tool and dev server
- **ESLint** - Modern flat config with React hooks and TypeScript rules

## 🎨 UI Features

- **Animated Background** - Floating orbs with gradient mesh
- **Particle System** - 50+ floating particles with smooth animations
- **Typewriter Effect** - Dynamic welcome messages
- **Interactive 3D Cards** - Hover effects and glassmorphism
- **Floating Icons** - Animated AI-related icons
- **Responsive Design** - Mobile-first approach
- **Custom Scrollbars** - Styled with gradient colors

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
├── components/              # UI Components (5 files)
│   ├── AnimatedBackground.tsx    # Floating orbs & gradient mesh
│   ├── FloatingElements.tsx      # Animated AI icons
│   ├── InteractiveCard.tsx       # 3D hover card with glassmorphism
│   ├── ParticleSystem.tsx        # 50+ floating particles
│   └── TypewriterWelcome.tsx     # Dynamic welcome messages
├── lib/                    # Utilities and configuration (3 files)
│   ├── animations.ts       # Reusable animation constants
│   ├── constants.ts        # App configuration & colors
│   └── queryClient.ts      # TanStack Query setup
├── hooks/                  # Custom React hooks (1 file)
│   └── useApi.ts          # API integration hooks
├── stores/                 # State management (1 file)
│   └── useAppStore.ts     # Zustand store
├── locales/               # Internationalization (1 file)
│   └── en/
│       └── translation.json
├── App.tsx                # Main app component
├── main.tsx               # Application entry point
├── i18n.ts                # i18n configuration
└── index.css              # Global styles with Tailwind
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

### Tailwind CSS v4
- Zero-config setup with direct import
- Custom scrollbar styling
- Gradient color schemes
- Responsive design utilities

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
- **@tanstack/react-query** (^5.87.1) - Server state management
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
- **tailwindcss** (^4.1.13) - CSS framework

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

## 🎯 Key Features Implemented

- ✅ **Modern React 19** - Latest features and concurrent rendering
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS v4** - Modern styling with custom animations
- ✅ **Framer Motion** - Smooth animations and transitions
- ✅ **State Management** - TanStack Query + Zustand
- ✅ **Internationalization** - i18next support
- ✅ **Performance Optimized** - useMemo, proper imports, efficient animations
- ✅ **Clean Architecture** - Modular components, reusable utilities
- ✅ **Professional Code** - ESLint, sorted imports, best practices

**Built with ❤️ using React 19, TypeScript, and modern web technologies**