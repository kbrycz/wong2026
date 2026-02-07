/**
 * Site Data Configuration
 *
 * All candidate-specific content lives here.
 * To re-skin this template for a new candidate, update this file
 * and swap out the images in src/assets/.
 */

const siteData = {
  // ── Candidate ──────────────────────────────────────────────
  candidate: {
    firstName: 'Sally',
    lastName: 'Wong',
    fullName: 'Sally Wong',
  },

  // ── Campaign ───────────────────────────────────────────────
  campaign: {
    name: 'Sally Wong Campaign',
    slogan: 'A smarter, greener future for our city.',
    donateUrl: '#',
    pacName: 'Forward Together',
    pacDescription: "Forward Together is Sally Wong\u2019s official political action committee, backing leaders who champion innovation, sustainability, and inclusive growth. Our city\u2019s best days are ahead \u2014 and we\u2019re building the coalition to get us there.",
  },

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email: 'support@winadvocacy.com',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
    },
    privacyUrl: '#',
    termsUrl: '#',
  },

  // ── Donation ───────────────────────────────────────────────
  donation: {
    amounts: [10, 25, 50, 100, 250],
    disclaimer: 'Contributions are not deductible for federal income tax purposes.',
  },

  // ── Navigation ────────────────────────────────────────────
  navigation: {
    links: [
      { label: 'ABOUT', href: '/about' },
      { label: 'AGENDA', href: '/agenda' },
      { label: 'NEWS', href: '/news' },
      { label: 'CONTACT', href: '/contact' },
    ],
  },

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    headline: 'Our city\u2019s future starts now.',
    subheadline: 'Sally Wong is running for Mayor to bring bold ideas, green innovation, and real transparency to City Hall. Join the movement.',
    disclaimerText: 'By providing your contact information, you agree to receive campaign updates and messages from us. Message and data rates may apply. Reply STOP to opt out.',
  },

  // ── Image + Text Section ───────────────────────────────────
  imageText: {
    headline: 'Innovation. Sustainability. Community.',
    subheading: 'We believe smart policy and bold leadership can transform our city for the better.',
  },

  // ── About Section (Homepage) ────────────────────────────────
  about: {
    heading: 'About Sally',
    bio: [
      'Sally Wong grew up in a family of small-business owners who taught her the value of hard work, creativity, and giving back. After earning her degree in environmental engineering, she spent over a decade leading sustainability initiatives at one of the region\u2019s largest tech firms.',
      'Now Sally is bringing that same energy to City Hall \u2014 championing clean energy, smarter infrastructure, and economic opportunity for every neighborhood.',
    ],
  },

  // ── About Page (Full Page) ────────────────────────────────
  aboutPage: {
    sectionLabel: 'Meet Sally Wong',
    headline: 'Leading with Vision.',
    intro: [
      'Sally Wong is running for Mayor because she believes our city deserves leadership that looks forward, not backward. With a career spanning environmental engineering, technology, and community organizing, she brings a unique blend of expertise to the table.',
      'Sally led a citywide clean-energy retrofit program that cut municipal building emissions by 35 percent and saved taxpayers $4.8 million. She co-founded a neighborhood tech mentorship program that has trained over 1,200 young people in coding and digital skills.',
      'As Mayor, Sally will bring that same results-driven, community-first approach to every challenge our city faces \u2014 from affordable housing to transit to climate resilience.',
    ],
    bioLabel: 'Her Journey',
    bioHeading: 'Sally\u2019s Story',
    bio: [
      'Sally grew up helping her parents run their restaurant in the Eastside district. She saw firsthand how small businesses are the heartbeat of a neighborhood \u2014 and how the right investments can lift an entire community. A love of science led her to study environmental engineering, and a passion for people brought her back home.',
      'After a decade in the private sector driving sustainability strategy, Sally shifted to public service \u2014 serving on the City Planning Commission and launching the Green Neighborhoods Initiative. She\u2019s ready to take the next step and lead our city forward.',
    ],
    valuesLabel: 'Our Platform',
    valuesHeading: 'What Sally Stands For',
    valuesSubheading: 'Core principles guiding her campaign for Mayor.',
    values: [
      {
        title: 'Climate & Sustainability',
        description: 'Transitioning to 100% renewable energy for city operations, expanding green spaces, and building resilient infrastructure to protect our communities from extreme weather.',
      },
      {
        title: 'Tech-Driven Governance',
        description: 'Modernizing city services with open data, digital permitting, and smart-city technology that saves time, saves money, and increases transparency.',
      },
      {
        title: 'Inclusive Economic Growth',
        description: 'Investing in workforce development, supporting minority- and women-owned businesses, and making sure prosperity reaches every neighborhood in our city.',
      },
    ],
    ctaLabel: 'Get Involved',
    ctaHeading: 'Join Sally\u2019s Team',
    ctaText: 'Sally can\u2019t do this alone. It takes a community of engaged, forward-thinking residents to build the future we all deserve. Stand with Sally today.',
  },

  // ── Agenda Page ──────────────────────────────────────────────
  agenda: {
    sectionLabel: "Sally\u2019s Agenda",
    headline: 'Building a City That Works for Everyone.',
    intro: [
      'Sally Wong is running on a forward-looking agenda that tackles the challenges of today while investing in the opportunities of tomorrow. She believes government should be efficient, transparent, and accountable to the people it serves.',
      'From expanding affordable housing to modernizing public transit and accelerating our clean-energy transition, Sally has a concrete plan rooted in data, community input, and real-world results.',
      'Every proposal in this agenda was shaped by listening sessions, neighborhood town halls, and direct conversations with residents, business owners, educators, and public servants across the city.',
    ],
    prioritiesLabel: 'Key Priorities',
    prioritiesHeading: 'The Agenda for Tomorrow',
    prioritiesSubheading: 'Six bold initiatives Sally will champion on day one as Mayor.',
    priorities: [
      {
        number: '1',
        title: 'Accelerate Clean Energy',
        description: 'Transition all city buildings and fleet vehicles to renewable energy by 2032, expand rooftop solar incentives for homeowners, and create 500 green-energy jobs across the city.',
      },
      {
        number: '2',
        title: 'Affordable Housing for All',
        description: 'Build 3,000 new affordable housing units over four years, streamline zoning for mixed-use development, and establish a community land trust to keep housing costs stable.',
      },
      {
        number: '3',
        title: 'Modernize Public Transit',
        description: 'Expand bus rapid transit routes, launch a city bike-share program, and invest in electric buses to cut commute times and reduce emissions across the city.',
      },
      {
        number: '4',
        title: 'Bridge the Digital Divide',
        description: 'Provide free high-speed internet in underserved neighborhoods, expand digital literacy programs, and bring tech mentorship to every public library and community center.',
      },
      {
        number: '5',
        title: 'Strengthen Public Schools',
        description: 'Increase per-student funding, recruit and retain quality teachers with competitive pay, and expand STEM and arts programming in every school district.',
      },
      {
        number: '6',
        title: 'Open & Transparent Government',
        description: 'Launch a real-time city budget dashboard, publish all city contracts online, and hold monthly open town halls so residents always know how their money is being spent.',
      },
    ],
    commitmentsLabel: 'Core Commitments',
    commitmentsHeading: 'Promises You Can Count On',
    commitmentsSubheading: 'The foundational commitments that will guide every decision Sally makes as Mayor.',
    commitments: [
      {
        title: 'Data-Driven Decisions',
        description: 'Every major policy will be backed by data, community feedback, and measurable outcomes. Sally will publish annual progress reports so residents can hold City Hall accountable.',
      },
      {
        title: 'Equity in Every Policy',
        description: 'From transit routes to park investments, every city decision will be evaluated through an equity lens to ensure no neighborhood is left behind.',
      },
      {
        title: 'Fiscal Responsibility',
        description: 'Smart budgeting, waste reduction, and strategic investments \u2014 because taxpayers deserve to know every dollar is working as hard as they do.',
      },
    ],
    ctaLabel: 'Take Action',
    ctaHeading: 'Stand With Sally',
    ctaText: 'This agenda only becomes reality with your support. Join thousands of residents who are ready to build a smarter, greener, more connected city for everyone.',
  },

  // ── Signup Section ─────────────────────────────────────────
  signup: {
    heading: 'Sign Up to Join Us',
    subheading: 'Be part of the movement for a better tomorrow.',
    description: [
      'Join Sally\u2019s growing community of neighbors, innovators, and changemakers who believe our city\u2019s best days are ahead. Your voice matters \u2014 together we can build something extraordinary.',
      'Every contribution \u2014 no matter the size \u2014 goes directly toward grassroots outreach, community organizing, and the programs that move our city forward. Your donation keeps this campaign independent, people-powered, and laser-focused on delivering results for working families.',
    ],
  },

  // ── Video Section ─────────────────────────────────────────
  video: {
    headline: 'A Vision for',
    highlightText: 'Our Future.',
    description: 'Hear directly from Sally about why she\u2019s running for Mayor and what inspires her commitment to sustainability, innovation, and building a city where every resident can thrive.',
  },

  // ── News & Press ─────────────────────────────────────────
  news: {
    sectionHeading: 'News & Press',
    articles: [
      {
        slug: 'green-energy-plan',
        date: '2026-02-06',
        category: 'Press Release',
        image: 'image1',
        title: 'Sally Wong Unveils Ambitious Green Energy Plan for the City',
        excerpt: 'Mayoral candidate Sally Wong today released a comprehensive clean-energy roadmap that commits the city to 100% renewable energy for all municipal operations by 2032, creating hundreds of green jobs in the process.',
        body: [
          'Mayoral candidate Sally Wong today released a comprehensive clean-energy roadmap that commits the city to 100% renewable energy for all municipal operations by 2032, creating hundreds of green jobs in the process.',
          'The plan, titled "Power Forward," includes proposals to install solar panels on every city-owned building, transition the municipal vehicle fleet to electric, and partner with local utilities to expand rooftop solar incentives for homeowners and small businesses.',
          '"Climate change isn\u2019t something we can wait to address \u2014 it\u2019s here, it\u2019s now, and our city needs to lead," Wong said at a press conference at the Eastside Community Solar Farm. "This plan isn\u2019t just about the environment. It\u2019s about creating good-paying jobs, lowering energy costs for families, and making our city more resilient."',
          'The roadmap also calls for a new Green Jobs Training Center in partnership with the community college, a weatherization assistance program for low-income households, and a $30 million municipal green bond to finance infrastructure upgrades.',
          'Environmental advocates and business leaders praised the plan. "Sally Wong is showing what real climate leadership looks like at the local level," said Greenway Alliance director David Park. "This is bold, practical, and exactly what our city needs."',
          'Wong\u2019s campaign has made sustainability a centerpiece of her platform, and this rollout is the first in a series of detailed policy proposals she plans to release over the coming weeks.',
        ],
      },
      {
        slug: 'tech-mentorship-expansion',
        date: '2026-02-03',
        category: 'Campaign Update',
        image: 'image2',
        title: 'Wong Announces Major Expansion of Tech Mentorship Program',
        excerpt: 'Building on the success of her neighborhood coding initiative, Sally Wong announced plans to bring free digital skills training to every public library and community center in the city.',
        body: [
          'Building on the success of her neighborhood coding initiative, Sally Wong announced plans to bring free digital skills training to every public library and community center in the city.',
          'The expansion was announced at the Westside Library, where the original program launched three years ago and has since trained over 1,200 young people in coding, web design, and data analysis.',
          '"When I started this program, people said there wasn\u2019t demand for tech training in our neighborhoods," Wong told a crowd of students, parents, and volunteers. "They were wrong. These young people are brilliant, they\u2019re hungry to learn, and they just need the opportunity."',
          'The expanded program will add 15 new training sites, hire 40 part-time instructors from the local tech community, and offer evening and weekend sessions for working adults looking to upskill.',
          'Local tech executives have pledged pro-bono support. "Sally\u2019s mentorship program is closing the digital divide one student at a time," said Ava Chen, CTO of a local software company. "As Mayor, she\u2019ll bring this same hands-on approach to every challenge."',
          'Wong noted that the expansion would be funded through public-private partnerships and existing federal digital-equity grants, with no new tax burden on residents.',
        ],
      },
      {
        slug: 'affordable-housing-proposal',
        date: '2026-01-28',
        category: 'Press Release',
        image: 'image3',
        title: 'Wong Releases Comprehensive Affordable Housing Plan',
        excerpt: 'At a community forum in the Northgate neighborhood, Sally Wong outlined a housing plan that calls for 3,000 new affordable units, streamlined permitting, and a community land trust to keep costs stable for families.',
        body: [
          'At a community forum in the Northgate neighborhood, Sally Wong outlined a housing plan that calls for 3,000 new affordable units, streamlined permitting, and a community land trust to keep costs stable for families.',
          'The proposal centers on three pillars: increasing housing supply through mixed-use zoning reform, preserving existing affordable units with anti-displacement protections, and creating pathways to homeownership for first-time buyers.',
          '"Housing is the foundation of everything," Wong told an audience of over 250 residents. "If you can\u2019t afford to live in your city, nothing else \u2014 good schools, great parks, a strong economy \u2014 matters. We have to get this right."',
          'Key provisions include a dedicated affordable housing trust fund seeded with $20 million in redirected city revenues, fast-track permitting for projects that include at least 20% affordable units, and a new partnership with community development financial institutions to offer low-interest mortgages.',
          '"Sally\u2019s plan is one of the most comprehensive local housing proposals I\u2019ve seen," said housing policy researcher Dr. Marcus Lee. "The community land trust model in particular could be a game-changer for long-term affordability."',
          'Wong\u2019s housing agenda has been endorsed by the City Tenants Union, the Homebuilders Association, and three neighborhood development councils.',
        ],
      },
      {
        slug: 'transit-modernization',
        date: '2026-01-22',
        category: 'Policy',
        image: 'image4',
        title: 'Wong Champions Public Transit Modernization Initiative',
        excerpt: 'Sally Wong unveiled a transit plan that includes new bus rapid transit corridors, a citywide bike-share program, and a full transition to electric buses within five years.',
        body: [
          'Sally Wong unveiled a transit plan that includes new bus rapid transit corridors, a citywide bike-share program, and a full transition to electric buses within five years.',
          'Speaking at the downtown transit hub, Wong outlined a vision for a connected, low-emission transportation network that reduces commute times, improves air quality, and makes it easier for residents to get where they need to go.',
          '"Our transit system was designed for the last century," Wong said. "Riders are dealing with long wait times, unreliable service, and routes that don\u2019t match how people actually live and work today. We can do so much better."',
          'The plan calls for three new bus rapid transit lines connecting underserved neighborhoods to major employment centers, a 200-station bike-share network, real-time arrival apps powered by open transit data, and a pilot program for on-demand micro-transit in lower-density areas.',
          'Transportation equity advocates praised the proposal. "This plan centers the people who rely on transit the most," said Mobility Justice Coalition director Rosa Delgado. "Sally understands that good transit is a civil rights issue."',
          'Wong said the initiative would be funded through a combination of federal infrastructure grants, state transit funds, and a small reallocation of the city\u2019s existing transportation budget.',
        ],
      },
      {
        slug: 'small-business-saturday',
        date: '2026-01-15',
        category: 'Campaign Update',
        image: 'image5',
        title: 'Wong Hosts Small Business Roundtable, Pledges Support for Local Entrepreneurs',
        excerpt: 'Sally Wong met with dozens of small-business owners across the city to hear their challenges and share her plan to cut red tape, expand access to capital, and create a more supportive environment for local entrepreneurs.',
        body: [
          'Sally Wong met with dozens of small-business owners across the city to hear their challenges and share her plan to cut red tape, expand access to capital, and create a more supportive environment for local entrepreneurs.',
          'The roundtable, held at a family-owned bakery in the Arts District, brought together restaurant owners, retailers, freelancers, and service providers who shared stories of navigating complex permitting processes, rising rents, and limited access to financing.',
          '"Small businesses are the soul of our neighborhoods," Wong said. "My parents ran a restaurant for 25 years \u2014 I know what it takes to keep the doors open, and I know what city government can do to help instead of getting in the way."',
          'Wong\u2019s small-business platform includes streamlining the city permitting process to under 30 days, creating a $5 million micro-loan fund for startups and small businesses in underserved areas, and establishing a small-business ombudsman at City Hall to help entrepreneurs navigate regulations.',
          'Attendees responded enthusiastically. "Finally, someone who actually gets it," said bakery owner Maria Santos. "Sally didn\u2019t just come to talk \u2014 she came to listen, and her ideas are exactly what we need."',
          'Wong pledged to hold quarterly small-business roundtables as Mayor and to publish a yearly report card on the city\u2019s business climate.',
        ],
      },
      {
        slug: 'open-government-pledge',
        date: '2026-01-08',
        category: 'Policy',
        image: 'image6',
        title: 'Wong Signs Open Government Pledge, Promises Radical Transparency',
        excerpt: 'Sally Wong became the first mayoral candidate to sign the Civic Trust Open Government Pledge, committing to real-time budget transparency, open data portals, and monthly public town halls if elected.',
        body: [
          'Sally Wong became the first mayoral candidate to sign the Civic Trust Open Government Pledge, committing to real-time budget transparency, open data portals, and monthly public town halls if elected.',
          'The pledge, developed by a nonpartisan coalition of civic organizations, requires candidates to commit to publishing all city contracts and expenditures online, creating an open data portal for city operations, and holding at least 12 public town halls per year.',
          '"Transparency isn\u2019t optional \u2014 it\u2019s the foundation of trust between government and the people it serves," Wong said at the signing ceremony at City Hall. "If residents can\u2019t see where their tax dollars go, how can they hold their leaders accountable?"',
          'Wong went beyond the pledge\u2019s minimum requirements, also committing to a real-time city budget dashboard, annual performance audits of every city department, and a participatory budgeting program that lets residents directly allocate a portion of city spending.',
          '"Sally Wong is setting a new standard for local government transparency," said Civic Trust executive director Jonathan Reyes. "Every candidate in this race should follow her lead."',
          'Wong\u2019s emphasis on open government aligns with her broader tech-forward vision for city services. She has previously proposed modernizing city permitting, launching a 311 mobile app, and using data analytics to improve service delivery and reduce waste.',
        ],
      },
    ],
  },

  // ── Popup Modal ────────────────────────────────────────────
  popup: {
    headline: 'Join our movement and help build a smarter, greener city for everyone.',
    disclaimerText: 'By providing your contact information, you agree to receive updates and messages from us. Message and data rates may apply. Reply STOP to opt out. Your information will not be shared with third parties.',
  },

  // ── Meta / SEO ─────────────────────────────────────────────
  meta: {
    title: 'Sally Wong | A Smarter, Greener Future for Our City',
    description: "Join Sally Wong\u2019s campaign to create a smarter, greener, and more connected city. A lifelong innovator and community advocate, Sally is ready to lead our city into the future.",
    keywords: 'Sally Wong, campaign, mayor, sustainability, technology, community, innovation, elect Sally Wong',
  },
}

export default siteData
