import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../../context/theme';
//INTERNAL IMPORT
import Link from "./Link";
//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../../../context/context";

const Header = () => {
  const { connectWallet, address, setAddress, OWNER_ADDRESS } =
    useContext(VOTING_DAPP_CONTEXT);

  const clickConnect = async () => {
    const userAddress = await connectWallet();
    setAddress(userAddress);
  };
  
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header-section header-section--secondary header-menu w-100 fixed top-0 z-50">
      <div className="container d-center">
        <nav className="navbar nav-glass py-3 px-4 rounded-3 navbar-expand-lg w-100 justify-content-between">
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler ms-4"
              type="button"
              data-bs-toggle="collapse"
              aria-label="Navbar Toggler"
              data-bs-target="#navbar-content"
              aria-expanded="true"
              id="nav-icon3"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a
              href="/"
              className="navbar-brand m-0 p-0 d-flex align-items-center gap-3 me-2"
            >
              <img
                src="assets/images/fav.png"
                className="logo small_logo d-sm-none"
                alt="logo"
                width={40}
                height={40}
              />
              <img
                src="assets/images/logo.png"
                className="logo d-none d-sm-flex"
                alt="logo"
                width={150}
              />
            </a>
          </div>

          <div className="nav_alt">
            <div className="right-area position-relative ms-0 d-center gap-4 gap-xl-6 d-lg-none">
              {address ? (
                <>
                  <div className="single-item">
                    <a
                      href="/voter"
                      className="btn-secondary text-decoration-none"
                    >
                      Voter
                      <i className="ti ti-arrow-right"></i>
                    </a>
                  </div>
                  <div className="single-item">
                    <a
                      href="/candidate"
                      className="btn-primary text-decoration-none"
                    >
                      Candidate
                      <i className="ti ti-arrow-right"></i>
                    </a>
                  </div>
                </>
              ) : (
                <div className="single-item">
                  <button
                    onClick={() => clickConnect()}
                    className="btn-primary"
                  >
                    Connect Wallet
                    <i className="ti ti-wallet"></i>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbar-content"
          >
            <ul className="navbar-nav gap-2 gap-lg-3 gap-xxl-8 align-self-center mx-auto mt-4 mt-lg-0">
              <li className="dropdown show-dropdown">
                <a href="/" className="dropdown-nav active" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                  Home
                </a>
              </li>
              <li className="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className="dropdown-nav"
                  style={{ color: 'var(--text-primary)', fontWeight: '600', background: 'none', border: 'none' }}
                >
                  Candidate
                </button>
                <ul className="dropdown-menu glass-card">
                  <li>
                    <a className="dropdown-item" href="/register-candidate" style={{ color: 'var(--text-primary)' }}>
                      All Candidate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/approve-candidate" style={{ color: 'var(--text-primary)' }}>
                      Approve Candidate
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className="dropdown-nav"
                  style={{ color: 'var(--text-primary)', fontWeight: '600', background: 'none', border: 'none' }}
                >
                  Voter
                </button>
                <ul className="dropdown-menu glass-card">
                  <li>
                    <a className="dropdown-item" href="/register-voter" style={{ color: 'var(--text-primary)' }}>
                      All Voters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/approve-voter" style={{ color: 'var(--text-primary)' }}>
                      Approve Voters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/all-voters-voted" style={{ color: 'var(--text-primary)' }}>
                      All Voted Voters
                    </a>
                  </li>
                </ul>
              </li>

              {address == OWNER_ADDRESS?.toLowerCase() && (
                <li>
                  <a className="dropdown-item" href="/owner" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                    Owner
                  </a>
                </li>
              )}
              <li className="dropdown show-dropdown">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className="dropdown-nav"
                  style={{ color: 'var(--text-primary)', fontWeight: '600', background: 'none', border: 'none' }}
                >
                  Resources
                </button>
                <ul className="dropdown-menu glass-card">
                  <li>
                    <a className="dropdown-item" href="/about" style={{ color: 'var(--text-primary)' }}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/terms-conditions" style={{ color: 'var(--text-primary)' }}>
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="right-area position-relative ms-0 d-center gap-3 d-none d-lg-flex">
            {address ? (
              <>
                <div className="single-item">
                  <a
                    href="/voter"
                    className="btn-secondary text-decoration-none"
                  >
                    Voter
                    <i className="ti ti-arrow-right"></i>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    href="/candidate"
                    className="btn-primary text-decoration-none"
                  >
                    Candidate
                    <i className="ti ti-arrow-right"></i>
                  </a>
                </div>
              </>
            ) : (
              <div className="single-item">
                <button
                  onClick={() => clickConnect()}
                  className="btn-primary"
                >
                  Connect Wallet
                  <i className="ti ti-wallet"></i>
                </button>
              </div>
            )}

            {/* Theme Toggle */}
            <div className="theme-toggle-container">
              <span className="theme-label">☀️</span>
              <div className="theme-toggle" onClick={toggleTheme}>
                <div className="theme-toggle-slider">
                  {theme === 'dark' ? '🌙' : '☀️'}
                </div>
              </div>
              <span className="theme-label">🌙</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;