# 🌍 Country Explorer

A modern, responsive React application that displays comprehensive information about countries worldwide using the REST Countries API. Features a fixed header navigation, interactive country cards, and advanced filtering capabilities for an optimal user experience.

## 🌐 Live Demo

**[View Live App](https://Mania124.github.io/countries)** 🚀

Experience the Country Explorer in action at: `https://Mania124.github.io/countries`

## ✨ Features

### 🗺️ **Core Functionality**
- **Comprehensive Country Data**: View flags, names, continents, capitals, populations, and areas
- **Alphabetical Sorting**: Countries automatically sorted A-Z for easy navigation
- **Real-time Search**: Instant search by country name with live filtering
- **Region Filtering**: Filter by continent (Africa, Americas, Asia, Europe, Oceania)
- **Fixed Header Navigation**: Sticky header with always-accessible search and filters

### 🎨 **User Interface**
- **Interactive Country Cards**: Hover effects with smooth animations and scaling
- **Responsive Grid Layout**: Adapts from 3-6+ cards per row based on screen size
- **Modern Design**: Clean, professional interface with consistent styling
- **Custom Globe Favicon**: Branded favicon matching the app theme
- **Clickable Header**: Click title to reset all filters and reload the app

### 🔧 **Technical Features**
- **External CSS Architecture**: Organized, maintainable stylesheets
- **Accessibility**: Proper focus states and keyboard navigation
- **Error Handling**: Graceful API error handling with user-friendly messages
- **Performance Optimized**: Smooth 60fps animations and efficient rendering

## 🚀 Technologies Used

- **React 19** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and development server
- **Axios** - Promise-based HTTP client for API requests
- **REST Countries API** - Comprehensive source of country data
- **CSS Grid & Flexbox** - Advanced responsive layout systems
- **CSS3 Animations** - Smooth hover effects and transitions
- **ESLint** - Code linting and formatting for code quality

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Countries
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Deployment

This application is deployed on GitHub Pages with automatic CI/CD deployment.

### Live Application
- **URL**: [https://Mania124.github.io/countries](https://Mania124.github.io/countries)
- **Hosting**: GitHub Pages
- **Deployment**: Automatic via GitHub Actions

### Manual Deployment
To deploy manually:
```bash
npm run deploy
```

### Deployment Process
1. **Automatic**: Every push to main branch triggers deployment
2. **Build**: GitHub Actions builds the optimized production bundle
3. **Deploy**: Built files are automatically deployed to GitHub Pages
4. **Live**: Changes are reflected on the live site within minutes

## 🏗️ Project Structure

```
src/
├── components/
│   ├── CountryCard.jsx    # Individual country display component
│   ├── CountryCard.css    # Country card styles with hover effects
│   ├── Filter.jsx         # Search and region filter component
│   └── Filter.css         # Filter component styles
├── App.jsx               # Main application component with state management
├── App.css              # Application styles and layout
├── index.css            # Global styles and font rendering
└── main.jsx             # Application entry point
public/
├── globe-favicon.svg    # Custom globe favicon
└── index.html          # HTML template with updated title
```

## 🌐 API Integration

This application uses the [REST Countries API](https://restcountries.com/) to fetch country data. The API provides comprehensive information about countries including:

- Country names and flags
- Geographic information (region, area)
- Population data
- Capital cities
- And much more

## 🎨 Design Features

### 🖼️ **Visual Design**
- **Custom Globe Favicon**: SVG favicon matching the application's globe theme
- **Fixed Header Layout**: Sticky navigation with title and filters always visible
- **Interactive Country Cards**: Smooth hover animations with lift effects and scaling
- **Professional Typography**: Optimized font rendering with antialiasing

### 📱 **Responsive Design**
- **Adaptive Grid**: Automatically adjusts from 3-6+ cards per row based on screen size
- **Mobile-First**: Optimized touch targets and stacked layouts on small screens
- **Full Viewport Usage**: Efficient use of available screen space

### ♿ **Accessibility & UX**
- **Keyboard Navigation**: Full keyboard accessibility with proper focus states
- **High Contrast**: Proper color contrast ratios for readability
- **Loading States**: User-friendly loading and error messages
- **Semantic HTML**: Proper structure for screen readers
- **Click-to-Reset**: Intuitive header click to reset all filters

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎯 Key Features Walkthrough

### 🔍 **Search & Filter**
- Type in the search box to find countries by name instantly
- Use the dropdown to filter by continent/region
- Both filters work together for refined results

### 🖱️ **Interactive Elements**
- **Hover over country cards** to see smooth animations
- **Click the header title** to reset all filters and return to full list
- **Scroll through countries** while keeping filters accessible in fixed header

### 📊 **Data Display**
- Countries are automatically sorted alphabetically
- Each card shows: flag, name, continent, capital, population, and area
- Responsive grid adapts to your screen size for optimal viewing

## 🔧 Architecture Highlights

- **Component-Based**: Modular React components for maintainability
- **External CSS**: Separation of concerns with dedicated stylesheets
- **State Management**: Efficient React hooks for data and UI state
- **API Integration**: Robust error handling and data fetching with Axios
- **Performance**: Optimized rendering and smooth 60fps animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔗 Links

- **Live Application**: [https://Mania124.github.io/countries](https://Mania124.github.io/countries)
- **Repository**: [https://github.com/Mania124/countries](https://github.com/Mania124/countries)
- **REST Countries API**: [https://restcountries.com](https://restcountries.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
