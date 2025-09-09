# Wand AI Frontend

A modern React 19 frontend application built with TypeScript, Tailwind CSS, and professional state management for multi-agent orchestration.

## 🚀 Features

- **React 19** - Latest React with modern features
- **TypeScript** - Full type safety throughout
- **Tailwind CSS v4** - Modern utility-first styling
- **TanStack Query** - Server state management
- **Zustand** - Lightweight client state management
- **React Router** - Client-side routing
- **i18next** - Internationalization support
- **Vite** - Fast build tool and dev server
- **ESLint** - Modern flat config with React hooks

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
Starts the development server with hot module replacement (HMR).

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

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
│   └── useApi.ts      # API integration hooks
├── lib/               # Utilities and configuration
│   ├── constants.ts   # App constants and types
│   └── queryClient.ts # TanStack Query configuration
├── locales/           # Internationalization files
│   └── en/
│       └── translation.json
├── pages/             # Route components
├── stores/            # State management
│   └── useAppStore.ts # Zustand store
├── App.tsx           # Main app component
├── i18n.ts           # i18n configuration
├── main.tsx          # Application entry point
└── index.css         # Global styles with Tailwind
```

## 🌍 Internationalization

The app supports multiple languages using i18next:

```typescript
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  return <h1>{t('app.title')}</h1>
}
```

## 🎨 Styling

The project uses Tailwind CSS v4 with zero-config setup:

## 🔗 API Integration

The frontend integrates with the Wand AI backend API:

- **Health Check**: `GET /healthz`

## 🧪 Development

### Code Quality
- **ESLint** - Linting with React hooks rules
- **TypeScript** - Type checking
- **Prettier** - Code formatting (if configured)

## 📦 Dependencies

### Production
- **react** (^19.1.1) - React library
- **react-dom** (^19.1.1) - React DOM
- **@tanstack/react-query** - Server state management
- **zustand** - Client state management
- **react-router-dom** - Routing
- **react-i18next** - Internationalization
- **i18next** - i18n framework

### Development
- **vite** - Build tool and dev server
- **@vitejs/plugin-react** - React plugin for Vite
- **typescript** - TypeScript compiler
- **@types/node** - Node.js types
- **eslint** - Linting
- **tailwindcss** - CSS framework

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

**Built with ❤️ using React 19, TypeScript, and modern web technologies**