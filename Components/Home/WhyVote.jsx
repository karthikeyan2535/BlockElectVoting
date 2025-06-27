import React from "react";

const WhyVote = () => {
  const features = [
    {
      icon: "🔐",
      title: "Immutable Security",
      description: "Every vote is cryptographically secured and stored on the blockchain, making it impossible to alter or delete."
    },
    {
      icon: "👁️",
      title: "Complete Transparency",
      description: "All voting data is publicly verifiable while maintaining voter privacy through advanced cryptographic techniques."
    },
    {
      icon: "⚡",
      title: "Instant Results",
      description: "Real-time vote counting with immediate result publication once the voting period ends."
    },
    {
      icon: "🌍",
      title: "Global Accessibility",
      description: "Vote from anywhere in the world with just an internet connection and your digital wallet."
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Eliminate the need for physical polling stations and reduce election costs significantly."
    },
    {
      icon: "🛡️",
      title: "Fraud Prevention",
      description: "Blockchain technology makes vote manipulation virtually impossible through decentralized verification."
    }
  ];

  return (
    <section className="py-5" style={{ 
      background: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div className="position-absolute w-100 h-100" style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)
        `,
        top: 0,
        left: 0,
        zIndex: 0
      }}></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="mb-4">
              <span className="badge" style={{
                background: 'var(--bg-card)',
                color: 'var(--accent-purple)',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)'
              }}>
                ⚡ Why Choose Blockchain Voting
              </span>
            </div>
            
            <h2 className="display-four mb-4" style={{ 
              color: 'var(--text-primary)',
              fontWeight: '700'
            }}>
              The Future of 
              <span className="gradient-text"> Democratic Participation</span>
            </h2>
            
            <p className="fs-six-up" style={{ 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Blockchain voting represents a revolutionary leap forward in electoral technology, 
              combining the security of cryptography with the transparency of distributed ledgers.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h5 className="mb-3" style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: '600'
                }}>
                  {feature.title}
                </h5>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="glass-card p-5 text-center">
              <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>
                Ready to Experience the Future of Voting?
              </h4>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                Join thousands of users who trust blockchain technology for secure, transparent elections.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <a href="/voter" className="btn-primary text-decoration-none">
                  Register as Voter
                  <i className="ti ti-user-plus"></i>
                </a>
                <a href="/candidate" className="btn-secondary text-decoration-none">
                  Become a Candidate
                  <i className="ti ti-crown"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVote;