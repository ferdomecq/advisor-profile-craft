
import { AdvisorProfile } from "@/lib/types";

// Mock data for the advisor marketplace
export const advisorData: AdvisorProfile[] = [
  {
    basicInfo: {
      firstName: "John",
      lastName: "Smith",
      title: "Senior Financial Advisor",
      company: "Goldman Sachs",
      location: "New York, NY",
      linkedInUrl: "https://linkedin.com/in/johnsmith",
      profileImage: "/placeholder.svg"
    },
    summary: "With over 15 years of experience in financial planning and wealth management, I specialize in helping high-net-worth individuals and families achieve their long-term financial goals.",
    services: [
      { id: "1", name: "Financial Planning" },
      { id: "2", name: "Retirement Planning" },
      { id: "3", name: "Estate Planning" }
    ],
    specializations: [
      { id: "1", name: "Wealth Management" },
      { id: "2", name: "Tax Optimization" },
      { id: "3", name: "Estate Planning" }
    ],
    experience: [
      {
        id: "1",
        company: "Goldman Sachs",
        title: "Senior Financial Advisor",
        startDate: "2015-01",
        endDate: null,
        isPresent: true,
        description: "Provide comprehensive financial planning services to high-net-worth clients."
      },
      {
        id: "2",
        company: "Morgan Stanley",
        title: "Financial Advisor",
        startDate: "2010-03",
        endDate: "2014-12",
        isPresent: false,
        description: "Managed client portfolios and provided investment advice."
      }
    ],
    education: [
      {
        id: "1",
        institution: "Harvard University",
        degree: "MBA",
        fieldOfStudy: "Finance",
        year: 2008
      }
    ],
    certifications: [
      {
        id: "1",
        name: "Certified Financial Planner (CFP)",
        issuer: "CFP Board",
        year: 2009
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Michael Johnson",
        company: "Johnson Enterprises",
        rating: 5,
        comment: "John has been instrumental in helping me plan for retirement. His advice is always sound and well-researched.",
        date: "2023-08-15"
      },
      {
        id: "2",
        clientName: "Sarah Williams",
        rating: 4.5,
        comment: "Excellent service and deep knowledge of tax optimization strategies.",
        date: "2023-09-22"
      }
    ],
    customContent: "I believe in building long-term relationships with my clients based on trust and transparency.",
    contactInfo: {
      email: "john.smith@goldmansachs.com",
      phone: "+1 (212) 555-1234",
      calendlyLink: "https://calendly.com/johnsmith"
    },
    overallRating: 4.8
  },
  {
    basicInfo: {
      firstName: "Maria",
      lastName: "Garcia",
      title: "Investment Advisor",
      company: "Vanguard",
      location: "Philadelphia, PA",
      linkedInUrl: "https://linkedin.com/in/mariagarcia",
      profileImage: "/placeholder.svg"
    },
    summary: "I help clients navigate complex investment decisions and build diversified portfolios aligned with their risk tolerance and financial goals.",
    services: [
      { id: "1", name: "Investment Management" },
      { id: "2", name: "Portfolio Analysis" },
      { id: "3", name: "Risk Assessment" }
    ],
    specializations: [
      { id: "1", name: "ETF Investing" },
      { id: "2", name: "Passive Income Strategies" },
      { id: "3", name: "Sustainable Investing" }
    ],
    experience: [
      {
        id: "1",
        company: "Vanguard",
        title: "Investment Advisor",
        startDate: "2017-06",
        endDate: null,
        isPresent: true,
        description: "Provide investment advice and portfolio management services to clients."
      },
      {
        id: "2",
        company: "Fidelity",
        title: "Associate Advisor",
        startDate: "2014-05",
        endDate: "2017-05",
        isPresent: false,
        description: "Assisted senior advisors with client portfolio management and research."
      }
    ],
    education: [
      {
        id: "1",
        institution: "University of Pennsylvania",
        degree: "BS",
        fieldOfStudy: "Finance",
        year: 2013
      }
    ],
    certifications: [
      {
        id: "1",
        name: "Chartered Financial Analyst (CFA)",
        issuer: "CFA Institute",
        year: 2016
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "David Lee",
        rating: 4,
        comment: "Maria has helped me diversify my portfolio and improve my returns significantly.",
        date: "2023-07-10"
      }
    ],
    customContent: "I'm passionate about helping clients understand the power of low-cost index investing.",
    contactInfo: {
      email: "maria.garcia@vanguard.com",
      phone: "+1 (215) 555-6789",
      calendlyLink: "https://calendly.com/mariagarcia"
    },
    overallRating: 4.0
  },
  {
    basicInfo: {
      firstName: "Robert",
      lastName: "Chen",
      title: "Retirement Planning Specialist",
      company: "Charles Schwab",
      location: "San Francisco, CA",
      linkedInUrl: "https://linkedin.com/in/robertchen",
      profileImage: "/placeholder.svg"
    },
    summary: "I specialize in helping clients prepare for a comfortable retirement through comprehensive planning, tax-efficient investment strategies, and income distribution planning.",
    services: [
      { id: "1", name: "Retirement Planning" },
      { id: "2", name: "Social Security Optimization" },
      { id: "3", name: "Income Distribution Strategies" }
    ],
    specializations: [
      { id: "1", name: "Retirement Planning" },
      { id: "2", name: "Tax-Efficient Withdrawals" },
      { id: "3", name: "IRA/401(k) Rollovers" }
    ],
    experience: [
      {
        id: "1",
        company: "Charles Schwab",
        title: "Retirement Planning Specialist",
        startDate: "2016-03",
        endDate: null,
        isPresent: true,
        description: "Provide specialized retirement planning advice to clients approaching or in retirement."
      },
      {
        id: "2",
        company: "Merrill Lynch",
        title: "Financial Advisor",
        startDate: "2011-09",
        endDate: "2016-02",
        isPresent: false,
        description: "Advised clients on retirement planning and investment strategies."
      }
    ],
    education: [
      {
        id: "1",
        institution: "University of California, Berkeley",
        degree: "BS",
        fieldOfStudy: "Business Administration",
        year: 2010
      }
    ],
    certifications: [
      {
        id: "1",
        name: "Retirement Income Certified Professional (RICP)",
        issuer: "The American College",
        year: 2015
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Barbara Wilson",
        rating: 5,
        comment: "Robert helped me transition into retirement smoothly. His knowledge of tax-efficient withdrawal strategies has saved me thousands.",
        date: "2023-05-12"
      },
      {
        id: "2",
        clientName: "Thomas Brown",
        company: "Retired Teacher",
        rating: 5,
        comment: "Exceptional service and retirement planning expertise. Highly recommended!",
        date: "2023-08-03"
      }
    ],
    customContent: "I believe that retirement planning should start early and be adjusted regularly as life circumstances change.",
    contactInfo: {
      email: "robert.chen@schwab.com",
      phone: "+1 (415) 555-2468",
      calendlyLink: "https://calendly.com/robertchen"
    },
    overallRating: 5.0
  },
  {
    basicInfo: {
      firstName: "Jennifer",
      lastName: "Patel",
      title: "Estate Planning Advisor",
      company: "UBS",
      location: "Chicago, IL",
      linkedInUrl: "https://linkedin.com/in/jenniferpatel",
      profileImage: "/placeholder.svg"
    },
    summary: "I help clients create comprehensive estate plans that preserve and transfer wealth efficiently while minimizing tax implications.",
    services: [
      { id: "1", name: "Estate Planning" },
      { id: "2", name: "Trust Services" },
      { id: "3", name: "Legacy Planning" }
    ],
    specializations: [
      { id: "1", name: "Estate Planning" },
      { id: "2", name: "Trust Administration" },
      { id: "3", name: "Charitable Giving" }
    ],
    experience: [
      {
        id: "1",
        company: "UBS",
        title: "Estate Planning Advisor",
        startDate: "2018-07",
        endDate: null,
        isPresent: true,
        description: "Develop comprehensive estate plans for high-net-worth clients."
      },
      {
        id: "2",
        company: "Northern Trust",
        title: "Trust Officer",
        startDate: "2013-01",
        endDate: "2018-06",
        isPresent: false,
        description: "Managed trusts and provided estate planning services."
      }
    ],
    education: [
      {
        id: "1",
        institution: "Northwestern University",
        degree: "JD",
        fieldOfStudy: "Law",
        year: 2012
      },
      {
        id: "2",
        institution: "University of Chicago",
        degree: "BS",
        fieldOfStudy: "Finance",
        year: 2009
      }
    ],
    certifications: [
      {
        id: "1",
        name: "Certified Trust and Financial Advisor (CTFA)",
        issuer: "American Bankers Association",
        year: 2015
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Richard Taylor",
        company: "Taylor Industries",
        rating: 4.5,
        comment: "Jennifer's expertise in estate planning has given our family peace of mind about the future.",
        date: "2023-06-28"
      }
    ],
    customContent: "I work closely with clients' attorneys and tax professionals to ensure a coordinated approach to estate planning.",
    contactInfo: {
      email: "jennifer.patel@ubs.com",
      phone: "+1 (312) 555-3698",
      calendlyLink: "https://calendly.com/jenniferpatel"
    },
    overallRating: 4.5
  },
  {
    basicInfo: {
      firstName: "Marcus",
      lastName: "Williams",
      title: "Tax Planning Specialist",
      company: "Deloitte",
      location: "Boston, MA",
      linkedInUrl: "https://linkedin.com/in/marcuswilliams",
      profileImage: "/placeholder.svg"
    },
    summary: "I specialize in tax-efficient investment strategies and comprehensive tax planning for individuals and small business owners.",
    services: [
      { id: "1", name: "Tax Planning" },
      { id: "2", name: "Tax-Loss Harvesting" },
      { id: "3", name: "Small Business Tax Strategies" }
    ],
    specializations: [
      { id: "1", name: "Tax Optimization" },
      { id: "2", name: "Small Business Tax" },
      { id: "3", name: "Tax-Efficient Investing" }
    ],
    experience: [
      {
        id: "1",
        company: "Deloitte",
        title: "Tax Planning Specialist",
        startDate: "2019-04",
        endDate: null,
        isPresent: true,
        description: "Provide tax planning services to high-net-worth individuals and small business owners."
      },
      {
        id: "2",
        company: "KPMG",
        title: "Tax Advisor",
        startDate: "2015-09",
        endDate: "2019-03",
        isPresent: false,
        description: "Advised clients on tax-efficient investment and business strategies."
      }
    ],
    education: [
      {
        id: "1",
        institution: "Boston University",
        degree: "MS",
        fieldOfStudy: "Taxation",
        year: 2015
      },
      {
        id: "2",
        institution: "Boston College",
        degree: "BS",
        fieldOfStudy: "Accounting",
        year: 2013
      }
    ],
    certifications: [
      {
        id: "1",
        name: "Certified Public Accountant (CPA)",
        issuer: "AICPA",
        year: 2014
      },
      {
        id: "2",
        name: "Enrolled Agent (EA)",
        issuer: "IRS",
        year: 2016
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Lisa Chen",
        company: "Chen Consulting LLC",
        rating: 5,
        comment: "Marcus has saved my business thousands in taxes through strategic planning. Highly recommended!",
        date: "2023-04-18"
      }
    ],
    customContent: "I believe that effective tax planning is a year-round activity, not just a tax season concern.",
    contactInfo: {
      email: "marcus.williams@deloitte.com",
      phone: "+1 (617) 555-9876",
      calendlyLink: "https://calendly.com/marcuswilliams"
    },
    overallRating: 4.9
  },
  {
    basicInfo: {
      firstName: "Sophia",
      lastName: "Rodriguez",
      title: "Financial Coach",
      company: "Rodriguez Financial Coaching",
      location: "Miami, FL",
      linkedInUrl: "https://linkedin.com/in/sophiarodriguez",
      profileImage: "/placeholder.svg"
    },
    summary: "I help young professionals develop sound financial habits, eliminate debt, and build wealth through personalized coaching and education.",
    services: [
      { id: "1", name: "Financial Coaching" },
      { id: "2", name: "Debt Elimination" },
      { id: "3", name: "Budgeting" }
    ],
    specializations: [
      { id: "1", name: "Debt Management" },
      { id: "2", name: "Budgeting" },
      { id: "3", name: "First-Time Investors" }
    ],
    experience: [
      {
        id: "1",
        company: "Rodriguez Financial Coaching",
        title: "Financial Coach",
        startDate: "2020-01",
        endDate: null,
        isPresent: true,
        description: "Provide one-on-one financial coaching to help clients develop healthy financial habits."
      },
      {
        id: "2",
        company: "Bank of America",
        title: "Personal Banker",
        startDate: "2016-05",
        endDate: "2019-12",
        isPresent: false,
        description: "Helped clients with personal banking needs and basic financial education."
      }
    ],
    education: [
      {
        id: "1",
        institution: "University of Miami",
        degree: "BBA",
        fieldOfStudy: "Finance",
        year: 2016
      }
    ],
    certifications: [
      {
        id: "1",
        name: "Accredited Financial Counselor (AFC)",
        issuer: "AFCPE",
        year: 2019
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Carlos Mendez",
        rating: 5,
        comment: "Sophia helped me pay off $45,000 in student loans in just 2 years through her structured approach.",
        date: "2023-03-05"
      },
      {
        id: "2",
        clientName: "Emily Turner",
        rating: 4,
        comment: "Great at explaining complex financial concepts in simple terms. Very approachable.",
        date: "2023-07-19"
      }
    ],
    customContent: "I'm passionate about helping people break the cycle of debt and build a foundation for lasting financial freedom.",
    contactInfo: {
      email: "sophia@rodriguezfinancialcoaching.com",
      phone: "+1 (305) 555-7412",
      calendlyLink: "https://calendly.com/sophiarodriguez"
    },
    overallRating: 4.2
  },
  {
    basicInfo: {
      firstName: "William",
      lastName: "Jackson",
      title: "Wealth Management Advisor",
      company: "Edward Jones",
      location: "Denver, CO",
      linkedInUrl: "https://linkedin.com/in/williamjackson",
      profileImage: "/placeholder.svg"
    },
    summary: "I provide comprehensive wealth management services focused on long-term growth, capital preservation, and intergenerational wealth transfer.",
    services: [
      { id: "1", name: "Wealth Management" },
      { id: "2", name: "Asset Allocation" },
      { id: "3", name: "Family Office Services" }
    ],
    specializations: [
      { id: "1", name: "Wealth Management" },
      { id: "2", name: "Family Wealth" },
      { id: "3", name: "Asset Protection" }
    ],
    experience: [
      {
        id: "1",
        company: "Edward Jones",
        title: "Wealth Management Advisor",
        startDate: "2014-08",
        endDate: null,
        isPresent: true,
        description: "Provide comprehensive wealth management services to high-net-worth families."
      },
      {
        id: "2",
        company: "Wells Fargo",
        title: "Senior Financial Advisor",
        startDate: "2008-06",
        endDate: "2014-07",
        isPresent: false,
        description: "Managed client portfolios and provided comprehensive financial planning."
      }
    ],
    education: [
      {
        id: "1",
        institution: "University of Colorado",
        degree: "MBA",
        fieldOfStudy: "Finance",
        year: 2008
      },
      {
        id: "2",
        institution: "Colorado State University",
        degree: "BS",
        fieldOfStudy: "Economics",
        year: 2006
      }
    ],
    certifications: [
      {
        id: "1",
        name: "Certified Private Wealth Advisor (CPWA)",
        issuer: "Investments & Wealth Institute",
        year: 2016
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Robert Miller",
        company: "Miller Family Office",
        rating: 5,
        comment: "William has expertly managed our family's wealth for years. His strategic approach to asset allocation has been invaluable.",
        date: "2023-02-14"
      }
    ],
    customContent: "I take a holistic approach to wealth management, considering all aspects of a client's financial life and future goals.",
    contactInfo: {
      email: "william.jackson@edwardjones.com",
      phone: "+1 (303) 555-8529",
      calendlyLink: "https://calendly.com/williamjackson"
    },
    overallRating: 4.7
  },
  {
    basicInfo: {
      firstName: "Emma",
      lastName: "Thompson",
      title: "Sustainable Investing Advisor",
      company: "Green Portfolio Advisors",
      location: "Seattle, WA",
      linkedInUrl: "https://linkedin.com/in/emmathompson",
      profileImage: "/placeholder.svg"
    },
    summary: "I help clients align their investments with their values through sustainable, ESG-focused investment strategies without sacrificing returns.",
    services: [
      { id: "1", name: "ESG Investing" },
      { id: "2", name: "Impact Investing" },
      { id: "3", name: "Sustainable Portfolio Design" }
    ],
    specializations: [
      { id: "1", name: "Sustainable Investing" },
      { id: "2", name: "ESG Integration" },
      { id: "3", name: "Clean Energy Investments" }
    ],
    experience: [
      {
        id: "1",
        company: "Green Portfolio Advisors",
        title: "Sustainable Investing Advisor",
        startDate: "2019-03",
        endDate: null,
        isPresent: true,
        description: "Develop and implement sustainable investment strategies for environmentally conscious clients."
      },
      {
        id: "2",
        company: "BlackRock",
        title: "ESG Investment Analyst",
        startDate: "2015-08",
        endDate: "2019-02",
        isPresent: false,
        description: "Analyzed companies based on ESG criteria and contributed to sustainable fund management."
      }
    ],
    education: [
      {
        id: "1",
        institution: "University of Washington",
        degree: "MS",
        fieldOfStudy: "Environmental Science",
        year: 2014
      },
      {
        id: "2",
        institution: "Stanford University",
        degree: "BS",
        fieldOfStudy: "Finance",
        year: 2012
      }
    ],
    certifications: [
      {
        id: "1",
        name: "Chartered SRI Counselor (CSRIC)",
        issuer: "College for Financial Planning",
        year: 2020
      }
    ],
    testimonials: [
      {
        id: "1",
        clientName: "Andrew Phillips",
        rating: 4.5,
        comment: "Emma has helped me build a portfolio that aligns with my environmental values while still delivering solid returns.",
        date: "2023-05-30"
      }
    ],
    customContent: "I believe that sustainable investing is not just good for the planet—it's good for long-term financial performance as well.",
    contactInfo: {
      email: "emma@greenportfolioadvisors.com",
      phone: "+1 (206) 555-3614",
      calendlyLink: "https://calendly.com/emmathompson"
    },
    overallRating: 4.3
  }
];
