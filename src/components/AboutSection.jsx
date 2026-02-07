import { Link } from 'react-router-dom'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import candidatePortrait from '../assets/about.png'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10 lg:mb-12">
          <AnimateIn delay={0.05}>
            <p
              className="text-sm font-bold tracking-[0.2em] uppercase text-center mb-3"
              style={{ color: colors.primary[500] }}
            >
              Get to Know the Candidate
            </p>
          </AnimateIn>
          <TextAnimate as="h2" animation="fadeIn" by="word" delay={0.1} once className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-neutral-900">
            {siteData.about.heading}
          </TextAnimate>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateIn delay={0.2}>
            <div className="w-full overflow-hidden rounded-lg shadow-2xl">
              <img src={candidatePortrait} alt={`${siteData.candidate.fullName} in the community`} className="w-full aspect-[16/10] object-cover" />
            </div>
          </AnimateIn>

          <div>
            {siteData.about.bio.map((paragraph, index) => (
              <AnimateIn key={index} delay={0.3 + index * 0.1}>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">{paragraph}</p>
              </AnimateIn>
            ))}
            <AnimateIn delay={0.6}>
              <Link
                to="/about"
                className="block w-full md:inline-block md:w-auto text-center font-semibold px-8 py-3 rounded-md text-white transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.primary[500] }}
              >
                Learn More
              </Link>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
