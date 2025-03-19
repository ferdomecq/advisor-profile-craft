
export interface BasicInfo {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  location: string;
  linkedInUrl: string;
  profileImage: string;
}

export interface Service {
  id: string;
  name: string;
}

export interface Specialization {
  id: string;
  name: string;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string | null;
  isPresent: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  year: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  calendlyLink?: string;
}

export interface AdvisorProfile {
  basicInfo: BasicInfo;
  summary: string;
  services: Service[];
  specializations: Specialization[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  testimonials: Testimonial[];
  customContent: string;
  contactInfo: ContactInfo;
  overallRating?: number;
}
