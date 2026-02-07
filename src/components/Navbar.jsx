import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../assets/logo-color.png'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function Navbar({ variant = 'solid' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navLinks = siteData.navigation?.links || []

  const isTransparent = variant === 'transparent'
  const bgStyle = isTransparent
    ? {}
    : { backgroundColor: '#ffffff' }

  const renderLink = (link, className, onClick) => {
    const isRoute = link.href.startsWith('/')
    if (isRoute) {
      return (
        <Link to={link.href} className={className} onClick={onClick}>
          {link.label}
        </Link>
      )
    }
    // For hash links on inner pages, prepend "/" so they navigate home first
    const href = location.pathname === '/' ? link.href : `/${link.href}`
    return (
      <a href={href} className={className} onClick={onClick}>
        {link.label}
      </a>
    )
  }

  return (
    <>
      {/* ===== MOBILE & TABLET NAVBAR ===== */}
      <nav
        className="lg:hidden relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 pb-3"
        style={bgStyle}
      >
        <AnimateIn delay={0}>
          <Link to="/" className="block">
            <img src={logoImage} alt="Campaign Logo" className="h-[7.5rem] sm:h-36 md:h-[10.5rem] w-auto" />
          </Link>
        </AnimateIn>

        <div className="flex items-center gap-3">
          <AnimateIn delay={0}>
            <a
              href={siteData.campaign.donateUrl}
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-5 py-2 rounded transition-colors duration-200 shadow-lg text-sm tracking-wider"
            >
              DONATE
            </a>
          </AnimateIn>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-800 p-1.5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden absolute left-0 right-0 top-0 z-50 pb-8"
          style={{ backgroundColor: colors.accent[900] }}
        >
          {/* Duplicate header row so it sits on top seamlessly */}
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 pb-3">
            <Link to="/" className="block" onClick={() => setMobileMenuOpen(false)}>
              <img src={logoImage} alt="Campaign Logo" className="h-[7.5rem] sm:h-36 md:h-[10.5rem] w-auto" />
            </Link>
            <div className="flex items-center gap-3">
              <a
                href={siteData.campaign.donateUrl}
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-5 py-2 rounded transition-colors duration-200 shadow-lg text-sm tracking-wider"
              >
                DONATE
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-1.5"
                aria-label="Close menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col px-6 pt-2">
            {navLinks.map((link) =>
              <div key={link.label}>
                {renderLink(
                  link,
                  'text-neutral-200 text-lg font-bold tracking-[0.2em] uppercase py-4 border-b border-neutral-700 hover:text-primary-400 transition-colors block',
                  () => setMobileMenuOpen(false)
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== DESKTOP NAVBAR ===== */}
      <nav className="hidden lg:block relative z-20 w-full" style={bgStyle}>
        {/* Logo - absolutely positioned, matching hero nav placement */}
        <AnimateIn delay={0} className="absolute left-16 xl:left-20 -top-2 z-30">
          <Link to="/" className="block">
            <img src={logoImage} alt="Campaign Logo" className="h-[7.5rem] xl:h-36 w-auto" />
          </Link>
        </AnimateIn>

        <div className="flex items-center justify-end px-16 xl:px-20 pt-12 pb-5">
          {/* Desktop Nav Links */}
          <div className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link, i) => (
              <AnimateIn key={link.label} delay={0.05 * (i + 1)}>
                {renderLink(
                  link,
                  'text-neutral-800 text-xs xl:text-sm font-semibold tracking-[0.15em] uppercase hover:text-primary-500 transition-colors duration-200'
                )}
              </AnimateIn>
            ))}
            <AnimateIn delay={0.05 * (navLinks.length + 1)}>
              <a
                href={siteData.campaign.donateUrl}
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-7 xl:px-8 py-2.5 xl:py-3 rounded transition-colors duration-200 shadow-lg text-xs xl:text-sm tracking-[0.15em] uppercase ml-2"
              >
                DONATE
              </a>
            </AnimateIn>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
