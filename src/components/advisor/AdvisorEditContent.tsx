
import React from "react";
import { AdvisorProfile } from "@/lib/types";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry } from "@/lib/animation";
import BasicInfoSection from "@/components/advisor/BasicInfo";
import Summary from "@/components/advisor/Summary";
import Services from "@/components/advisor/Services";
import ExperienceSection from "@/components/advisor/Experience";
import EducationSection from "@/components/advisor/Education";
import CustomSection from "@/components/advisor/CustomSection";
import Contact from "@/components/advisor/Contact";

interface AdvisorEditContentProps {
  advisor: AdvisorProfile;
  onUpdateBasicInfo: (data: Partial<AdvisorProfile['basicInfo']>) => void;
  onUpdateSummary: (summary: string) => void;
  onUpdateServices: (services: AdvisorProfile['services']) => void;
  onUpdateSpecializations: (specializations: AdvisorProfile['specializations']) => void;
  onUpdateCustomContent: (content: string) => void;
  onUpdateContactInfo: (contactInfo: Partial<AdvisorProfile['contactInfo']>) => void;
  onImportFromLinkedIn: () => void;
  onUpdateEducation: (education: AdvisorProfile['education']) => void;
  onUpdateCertifications: (certifications: AdvisorProfile['certifications']) => void;
  onUpdateExperience: (experience: AdvisorProfile['experience']) => void;
}

export const AdvisorEditContent = ({
  advisor,
  onUpdateBasicInfo,
  onUpdateSummary,
  onUpdateServices,
  onUpdateSpecializations,
  onUpdateCustomContent,
  onUpdateContactInfo,
  onImportFromLinkedIn,
  onUpdateEducation,
  onUpdateCertifications,
  onUpdateExperience,
}: AdvisorEditContentProps) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
      <div className="space-y-10">
        <AnimatedEntry animation="fade-in">
          <BlurredCard className="p-6">
            <h2 className="text-xl font-medium mb-6">Basic Information</h2>
            <BasicInfoSection 
              data={advisor.basicInfo} 
              readOnly={false}
              onUpdate={onUpdateBasicInfo}
              onImportFromLinkedIn={onImportFromLinkedIn}
            />
          </BlurredCard>
        </AnimatedEntry>
        
        <AnimatedEntry animation="fade-in" delay={100}>
          <BlurredCard className="p-6">
            <h2 className="text-xl font-medium mb-6">Professional Summary</h2>
            <Summary 
              summary={advisor.summary} 
              readOnly={false}
              onUpdate={onUpdateSummary}
            />
          </BlurredCard>
        </AnimatedEntry>
        
        <AnimatedEntry animation="fade-in" delay={200}>
          <BlurredCard className="p-6">
            <h2 className="text-xl font-medium mb-6">Services & Specializations</h2>
            <Services 
              services={advisor.services} 
              specializations={advisor.specializations}
              readOnly={false}
              onUpdateServices={onUpdateServices}
              onUpdateSpecializations={onUpdateSpecializations}
            />
          </BlurredCard>
        </AnimatedEntry>
        
        <AnimatedEntry animation="fade-in" delay={300}>
          <BlurredCard className="p-6">
            <h2 className="text-xl font-medium mb-6">Work Experience</h2>
            <ExperienceSection 
              experiences={advisor.experience} 
              readOnly={false}
              onUpdate={onUpdateExperience}
            />
          </BlurredCard>
        </AnimatedEntry>
        
        <AnimatedEntry animation="fade-in" delay={400}>
          <BlurredCard className="p-6">
            <h2 className="text-xl font-medium mb-6">Education & Certifications</h2>
            <EducationSection 
              education={advisor.education} 
              certifications={advisor.certifications}
              readOnly={false}
              onUpdateEducation={onUpdateEducation}
              onUpdateCertifications={onUpdateCertifications}
            />
          </BlurredCard>
        </AnimatedEntry>
        
        <AnimatedEntry animation="fade-in" delay={500}>
          <BlurredCard className="p-6">
            <h2 className="text-xl font-medium mb-6">Custom Content</h2>
            <CustomSection 
              content={advisor.customContent} 
              readOnly={false}
              onUpdate={onUpdateCustomContent}
            />
          </BlurredCard>
        </AnimatedEntry>
        
        <AnimatedEntry animation="fade-in" delay={600}>
          <BlurredCard className="p-6">
            <h2 className="text-xl font-medium mb-6">Contact Information</h2>
            <Contact 
              contactInfo={advisor.contactInfo} 
              readOnly={false}
              onUpdate={onUpdateContactInfo}
            />
          </BlurredCard>
        </AnimatedEntry>
      </div>
    </div>
  );
};
