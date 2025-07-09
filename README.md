# 🌍 Country Explorer

A modern React application that displays information about countries around the world using the REST Countries API. Browse, search, and filter countries to explore their details including flags, capitals, populations, and more.

## ✨ Features

- **Country Display**: View all countries with their flags, names, continents, capitals, populations, and areas
- **Search Functionality**: Search countries by name in real-time
- **Region Filtering**: Filter countries by continent (Africa, Americas, Asia, Europe, Oceania)
- **Responsive Design**: Optimized grid layout that adapts to different screen sizes
- **Modern UI**: Clean, card-based interface with proper spacing and typography
- **Error Handling**: Graceful handling of API errors and missing data

## 🚀 Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API requests
- **REST Countries API** - Source of country data
- **CSS Grid** - Responsive layout system
- **ESLint** - Code linting and formatting

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

## 🏗️ Project Structure

```
src/
├── components/
│   ├── CountryCard.jsx    # Individual country display component
│   └── Filter.jsx         # Search and region filter component
├── App.jsx               # Main application component
├── App.css              # Application styles
├── index.css            # Global styles
└── main.jsx             # Application entry point
public/
├── globe-favicon.svg    # Custom globe favicon
└── index.html          # HTML template
```

## 🌐 API Integration

This application uses the [REST Countries API](https://restcountries.com/) to fetch country data. The API provides comprehensive information about countries including:

- Country names and flags
- Geographic information (region, area)
- Population data
- Capital cities
- And much more

## 🎨 Design Features

- **Custom Globe Favicon**: Matches the application's globe theme
- **Responsive Grid**: Automatically adjusts from 3-6+ cards per row based on screen size
- **Consistent Styling**: Unified color scheme and typography
- **Loading States**: User-friendly loading and error messages
- **Accessible Design**: Proper contrast ratios and semantic HTML

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
