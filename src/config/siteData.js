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
    firstName: 'Kyle',
    lastName: 'Stevens',
    fullName: 'Kyle Stevens',
  },

  // ── Campaign ───────────────────────────────────────────────
  campaign: {
    name: 'Kyle Stevens Campaign',
    slogan: 'Building a stronger city, together.',
    donateUrl: '#',
    pacName: 'Speak Up',
    pacDescription: "Speak Up is Kyle Stevens\u2019s official political action committee, supporting candidates who are committed to fighting for our community. With our neighborhoods, our families, and our future on the line, we stand with those who speak up for justice, opportunity, and accountable local government.",
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
    headline: 'Your city deserves better.',
    subheadline: 'Real leadership starts with listening. Join thousands of neighbors building a future worth believing in.',
    disclaimerText: 'By providing your contact information, you agree to receive campaign updates and messages from us. Message and data rates may apply. Reply STOP to opt out.',
  },

  // ── Image + Text Section ───────────────────────────────────
  imageText: {
    headline: 'Championing Solutions. Electing Change.',
    subheading: 'We believe in the power of diverse voices to drive meaningful change.',
  },

  // ── About Section (Homepage) ────────────────────────────────
  about: {
    heading: 'About Kyle',
    bio: [
      'Kyle Stevens was born and raised right here in our city. Economic hardship shaped his determination to fight for something better \u2014 and a community organizing program opened the door to public service.',
      'Today, Kyle continues that fight \u2014 standing up for working families and making sure every voice in our city is heard.',
    ],
  },

  // ── About Page (Full Page) ────────────────────────────────
  aboutPage: {
    sectionLabel: 'Meet Kyle Stevens',
    headline: 'A Voice for Our City.',
    intro: [
      'Kyle Stevens is running for Mayor because he believes city government should work for the people \u2014 not the other way around. Built on faith, family, and freedom, he\u2019s committed to defending the values that keep our neighborhoods strong.',
      'From a working-class household to a career in public service, Kyle has always stood for accountable government, personal responsibility, and the opportunity for every resident to succeed.',
      'As a city council member, Kyle led the effort to cut wasteful spending by over $2 million, fought to keep property taxes low, and championed transparency in every corner of local government. He knows what it takes to get results.',
    ],
    bioLabel: 'From Our Community',
    bioHeading: 'His Story',
    bio: [
      'Kyle grew up in a small neighborhood where hard work wasn\u2019t just a value \u2014 it was a way of life. Raised by parents who ran a local business, he learned early on the importance of fiscal responsibility and efficient government.',
      'After earning his degree in public policy, Kyle served on the city council where he cut wasteful spending and fought to keep government accountable. Now, he\u2019s ready to bring that same leadership to City Hall.',
    ],
    valuesLabel: 'Our Platform',
    valuesHeading: 'What Kyle Stands For',
    valuesSubheading: 'Core principles guiding his campaign for Mayor.',
    values: [
      {
        title: 'Fiscal Responsibility',
        description: 'Cutting wasteful city spending, balancing the budget, and ensuring every taxpayer dollar is spent wisely and transparently.',
      },
      {
        title: 'Public Safety',
        description: 'Investing in our police and fire departments, supporting first responders, and keeping our neighborhoods safe for every family.',
      },
      {
        title: 'Small Business Growth',
        description: 'Lowering local taxes and reducing burdensome regulations so entrepreneurs and small business owners can thrive and create jobs.',
      },
    ],
    ctaLabel: 'Get Involved',
    ctaHeading: 'Join the Fight',
    ctaText: 'Kyle can\u2019t do this alone. It takes a community of committed residents to elect a true leader to City Hall. Stand with Kyle today.',
  },

  // ── Agenda Page ──────────────────────────────────────────────
  agenda: {
    sectionLabel: "Kyle's Agenda",
    headline: 'Putting Our City First.',
    intro: [
      'Kyle Stevens is running on a bold agenda built around the principles that make our city great: accountable government, community investment, and fiscal responsibility. He believes City Hall has forgotten who it works for \u2014 and he intends to remind them.',
      'From improving public safety to cutting taxes and investing in infrastructure, Kyle has a concrete plan to fight for the hardworking families in our city.',
      'Every initiative in this agenda was shaped by conversations with real residents \u2014 small business owners, parents, first responders, and community leaders who know exactly what our city needs to thrive.',
    ],
    prioritiesLabel: 'Key Priorities',
    prioritiesHeading: 'The Agenda for Action',
    prioritiesSubheading: 'Six core initiatives Kyle will champion on day one as Mayor.',
    priorities: [
      {
        number: '1',
        title: 'Strengthen Public Safety',
        description: 'Hire more police officers and firefighters, invest in community policing programs, and give first responders the resources they need to keep our neighborhoods safe.',
      },
      {
        number: '2',
        title: 'Cut Taxes & Wasteful Spending',
        description: 'Lower property taxes for homeowners and small businesses while eliminating wasteful city spending and moving toward a balanced municipal budget.',
      },
      {
        number: '3',
        title: 'Fix Our Roads & Infrastructure',
        description: 'Launch a comprehensive plan to repair roads, bridges, and water systems \u2014 ensuring our city\u2019s infrastructure is safe, modern, and built to last.',
      },
      {
        number: '4',
        title: 'Support Local Businesses',
        description: 'Streamline permits, reduce red tape, and create incentives for small businesses to grow, hire locally, and invest in our neighborhoods.',
      },
      {
        number: '5',
        title: 'Invest in Parks & Recreation',
        description: 'Revitalize our parks, expand youth programs, and create safe community spaces where families can gather, play, and build lasting connections.',
      },
      {
        number: '6',
        title: 'Improve City Services',
        description: 'Modernize city operations with better technology, shorter wait times, and transparent communication so residents get the service they deserve.',
      },
    ],
    commitmentsLabel: 'Core Commitments',
    commitmentsHeading: 'Promises You Can Count On',
    commitmentsSubheading: 'The foundational commitments that will guide every decision Kyle makes as Mayor.',
    commitments: [
      {
        title: 'Fiscal Discipline',
        description: 'Every taxpayer dollar will be treated with respect. Kyle will fight to cut reckless spending, audit city departments, and deliver a balanced budget every year.',
      },
      {
        title: 'Transparent Government',
        description: 'Open books, public meetings, and honest communication \u2014 because residents deserve to know exactly how their city government operates and where their money goes.',
      },
      {
        title: 'Community First',
        description: 'From neighborhood associations to local businesses, Kyle will put the needs of residents above special interests and make sure every voice is heard at City Hall.',
      },
    ],
    ctaLabel: 'Take Action',
    ctaHeading: 'Stand With Kyle',
    ctaText: 'This agenda only becomes reality with your support. Join thousands of residents across the city who are ready to elect a true leader to City Hall and build the future our community deserves.',
  },

  // ── Signup Section ─────────────────────────────────────────
  signup: {
    heading: 'Sign Up to Join Us',
    subheading: 'Be part of the movement for change.',
    description: [
      'Join our community and help us build a stronger future together. Your voice matters, and together we can make a difference in our city and our neighborhoods.',
      'Every contribution \u2014 no matter the size \u2014 goes directly toward expanding voter outreach, supporting grassroots organizers, and funding the programs that strengthen our communities. Your donation helps keep this movement independent, people-powered, and focused on the issues that matter most to working families.',
    ],
  },

  // ── Video Section ─────────────────────────────────────────
  video: {
    headline: 'A Voice for',
    highlightText: 'Every Family.',
    description: 'Hear directly from Kyle about why he\'s running for Mayor and what drives his passion for fighting for working families, better city services, and a government that truly serves the people.',
  },

  // ── News & Press ─────────────────────────────────────────
  news: {
    sectionHeading: 'News & Press',
    articles: [
      {
        slug: 'bold-economic-agenda',
        date: '2026-02-06',
        category: 'Press Release',
        image: 'image1',
        title: 'Kyle Stevens Releases Bold Economic Agenda for Working Families',
        excerpt: 'Today, mayoral candidate Kyle Stevens unveiled a comprehensive economic plan focused on lowering costs for working families, investing in job training programs, and ensuring fair wages across the city.',
        body: [
          'Today, mayoral candidate Kyle Stevens unveiled a comprehensive economic plan focused on lowering costs for working families, investing in job training programs, and ensuring fair wages across the city.',
          'The plan, titled "Prosperity for All," includes proposals to cap childcare costs at 7% of household income, expand apprenticeship programs in partnership with local businesses, and raise the minimum wage to keep pace with the cost of living.',
          '"Working families in this city are stretched thin," Stevens said at a press conference in downtown Springfield. "They\'re choosing between groceries and rent, between healthcare and saving for their children\'s future. That\'s not the city I believe in, and it\'s not the future I\'m fighting for."',
          'The economic agenda also calls for targeted tax relief for small businesses with fewer than 50 employees, a new city infrastructure fund to finance roads, bridges, and broadband expansion, and increased funding for community colleges and vocational training centers.',
          'Independent economists have praised the plan for its pragmatic approach. "This is a serious policy proposal that addresses real challenges facing working families," said Dr. Maria Chen, an economist at the City Policy Institute. "The combination of direct cost relief and investment in workforce development could make a meaningful difference."',
          'Stevens\'s campaign has made economic opportunity a centerpiece of its platform, and this latest rollout is part of a series of detailed policy proposals the campaign plans to release in the coming weeks.',
        ],
      },
      {
        slug: 'education-coalition-endorsement',
        date: '2026-02-03',
        category: 'Press Release',
        image: 'image2',
        title: 'Stevens Campaign Announces Endorsement from City Education Coalition',
        excerpt: 'The citywide Education Coalition announced their endorsement of Kyle Stevens for Mayor, citing his longstanding commitment to public education funding, teacher support, and expanded access to early childhood programs.',
        body: [
          'The citywide Education Coalition announced their endorsement of Kyle Stevens for Mayor, citing his longstanding commitment to public education funding, teacher support, and expanded access to early childhood programs.',
          'The endorsement was announced at a ceremony at Lincoln Elementary School, where Stevens was joined by teachers, parents, and education advocates from across the city.',
          '"Kyle Stevens understands that investing in education is investing in our future," said Coalition President Dr. James Wright. "His track record on education issues \u2014 from fighting for teacher pay increases to championing universal pre-K \u2014 sets him apart in this race."',
          'Stevens, who served on the city council education committee for six years, has proposed a comprehensive education plan that includes increasing per-pupil funding by 15%, establishing a citywide teacher recruitment and retention program, and expanding free school meals to all public school students.',
          '"Every child in this city deserves access to a world-class education, regardless of their zip code," Stevens told the crowd. "As your Mayor, I will fight every day to make sure our schools have the resources they need and our teachers are treated with the respect they deserve."',
          'The Education Coalition represents over 5,000 educators, administrators, and support staff across the city and is considered one of the most influential endorsements in local politics.',
        ],
      },
      {
        slug: 'bipartisan-healthcare-action',
        date: '2026-01-28',
        category: 'Press Release',
        image: 'image3',
        title: 'Stevens Calls for Action on Healthcare Access',
        excerpt: 'At a town hall in Riverside County, Kyle Stevens outlined his plan to expand affordable healthcare coverage, protect patients with pre-existing conditions, and lower prescription drug costs for seniors.',
        body: [
          'At a town hall in Riverside County, Kyle Stevens outlined his plan to expand affordable healthcare coverage, protect patients with pre-existing conditions, and lower prescription drug costs for seniors.',
          'The healthcare proposal centers on three pillars: expanding community health center access, partnering with local hospitals to reduce emergency room wait times, and creating a city health services navigator program for seniors and low-income families.',
          '"Healthcare is not a partisan issue \u2014 it\'s a human issue," Stevens said to an audience of over 300 attendees. "I\'ve sat across the table from leaders on both sides, and I know we can find common ground to make healthcare more affordable and accessible for every family in this city."',
          'Stevens shared stories from constituents who have struggled with medical debt, insurance denials, and the rising cost of prescription medications. He was joined on stage by Dr. Patricia Holmes, a family physician who spoke about the challenges of providing care in underserved communities.',
          '"In my practice, I see patients every day who delay care because they can\'t afford it," Dr. Holmes said. "Kyle\'s plan would make a real difference for the families I serve."',
          'The town hall was part of a series of community listening sessions Stevens has been holding across the city, which he says have directly shaped his policy positions. The healthcare plan has received praise from both the City Medical Association and the Senior Citizens Advocacy Council.',
        ],
      },
      {
        slug: 'veterans-support-initiative',
        date: '2026-01-22',
        category: 'Campaign Update',
        image: 'image4',
        title: 'Stevens Unveils Comprehensive Veterans Support Initiative',
        excerpt: 'Kyle Stevens announced a sweeping plan to improve services for veterans, including expanded mental health resources, job placement programs, and streamlined access to city benefits.',
        body: [
          'Kyle Stevens announced a sweeping plan to improve services for veterans, including expanded mental health resources, job placement programs, and streamlined access to city benefits.',
          'Speaking at the American Legion Post 42 in Oakville, Stevens outlined a multi-pronged approach to addressing the challenges facing the city\'s veteran community. The plan includes establishing three new community clinics in underserved areas, creating a veteran-to-career transition program in partnership with local employers, and hiring additional benefits coordinators to reduce wait times.',
          '"Our veterans answered the call to serve this country, and we owe them more than gratitude \u2014 we owe them action," Stevens said. "Too many of our veterans are falling through the cracks, waiting months for benefits they\'ve earned, struggling to find good jobs, and not getting the mental health support they need."',
          'The initiative also proposes a dedicated veterans mental health hotline staffed 24/7, expanded eligibility for veteran housing assistance, and a new grant program for veteran-owned small businesses.',
          'Retired Army Sergeant Major David Torres, who introduced Stevens at the event, praised the proposal. "I\'ve seen too many of my brothers and sisters struggle when they come home. Kyle\'s plan addresses the real issues we face, and he\'s been listening to veterans from day one."',
          'Stevens noted that funding for the initiative would come from redirecting wasteful city spending and partnering with county and state agencies. The plan has been endorsed by three major veteran advocacy organizations.',
        ],
      },
      {
        slug: 'grassroots-fundraising-milestone',
        date: '2026-01-15',
        category: 'Campaign Update',
        image: 'image5',
        title: 'Stevens Campaign Reaches Grassroots Fundraising Milestone',
        excerpt: 'The Kyle Stevens for Mayor campaign announced it has surpassed 10,000 individual donors, with an average contribution of $27, demonstrating broad grassroots support across the city.',
        body: [
          'The Kyle Stevens for Mayor campaign announced it has surpassed 10,000 individual donors, with an average contribution of $27, demonstrating broad grassroots support across the city.',
          'The milestone, reached just four months after Stevens officially announced his candidacy, represents contributions from every district in the city. Campaign manager Lisa Park called the achievement "a testament to the movement Kyle is building."',
          '"This campaign is powered by working people \u2014 teachers, nurses, small business owners, retirees \u2014 who are chipping in what they can because they believe in Kyle\'s vision for this city," Park said. "While our opponents rely on PAC money and special interests, we\'re building something different."',
          'Stevens celebrated the milestone at a volunteer appreciation event at city center, where he thanked supporters and outlined his plans for the final months of the campaign. "Every dollar from every donor tells me the same thing: people are ready for change. They\'re ready for a Mayor who works for them, not for the lobbyists and developers."',
          'The campaign also announced it has recruited over 2,000 volunteers citywide and opened 8 field offices, with plans to open three more in the coming weeks. The grassroots infrastructure is seen as a key advantage heading into election season.',
          'Political analysts note that the small-dollar fundraising numbers are particularly impressive in a local race that has attracted significant attention. "These numbers suggest genuine enthusiasm at the grassroots level," said political scientist Dr. Rachel Kim. "That kind of support is difficult to manufacture and can be a powerful force in a competitive election."',
        ],
      },
      {
        slug: 'parks-green-spaces-plan',
        date: '2026-01-08',
        category: 'Policy',
        image: 'image6',
        title: 'Stevens Introduces Parks and Green Spaces Revitalization Plan',
        excerpt: 'Kyle Stevens released a detailed parks and recreation plan that aims to revitalize 50 city parks, create 200 green jobs, and ensure every neighborhood has access to quality green space within a 10-minute walk.',
        body: [
          'Kyle Stevens released a detailed parks and recreation plan that aims to revitalize 50 city parks, create 200 green jobs, and ensure every neighborhood has access to quality green space within a 10-minute walk.',
          'The plan, developed in consultation with environmental advocates, urban planners, and community leaders, takes a practical approach that emphasizes quality of life alongside environmental stewardship.',
          '"Our parks are the heart of our neighborhoods \u2014 they\'re where kids play, where families gather, and where communities come together," Stevens said at a newly renovated playground in Green Valley. "But too many of our parks have been neglected for years. I intend to change that."',
          'Key provisions of the plan include a $50 million parks infrastructure fund to upgrade playgrounds, trails, and athletic facilities; community garden programs in every district; workforce development programs for youth in parks maintenance and urban forestry; and grants for neighborhood beautification projects.',
          'The plan also calls for planting 10,000 new trees citywide, installing solar-powered lighting in all major parks, and creating a network of connected bike and walking trails across the city.',
          'Environmental groups praised the proposal, while community leaders noted its inclusive approach. "This plan shows that livability and fiscal responsibility can go hand in hand," said the local Sierra Club chapter director, Maria Santos. "Kyle Stevens is leading with both vision and pragmatism."',
        ],
      },
    ],
  },

  // ── Popup Modal ────────────────────────────────────────────
  popup: {
    headline: 'Join our movement and help build a stronger city together.',
    disclaimerText: 'By providing your contact information, you agree to receive updates and messages from us. Message and data rates may apply. Reply STOP to opt out. Your information will not be shared with third parties.',
  },

  // ── Meta / SEO ─────────────────────────────────────────────
  meta: {
    title: 'Kyle Stevens | Building a Stronger City, Together',
    description: "Join Kyle Stevens\u2019s campaign to build a stronger city. Born and raised right here, Kyle is committed to representing working families and delivering real results as Mayor.",
    keywords: 'Kyle Stevens, campaign, mayor, community, working families, public service, elect Kyle Stevens',
  },
}

export default siteData
