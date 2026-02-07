import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-bg.png'
import logoImage from '../assets/logo-white.png'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function HeroSection() {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [consentChecked, setConsentChecked] = useState(false)

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '')
    const limitedNumber = phoneNumber.slice(0, 10)
    if (limitedNumber.length === 0) return ''
    if (limitedNumber.length <= 3) return `(${limitedNumber}`
    if (limitedNumber.length <= 6) return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3)}`
    return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`
  }

  const handlePhoneChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value))
  }

  const navLinks = siteData.navigation?.links || []
  const headlineText = siteData.hero.headline.replace(/\.\s*$/, '')
  const subheadlineText = siteData.hero.subheadline || ''

  return (
    <>
      {/* ===== MOBILE & TABLET LAYOUT ===== */}
      <section className="lg:hidden relative w-full min-h-screen min-h-[700px] overflow-hidden flex flex-col">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '30% top' }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.1) 65%, transparent 100%)',
          }}
        ></div>

        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 pb-3">
          <AnimateIn delay={0}>
            <a href="#" className="block">
              <img src={logoImage} alt="Campaign Logo" className="h-28 sm:h-32 md:h-40 w-auto" />
            </a>
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
              className="text-white p-1.5"
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
            className="absolute left-0 right-0 top-0 z-30 pb-8"
            style={{ backgroundColor: colors.accent[900] }}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 pb-3">
              <a href="#" className="block">
                <img src={logoImage} alt="Campaign Logo" className="h-28 sm:h-32 md:h-40 w-auto" />
              </a>
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

            <div className="flex flex-col px-6 pt-2">
              {navLinks.map((link) =>
                link.href.startsWith('/') ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-neutral-200 text-lg font-bold tracking-[0.2em] uppercase py-4 border-b border-neutral-700 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-neutral-200 text-lg font-bold tracking-[0.2em] uppercase py-4 border-b border-neutral-700 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-[0.5]" />

        {/* Hero Content - stacked on mobile */}
        <div className="relative z-10 px-5 sm:px-8 md:px-10 pb-8 sm:pb-10 md:pb-12 mt-auto">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            {/* Label - hidden on mobile, visible on tablet */}
            <AnimateIn delay={0.1}>
              <p className="hidden sm:block text-primary-400 font-bold text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 text-center">
                {siteData.candidate.fullName} for Mayor
              </p>
            </AnimateIn>

            {/* Headline */}
            <div className="-mt-3 sm:mt-0 mb-3 text-center">
              <TextAnimate
                as="h1"
                animation="fadeIn"
                by="word"
                delay={0.2}
                once
                className="text-5xl sm:text-5xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight inline"
              >
                {headlineText}
              </TextAnimate>
              <span className="text-5xl sm:text-5xl md:text-5xl font-bold text-primary-400">.</span>
            </div>

            {/* Subheadline */}
            {subheadlineText && (
              <AnimateIn delay={0.3}>
                <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-7 text-center max-w-md mx-auto">
                  {subheadlineText}
                </p>
              </AnimateIn>
            )}

            {/* Signup Form */}
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <AnimateIn delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white/95 backdrop-blur-sm text-neutral-900 placeholder-neutral-400 font-medium rounded-sm border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-base"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="14"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    className="w-full px-4 py-3.5 bg-white/95 backdrop-blur-sm text-neutral-900 placeholder-neutral-400 font-medium rounded-sm border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-base"
                    required
                  />
                </div>
              </AnimateIn>
              <AnimateIn delay={0.5}>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    pattern="[0-9]{5}"
                    maxLength="5"
                    className="w-full px-4 py-3.5 bg-white/95 backdrop-blur-sm text-neutral-900 placeholder-neutral-400 font-medium rounded-sm border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-sm transition-all duration-200 focus:outline-none shadow-lg shadow-primary-500/25 text-base tracking-[0.15em] uppercase hover:shadow-xl hover:shadow-primary-500/30"
                  >
                    JOIN US
                  </button>
                </div>
              </AnimateIn>
            </form>

            {/* Disclaimer */}
            <AnimateIn delay={0.6}>
              <div className="flex items-start gap-3 mt-4 sm:mt-5">
                <button
                  type="button"
                  onClick={() => setConsentChecked(!consentChecked)}
                  className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    consentChecked
                      ? 'bg-primary-500 border-primary-500 shadow-md shadow-primary-500/30'
                      : 'bg-transparent border-white/50 hover:border-white'
                  }`}
                  aria-label="Consent checkbox"
                >
                  {consentChecked && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span onClick={() => setConsentChecked(!consentChecked)} className="text-white/70 text-[10px] sm:text-[11px] leading-relaxed cursor-pointer select-none">
                  {siteData.hero.disclaimerText}{' '}
                  <a href={siteData.contact.termsUrl} className="underline hover:no-underline transition-all">Terms</a>
                  {' & '}
                  <a href={siteData.contact.privacyUrl} className="underline hover:no-underline transition-all">Privacy Policy</a>.
                </span>
              </div>
            </AnimateIn>

            {/* Social Icons */}
            <AnimateIn delay={0.8}>
              <div className="flex gap-2.5 mt-5 sm:mt-6 justify-center">
                <a href={siteData.contact.social.facebook} className="w-9 h-9 rounded-full border border-white/40 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/80 hover:text-primary-400 transition-all duration-200" aria-label="Facebook">
                  <span className="font-bold text-xs">f</span>
                </a>
                <a href={siteData.contact.social.instagram} className="w-9 h-9 rounded-full border border-white/40 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/80 hover:text-primary-400 transition-all duration-200" aria-label="Instagram">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href={siteData.contact.social.twitter} className="w-9 h-9 rounded-full border border-white/40 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/80 hover:text-primary-400 transition-all duration-200" aria-label="X (Twitter)">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-white/40 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/80 hover:text-primary-400 transition-all duration-200" aria-label="TikTok">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.86 4.86 0 01-1-.15z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-white/40 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/80 hover:text-primary-400 transition-all duration-200" aria-label="YouTube">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-white/40 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/80 hover:text-primary-400 transition-all duration-200" aria-label="Threads">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.784 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.104-1.126 3.449-1.134.952-.01 1.845.123 2.669.396-.078-.81-.295-1.46-.648-1.94-.463-.63-1.208-.96-2.215-.98h-.048c-.79 0-1.81.248-2.537 1.022l-1.397-1.465C9.06 6.267 10.4 5.725 11.89 5.712h.07c1.604.026 2.834.614 3.655 1.748.735 1.017 1.108 2.405 1.11 4.127l.003.263c.964.525 1.748 1.26 2.26 2.175.755 1.35.958 3.097.571 4.906-.55 2.578-2.2 4.348-4.92 5.28-1.075.368-2.258.555-3.513.571l-.042-.003h.102zm-1.226-8.088c-.842.046-1.543.313-1.97.753-.34.35-.507.784-.483 1.254.04.73.524 1.587 2.168 1.587l.312-.009c1.04-.056 1.818-.466 2.314-1.22.376-.572.618-1.325.727-2.257-.634-.194-1.34-.304-2.098-.304l-.232.003-.738-.007z"/></svg>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== DESKTOP LAYOUT ===== */}
      <section className="hidden lg:block relative w-full h-screen min-h-[700px] overflow-hidden">
        {/* Background Image - shifted left so candidate shows on left side */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '25% top' }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Gradient: dark on the RIGHT so right-side content is readable, fading to transparent on left */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.55) 25%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.1) 60%, transparent 80%)',
          }}
        ></div>

        {/* ===== NAVBAR ===== */}
        <nav className="relative z-20 w-full">
          {/* Logo - top left */}
          <AnimateIn delay={0} className="absolute left-16 xl:left-20 -top-2 z-30">
            <a href="#" className="block">
              <img src={logoImage} alt="Campaign Logo" className="h-60 xl:h-72 w-auto" />
            </a>
          </AnimateIn>

          {/* Nav links - top right */}
          <div className="flex items-center justify-end px-16 xl:px-20 pt-12 pb-5">
            <div className="flex items-center gap-5 xl:gap-7">
              {navLinks.map((link, i) => (
                <AnimateIn key={link.label} delay={0.05 * (i + 1)}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-white text-xs xl:text-sm font-semibold tracking-[0.15em] uppercase hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white text-xs xl:text-sm font-semibold tracking-[0.15em] uppercase hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
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

        {/* ===== HERO CONTENT - RIGHT SIDE, LEFT-ALIGNED TEXT ===== */}
        <div className="relative z-10 h-[calc(100vh-120px)] min-h-[580px] flex items-center">
          {/* Push content to the right half */}
          <div className="w-1/2 ml-auto pl-8 xl:pl-12 2xl:pl-16 pr-16 xl:pr-20 2xl:pr-28">
            <div className="max-w-xl xl:max-w-2xl">
              {/* Label / Tagline */}
              <AnimateIn delay={0.1}>
                <p className="text-primary-400 font-bold text-xs xl:text-sm tracking-[0.3em] uppercase mb-4">
                  {siteData.candidate.fullName} for Mayor
                </p>
              </AnimateIn>

              {/* Headline */}
              <div className="mb-4">
                <TextAnimate
                  as="h1"
                  animation="fadeIn"
                  by="word"
                  delay={0.2}
                  once
                  className="text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight inline"
                >
                  {headlineText}
                </TextAnimate>
                <span className="text-6xl xl:text-7xl font-bold text-primary-400">.</span>
              </div>

              {/* Subheadline */}
              {subheadlineText && (
                <AnimateIn delay={0.3}>
                  <p className="text-white/70 text-lg xl:text-xl leading-relaxed mb-9 max-w-lg">
                    {subheadlineText}
                  </p>
                </AnimateIn>
              )}

              {/* Signup Form */}
              <form className="w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
                <AnimateIn delay={0.4}>
                  <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 bg-white/95 backdrop-blur-sm text-neutral-900 placeholder-neutral-400 font-medium rounded-sm border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-base xl:text-lg"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength="14"
                      pattern="\(\d{3}\) \d{3}-\d{4}"
                      className="w-full px-5 py-4 bg-white/95 backdrop-blur-sm text-neutral-900 placeholder-neutral-400 font-medium rounded-sm border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-base xl:text-lg"
                      required
                    />
                  </div>
                </AnimateIn>
                <AnimateIn delay={0.5}>
                  <div className="grid grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      pattern="[0-9]{5}"
                      maxLength="5"
                      className="w-full px-5 py-4 bg-white/95 backdrop-blur-sm text-neutral-900 placeholder-neutral-400 font-medium rounded-sm border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-base xl:text-lg"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-5 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-sm transition-all duration-200 focus:outline-none shadow-lg shadow-primary-500/25 text-base xl:text-lg tracking-[0.15em] uppercase hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-px"
                    >
                      JOIN US
                    </button>
                  </div>
                </AnimateIn>
              </form>

              {/* Disclaimer */}
              <AnimateIn delay={0.6}>
                <div className="flex items-start gap-3 mt-5 max-w-xl">
                  <button
                    type="button"
                    onClick={() => setConsentChecked(!consentChecked)}
                    className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      consentChecked
                        ? 'bg-primary-500 border-primary-500 shadow-md shadow-primary-500/30'
                        : 'bg-transparent border-white/50 hover:border-white'
                    }`}
                    aria-label="Consent checkbox"
                  >
                    {consentChecked && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span onClick={() => setConsentChecked(!consentChecked)} className="text-white/65 text-[11px] leading-relaxed cursor-pointer select-none">
                    {siteData.hero.disclaimerText}{' '}
                    <a href={siteData.contact.termsUrl} className="underline hover:no-underline transition-all">Terms</a>
                    {' & '}
                    <a href={siteData.contact.privacyUrl} className="underline hover:no-underline transition-all">Privacy Policy</a>.
                  </span>
                </div>
              </AnimateIn>

              {/* Social Icons */}
              <AnimateIn delay={0.8}>
                <div className="flex gap-2.5 mt-7">
                  <a href={siteData.contact.social.facebook} className="w-10 h-10 rounded-full border border-white/35 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/75 hover:text-primary-400 transition-all duration-200" aria-label="Facebook">
                    <span className="font-bold text-sm">f</span>
                  </a>
                  <a href={siteData.contact.social.instagram} className="w-10 h-10 rounded-full border border-white/35 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/75 hover:text-primary-400 transition-all duration-200" aria-label="Instagram">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href={siteData.contact.social.twitter} className="w-10 h-10 rounded-full border border-white/35 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/75 hover:text-primary-400 transition-all duration-200" aria-label="X (Twitter)">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/35 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/75 hover:text-primary-400 transition-all duration-200" aria-label="TikTok">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.86 4.86 0 01-1-.15z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/35 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/75 hover:text-primary-400 transition-all duration-200" aria-label="YouTube">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/35 hover:border-primary-400 hover:bg-primary-500/15 flex items-center justify-center text-white/75 hover:text-primary-400 transition-all duration-200" aria-label="Threads">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.784 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.104-1.126 3.449-1.134.952-.01 1.845.123 2.669.396-.078-.81-.295-1.46-.648-1.94-.463-.63-1.208-.96-2.215-.98h-.048c-.79 0-1.81.248-2.537 1.022l-1.397-1.465C9.06 6.267 10.4 5.725 11.89 5.712h.07c1.604.026 2.834.614 3.655 1.748.735 1.017 1.108 2.405 1.11 4.127l.003.263c.964.525 1.748 1.26 2.26 2.175.755 1.35.958 3.097.571 4.906-.55 2.578-2.2 4.348-4.92 5.28-1.075.368-2.258.555-3.513.571l-.042-.003h.102zm-1.226-8.088c-.842.046-1.543.313-1.97.753-.34.35-.507.784-.483 1.254.04.73.524 1.587 2.168 1.587l.312-.009c1.04-.056 1.818-.466 2.314-1.22.376-.572.618-1.325.727-2.257-.634-.194-1.34-.304-2.098-.304l-.232.003-.738-.007z"/></svg>
                  </a>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
