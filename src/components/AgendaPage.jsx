import { Link } from 'react-router-dom'
import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import candidatePortrait from '../assets/candidate-portrait.png'
import aboutImage from '../assets/about.png'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function AgendaPage() {
  const agenda = siteData.agenda

  return (
    <div className="min-h-screen">

      {/* ===== SECTION 1: Intro — Image Left, Text Right ===== */}
      <section
        className="w-full pt-20 pb-28 md:pt-28 md:pb-36 lg:pt-32 lg:pb-44"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <AnimateIn delay={0.2} className="w-full flex justify-center">
              <div
                className="rounded-lg overflow-hidden shadow-2xl"
                style={{ border: `3px solid ${colors.gold[300]}40` }}
              >
                <img
                  src={candidatePortrait}
                  alt={`${siteData.candidate.fullName} presenting his agenda`}
                  className="w-full max-w-2xl h-auto block"
                />
              </div>
            </AnimateIn>

            {/* Text Content */}
            <div>
              <AnimateIn delay={0.1}>
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: colors.primary[500] }}
                >
                  {agenda.sectionLabel}
                </p>
              </AnimateIn>
              <TextAnimate
                as="h1"
                animation="fadeIn"
                by="word"
                delay={0.15}
                once
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight"
              >
                {agenda.headline}
              </TextAnimate>
              {agenda.intro.map((paragraph, index) => (
                <AnimateIn key={index} delay={0.3 + index * 0.1}>
                  <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Agenda Items — Full-Width Numbered Rows ===== */}
      <section
        className="w-full py-20 md:py-28 lg:py-32"
        style={{ backgroundColor: colors.accent[900] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 lg:mb-20">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: colors.primary[400] }}
              >
                {agenda.prioritiesLabel}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {agenda.prioritiesHeading}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                {agenda.prioritiesSubheading}
              </p>
            </AnimateIn>
          </div>

          {/* Priority cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {agenda.priorities.map((item, index) => (
              <AnimateIn key={index} delay={0.25 + index * 0.08}>
                <div
                  className="group rounded-xl p-7 lg:p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    backgroundColor: colors.accent[800],
                    border: `1px solid ${colors.accent[700]}`,
                  }}
                >
                  <div className="flex items-start gap-5">
                    {/* Number badge */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${colors.primary[500]}20`,
                        border: `2px solid ${colors.primary[500]}60`,
                      }}
                    >
                      <span
                        className="text-xl font-black tracking-tight"
                        style={{ color: colors.primary[400] }}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-base" style={{ color: colors.accent[300] }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Key Commitments ===== */}
      <section
        className="w-full py-20 md:py-28 lg:py-32"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-14 lg:mb-16">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: colors.primary[500] }}
              >
                {agenda.commitmentsLabel}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                {agenda.commitmentsHeading}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
                {agenda.commitmentsSubheading}
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {agenda.commitments.map((item, index) => (
              <AnimateIn key={index} delay={0.25 + index * 0.1}>
                <div
                  className="rounded-xl p-8 h-full bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Star icon */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${colors.primary[500]}15` }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: colors.primary[500] }}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CTA — Full-Width Image Background ===== */}
      <section className="relative w-full py-28 md:py-36 lg:py-44 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.65)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <AnimateIn delay={0.1}>
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: colors.primary[400] }}
            >
              {agenda.ctaLabel}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {agenda.ctaHeading}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              {agenda.ctaText}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={siteData.campaign.donateUrl}
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold px-10 py-4 rounded transition-all duration-200 shadow-lg text-sm tracking-[0.15em] uppercase hover:scale-105 active:scale-95"
              >
                DONATE NOW
              </a>
              <Link
                to="/contact"
                className="inline-block border-2 border-white text-white font-bold px-10 py-4 rounded text-sm tracking-[0.15em] uppercase transition-all duration-200 hover:bg-white hover:text-neutral-900 hover:scale-105 hover:shadow-lg active:scale-95 no-underline"
              >
                CONTACT US
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AgendaPage
