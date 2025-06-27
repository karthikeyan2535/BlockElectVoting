import React from "react";

const Footer = () => {
  return (
    <footer className="footer-bg position-relative pt-5 pb-4">
      <div className="container">
        <div className="row gy-4 pt-5 pb-5">
          <div className="col-lg-4">
            <div className="footer-section">
              <div className="d-flex align-items-center gap-3 mb-4">
                <img
                  src="assets/images/logo.png"
                  alt="BlockElect Logo"
                  width={120}
                />
              </div>
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: '1.6',
                maxWidth: '300px'
              }}>
                Revolutionizing democracy through blockchain technology. 
                Secure, transparent, and accessible voting for everyone.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--bg-card)',
                    borderRadius: '50%',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--border-color)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'var(--accent-blue)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'var(--bg-card)';
                    e.target.style.color = 'var(--text-primary)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="ti ti-brand-twitter"></i>
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--bg-card)',
                    borderRadius: '50%',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--border-color)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'var(--accent-blue)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'var(--bg-card)';
                    e.target.style.color = 'var(--text-primary)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="ti ti-brand-github"></i>
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--bg-card)',
                    borderRadius: '50%',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--border-color)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'var(--accent-blue)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'var(--bg-card)';
                    e.target.style.color = 'var(--text-primary)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="ti ti-brand-linkedin"></i>
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--bg-card)',
                    borderRadius: '50%',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--border-color)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'var(--accent-blue)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'var(--bg-card)';
                    e.target.style.color = 'var(--text-primary)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="ti ti-brand-discord"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-6 col-lg-2">
            <div className="footer-section">
              <h6 className="mb-4" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                Platform
              </h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a 
                    href="/register-voter" 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    Register Voter
                  </a>
                </li>
                <li className="mb-2">
                  <a 
                    href="/register-candidate" 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    Register Candidate
                  </a>
                </li>
                <li className="mb-2">
                  <a 
                    href="/approve-candidate" 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    View Candidates
                  </a>
                </li>
                <li className="mb-2">
                  <a 
                    href="/approve-voter" 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    View Voters
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-6 col-lg-2">
            <div className="footer-section">
              <h6 className="mb-4" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                Resources
              </h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a 
                    href="/about" 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a 
                    href="/terms-conditions" 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a 
                    href="/privacy-policy" 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a 
                    href="/contact" 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="footer-section">
              <h6 className="mb-4" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                Contact Information
              </h6>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--bg-card)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)'
                }}>
                  <i className="ti ti-mail" style={{ color: 'var(--accent-blue)' }}></i>
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '500', fontSize: '0.875rem' }}>
                    Email
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    contact@blockelect.com
                  </div>
                </div>
              </div>
              
              <div className="d-flex align-items-center gap-3 mb-3">
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--bg-card)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)'
                }}>
                  <i className="ti ti-phone" style={{ color: 'var(--accent-green)' }}></i>
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '500', fontSize: '0.875rem' }}>
                    Phone
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>
              
              <div className="d-flex align-items-center gap-3">
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--bg-card)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)'
                }}>
                  <i className="ti ti-map-pin" style={{ color: 'var(--accent-purple)' }}></i>
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '500', fontSize: '0.875rem' }}>
                    Address
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    Blockchain District, Web3 City
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div 
              className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4"
              style={{ 
                borderTop: '1px solid var(--border-color)',
                gap: '1rem'
              }}
            >
              <p className="mb-0" style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.875rem'
              }}>
                © 2025 BlockElect. All rights reserved. Built with ❤️ for democracy.
              </p>
              <div className="d-flex gap-4">
                <a 
                  href="/terms-conditions" 
                  style={{ 
                    color: 'var(--text-secondary)', 
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Terms
                </a>
                <a 
                  href="/privacy-policy" 
                  style={{ 
                    color: 'var(--text-secondary)', 
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Privacy
                </a>
                <a 
                  href="/contact" 
                  style={{ 
                    color: 'var(--text-secondary)', 
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;