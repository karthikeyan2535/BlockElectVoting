import React from "react";

const HeroSection = ({ initialData, higest }) => {
  return (
    <section className="hero-bg d-flex align-items-center position-relative">
      {/* Floating Decorative Elements */}
      <div className="position-absolute floating" style={{ top: '10%', left: '5%', zIndex: 1 }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: 'var(--bg-gradient)', 
          borderRadius: '50%', 
          opacity: 0.1 
        }}></div>
      </div>
      <div className="position-absolute floating-delayed" style={{ top: '20%', right: '10%', zIndex: 1 }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))', 
          borderRadius: '50%', 
          opacity: 0.1 
        }}></div>
      </div>
      <div className="position-absolute floating" style={{ bottom: '15%', left: '8%', zIndex: 1 }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          background: 'linear-gradient(135deg, var(--accent-green), var(--accent-blue))', 
          borderRadius: '50%', 
          opacity: 0.1 
        }}></div>
      </div>

      <div className="container pt-20 mt-12 mt-lg-20">
        <div className="row pt-4 pt-lg-10 gy-12 gy-lg-0 justify-content-center justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-xxl-7">
            <div className="hero-content position-relative z-2">
              <div className="mb-4">
                <span className="badge" style={{
                  background: 'var(--bg-card)',
                  color: 'var(--accent-blue)',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  border: '1px solid var(--border-color)',
                  backdropFilter: 'blur(10px)'
                }}>
                  🗳️ Decentralized Voting Platform
                </span>
              </div>
              
              <h1 className="display-two mb-5 mb-lg-6" style={{ 
                color: 'var(--text-primary)',
                lineHeight: '1.1',
                fontWeight: '800'
              }}>
                Secure & Transparent
                <span className="gradient-text d-block">
                  Blockchain Voting
                </span>
              </h1>
              
              <p className="fs-six-up fw-500 mb-6" style={{ 
                color: 'var(--text-secondary)',
                maxWidth: '500px',
                lineHeight: '1.6'
              }}>
                Experience the future of democracy with our decentralized voting system. 
                Built on blockchain technology for maximum security, transparency, and trust.
              </p>

              {initialData?.startDateN != 0 && initialData?.endDateN != 0 && (
                <div className="glass-card p-4 mb-6" style={{ maxWidth: '400px' }}>
                  <h6 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Voting Period</h6>
                  <div className="d-flex flex-column gap-2">
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      <strong>Starts:</strong> {initialData?.startDate}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      <strong>Ends:</strong> {initialData?.endDate}
                    </div>
                  </div>
                </div>
              )}

              <div className="d-flex flex-wrap gap-4 align-items-center mb-8">
                <a
                  href="/approve-candidate"
                  className="btn-primary text-decoration-none"
                >
                  View Candidates
                  <i className="ti ti-users"></i>
                </a>
                
                {higest ? (
                  <a
                    href={`/candidate-details?address=${higest?.address}`}
                    className="btn-secondary text-decoration-none"
                  >
                    Leading Candidate
                    <i className="ti ti-crown"></i>
                  </a>
                ) : (
                  <a
                    href="/register-voter"
                    className="btn-secondary text-decoration-none"
                  >
                    Register to Vote
                    <i className="ti ti-user-plus"></i>
                  </a>
                )}
              </div>

              {/* Feature Highlights */}
              <div className="row g-3 mt-6">
                <div className="col-4">
                  <div className="stats-card">
                    <div className="stats-number">🔒</div>
                    <div className="stats-label">Secure</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stats-card">
                    <div className="stats-number">⚡</div>
                    <div className="stats-label">Fast</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stats-card">
                    <div className="stats-number">🌐</div>
                    <div className="stats-label">Transparent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-sm-10 col-lg-6 col-xxl-5">
            <div className="hero-image position-relative">
              {/* Glowing effect around image */}
              <div className="position-absolute w-100 h-100 pulse-glow" style={{
                borderRadius: '2rem',
                zIndex: 0
              }}></div>
              
              <div className="position-relative z-1">
                <img
                  src="assets/images/hero-image.png"
                  className="w-100 floating"
                  alt="Blockchain Voting"
                  style={{
                    borderRadius: '2rem',
                    boxShadow: 'var(--shadow-heavy)'
                  }}
                />
              </div>

              {/* Floating Info Cards */}
              <div className="position-absolute floating" style={{ top: '10%', right: '-10%', zIndex: 2 }}>
                <div className="glass-card p-3" style={{ minWidth: '150px' }}>
                  <div className="d-flex align-items-center gap-2">
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--accent-green)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      ✓
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.875rem' }}>
                        Verified
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                        Blockchain Secured
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-absolute floating-delayed" style={{ bottom: '15%', left: '-10%', zIndex: 2 }}>
                <div className="glass-card p-3" style={{ minWidth: '150px' }}>
                  <div className="d-flex align-items-center gap-2">
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--accent-blue)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      🗳️
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.875rem' }}>
                        Anonymous
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                        Private Voting
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;