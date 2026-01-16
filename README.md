# Image Search App

A modern React application for searching and viewing images from Unsplash API using Vite and CSS Modules.

## Features

- 🔍 Search images by keyword using Unsplash API
- 📱 Responsive grid gallery layout
- 🖼️ Modal view for full-resolution images
- ⬇️ Infinite scroll with "Load More" functionality
- ⌨️ Keyboard navigation (ESC to close modal)
- 🚀 Built with Vite for fast development
- 💄 CSS Modules for component styling
- 📦 Clean, modular component structure

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Free Unsplash API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/b01ma/goit-neo-react-hw-module4.git
cd goit-neo-react-hw-module4
```

2. Install dependencies:
```bash
npm install
```

3. Get your Unsplash API key:
   - Go to https://unsplash.com/oauth/applications
   - Create a new application (or use existing one)
   - Copy your Access Key

4. Create `.env.local` file and add your API key:
```bash
VITE_UNSPLASH_API_KEY=your_access_key_here
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at http://localhost:5173/

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview
```bash
npm run preview
```
Preview the production build locally

## Project Structure

```
src/
├── components/
│   ├── SearchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.module.css
│   ├── ImageGallery/
│   │   ├── ImageGallery.jsx
│   │   └── ImageGallery.module.css
│   ├── ImageCard/
│   │   ├── ImageCard.jsx
│   │   └── ImageCard.module.css
│   ├── Loader/
│   │   ├── Loader.jsx
│   │   └── Loader.module.css
│   ├── ErrorMessage/
│   │   ├── ErrorMessage.jsx
│   │   └── ErrorMessage.module.css
│   ├── LoadMoreBtn/
│   │   ├── LoadMoreBtn.jsx
│   │   └── LoadMoreBtn.module.css
│   └── ImageModal/
│       ├── ImageModal.jsx
│       └── ImageModal.module.css
├── App.jsx
├── App.module.css
├── main.jsx
└── index.css
```

## Component Overview

### SearchBar
Handles user input for image searches with validation. Shows error toast if search is empty.

### ImageGallery
Displays images in a responsive grid layout. Only renders when images are available.

### ImageCard
Individual image card component with thumbnail preview.

### Loader
Shows a loading spinner while fetching images from API.

### ErrorMessage
Displays error messages when image fetch fails.

### LoadMoreBtn
Button to load additional images. Visible only when more results are available.

### ImageModal
Full-screen modal for viewing images in high resolution. Closes with ESC key or clicking outside.

## Dependencies

- **react** & **react-dom** - UI framework
- **axios** - HTTP requests
- **react-hot-toast** - Toast notifications
- **react-modal** - Modal dialog component
- **react-spinners** - Loading spinner components

## Development Dependencies

- **vite** - Build tool and dev server
- **@vitejs/plugin-react** - React support for Vite
- **prettier** - Code formatter

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Code Quality

The project follows best practices:
- Components use export default
- CSS Modules for scoped styling
- Prettier code formatting
- Clean and readable code structure

## License

ISC

## Author

GoIT Neoversity Student
