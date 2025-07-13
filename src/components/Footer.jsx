import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🌍 Country Explorer</h3>
          <p>Explore countries around the world with comprehensive data and beautiful visuals.</p>
        </div>
        
        <div className="footer-section">
          <h4>Data Source</h4>
          <p>
            Powered by{' '}
            <a 
              href="https://restcountries.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              REST Countries API
            </a>
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Technologies</h4>
          <ul className="tech-list">
            <li>
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-link"
              >
                React 19
              </a>
            </li>
            <li>
              <a
                href="https://vitejs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-link"
              >
                Vite
              </a>
            </li>
            <li>
              <a
                href="https://axios-http.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-link"
              >
                Axios
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-link"
              >
                CSS3
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Country Explorer. Built with ❤️ using React.</p>
      </div>
    </footer>
  );
}

export default Footer;
