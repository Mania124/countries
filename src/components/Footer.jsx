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
            <li>React 19</li>
            <li>Vite</li>
            <li>Axios</li>
            <li>CSS3</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Features</h4>
          <ul className="feature-list">
            <li>🔍 Real-time Search</li>
            <li>🌎 Region Filtering</li>
            <li>📱 Responsive Design</li>
            <li>✨ Interactive Cards</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Country Explorer. Built with ❤️ using React.</p>
        <p className="footer-note">
          Click the header to reset filters • Hover cards for animations
        </p>
      </div>
    </footer>
  );
}

export default Footer;
