
import { AdvisorProfile, Service, Specialization } from './types';

export const MOCK_ADVISOR: AdvisorProfile = {
  basicInfo: {
    firstName: 'Sarah',
    lastName: 'Johnson',
    title: 'Senior Financial Advisor',
    company: 'Capital Wealth Partners',
    location: 'San Francisco, California',
    linkedInUrl: 'https://linkedin.com/in/sarahjohnson',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
  },
  summary: "With over 15 years of experience in wealth management and financial planning, I specialize in helping high-net-worth individuals and families achieve their financial goals. My approach combines technical expertise with a deep understanding of my clients' unique needs and aspirations. I'm committed to providing personalized, comprehensive financial guidance that empowers my clients to make informed decisions about their financial future.",
  services: [
    { id: '1', name: 'Financial Planning' },
    { id: '2', name: 'Investment Management' },
    { id: '3', name: 'Tax Optimization' },
    { id: '4', name: 'Retirement Planning' },
    { id: '5', name: 'Estate Planning' },
  ],
  specializations: [
    { id: '1', name: 'High-Net-Worth Individuals' },
    { id: '2', name: 'Business Owners' },
    { id: '3', name: 'Corporate Executives' },
    { id: '4', name: 'Pre-retirees' },
  ],
  experience: [
    {
      id: '1',
      company: 'Capital Wealth Partners',
      title: 'Senior Financial Advisor',
      startDate: '2018-04-01',
      endDate: null,
      isPresent: true,
      description: 'Lead advisor for high-net-worth clients with complex financial needs. Manage a portfolio of over $200M in client assets. Develop comprehensive financial plans including investment strategies, tax optimization, and estate planning.',
    },
    {
      id: '2',
      company: 'Morgan Stanley',
      title: 'Financial Advisor',
      startDate: '2012-06-01',
      endDate: '2018-03-15',
      isPresent: false,
      description: 'Provided holistic financial planning services to clients. Built and managed a diverse client base of professionals and business owners. Conducted portfolio reviews and implemented investment strategies aligned with client goals.',
    },
    {
      id: '3',
      company: 'Goldman Sachs',
      title: 'Investment Analyst',
      startDate: '2008-09-01',
      endDate: '2012-05-31',
      isPresent: false,
      description: 'Analyzed investment opportunities across various asset classes. Prepared investment recommendations and portfolio analysis for advisors and clients. Contributed to the development of firm-wide investment strategies.',
    },
  ],
  education: [
    {
      id: '1',
      institution: 'Stanford University',
      degree: 'MBA',
      fieldOfStudy: 'Finance',
      year: 2008,
    },
    {
      id: '2',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Economics',
      year: 2004,
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'Certified Financial Planner (CFP)',
      issuer: 'CFP Board',
      year: 2010,
    },
    {
      id: '2',
      name: 'Chartered Financial Analyst (CFA)',
      issuer: 'CFA Institute',
      year: 2011,
    },
    {
      id: '3',
      name: 'Certified Private Wealth Advisor (CPWA)',
      issuer: 'Investments & Wealth Institute',
      year: 2015,
    }
  ],
  testimonials: [
    {
      id: '1',
      clientName: 'Michael Roberts',
      company: 'CEO, Tech Innovations Inc.',
      rating: 5,
      comment: "Sarah's expertise has been instrumental in optimizing my financial strategy. Her understanding of the unique challenges faced by executives in the tech industry is exceptional. She's not just a financial advisor, but a trusted partner in my financial journey.",
      date: '2022-11-15',
    },
    {
      id: '2',
      clientName: 'Jennifer Chen',
      company: 'Owner, Artisan Bakery Co.',
      rating: 5,
      comment: "As a business owner, I needed an advisor who understood both my personal and business financial needs. Sarah has exceeded my expectations on every level. Her strategic approach has helped me grow my business while also securing my family's financial future.",
      date: '2022-08-22',
    },
    {
      id: '3',
      clientName: 'David Williams',
      company: 'Retired CFO',
      rating: 5,
      comment: "Transitioning to retirement was a complex process for me. Sarah provided exceptional guidance, ensuring my portfolio was properly structured for this new phase of life. Her attention to detail and personalized service has made all the difference.",
      date: '2022-05-10',
    },
  ],
  customContent: "<p>I believe in a holistic approach to financial planning. My process begins with understanding your unique goals, values, and circumstances. From there, we work together to develop a customized strategy designed to help you achieve financial success, however you define it.</p><p>Throughout our relationship, I'll provide ongoing guidance and support, adjusting your plan as your life and the markets evolve. My commitment is to be your trusted financial partner for the long term.</p><p>I invite you to schedule a complimentary consultation to discuss how I can help you navigate your financial journey with confidence.</p>",
  contactInfo: {
    email: 'sarah.johnson@capitalwp.com',
    phone: '+1 (415) 555-7890',
    calendlyLink: 'https://calendly.com/sarahjohnson/30min',
  }
};

export const AVAILABLE_SERVICES: Service[] = [
  { id: '1', name: 'Financial Planning' },
  { id: '2', name: 'Investment Management' },
  { id: '3', name: 'Tax Optimization' },
  { id: '4', name: 'Retirement Planning' },
  { id: '5', name: 'Estate Planning' },
  { id: '6', name: 'Insurance Advisory' },
  { id: '7', name: 'Corporate Finance' },
  { id: '8', name: 'Mortgage Advisory' },
  { id: '9', name: 'Debt Management' },
  { id: '10', name: 'Education Planning' },
  { id: '11', name: 'Philanthropic Planning' },
  { id: '12', name: 'Business Succession Planning' },
];

export const AVAILABLE_SPECIALIZATIONS: Specialization[] = [
  { id: '1', name: 'High-Net-Worth Individuals' },
  { id: '2', name: 'Business Owners' },
  { id: '3', name: 'Corporate Executives' },
  { id: '4', name: 'Pre-retirees' },
  { id: '5', name: 'Retirees' },
  { id: '6', name: 'Medical Professionals' },
  { id: '7', name: 'Tech Professionals' },
  { id: '8', name: 'Legal Professionals' },
  { id: '9', name: 'Young Professionals' },
  { id: '10', name: 'Families' },
  { id: '11', name: 'Women' },
  { id: '12', name: 'Entrepreneurs' },
  { id: '13', name: 'Inheritance Recipients' },
  { id: '14', name: 'Divorcees' },
  { id: '15', name: 'Widows/Widowers' },
];
