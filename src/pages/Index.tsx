
import React, { useState } from "react";
import { MOCK_ADVISOR } from "@/lib/data";
import { AdvisorProfile } from "@/lib/types";
import { toast } from "sonner";
import { BlurredCard } from "@/components/ui/BlurredCard";
import ProfileHeader from "@/components/advisor/ProfileHeader";
import ProfileTabs from "@/components/advisor/ProfileTabs";
import BasicInfoSection from "@/components/advisor/BasicInfo";
import Summary from "@/components/advisor/Summary";
import Services from "@/components/advisor/Services";
import ExperienceSection from "@/components/advisor/Experience";
import EducationSection from "@/components/advisor/Education";
import Testimonials from "@/components/advisor/Testimonials";
import CustomSection from "@/components/advisor/CustomSection";
import Contact from "@/components/advisor/Contact";
import { Briefcase, Award, GraduationCap, MessageSquareQuote, User, FileText, Phone, Star } from "lucide-react";
import { AdvisorRatingCard } from "@/components/advisor/Rating";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const Index = () => {
  const [advisor, setAdvisor] = useState<AdvisorProfile>(MOCK_ADVISOR);
  const [isEditing, setIsEditing] = useState(false);
  const { t } = useLanguage();
  
  const handleImportFromLinkedIn = () => {
    toast.success("LinkedIn import feature", {
      description: "This feature will import data from LinkedIn when connected.",
    });
  };
  
  const handleUpdateBasicInfo = (data: Partial<typeof advisor.basicInfo>) => {
    setAdvisor((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        ...data,
      },
    }));
  };
  
  const handleUpdateSummary = (summary: string) => {
    setAdvisor((prev) => ({
      ...prev,
      summary,
    }));
  };
  
  // Calculate review count from testimonials
  const reviewCount = advisor.testimonials.length;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Language switcher in top right corner */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      {/* Main Content with beautiful subtle gradient background */}
      <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
        <ProfileHeader 
          data={advisor.basicInfo} 
          rating={advisor.overallRating}
          onImportFromLinkedIn={handleImportFromLinkedIn}
        />
        
        <ProfileTabs
          tabs={[
            {
              id: "about",
              label: (
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{t('tabs.about')}</span>
                </div>
              ),
              content: (
                <div className="space-y-10">
                  <Summary 
                    summary={advisor.summary} 
                    readOnly={!isEditing}
                    onUpdate={handleUpdateSummary}
                  />
                  
                  <Services 
                    services={advisor.services} 
                    specializations={advisor.specializations}
                    readOnly={!isEditing}
                  />
                </div>
              ),
            },
            {
              id: "rating",
              label: (
                <div className="flex items-center space-x-2">
                  <Star size={16} />
                  <span>{t('tabs.rating')}</span>
                </div>
              ),
              content: (
                <AdvisorRatingCard 
                  rating={advisor.overallRating || 0} 
                  reviewCount={reviewCount}
                  readOnly={!isEditing} 
                />
              ),
            },
            {
              id: "experience",
              label: (
                <div className="flex items-center space-x-2">
                  <Briefcase size={16} />
                  <span>{t('tabs.experience')}</span>
                </div>
              ),
              content: (
                <ExperienceSection 
                  experiences={advisor.experience} 
                  readOnly={!isEditing}
                />
              ),
            },
            {
              id: "education",
              label: (
                <div className="flex items-center space-x-2">
                  <GraduationCap size={16} />
                  <span>{t('tabs.education')}</span>
                </div>
              ),
              content: (
                <EducationSection 
                  education={advisor.education} 
                  certifications={advisor.certifications}
                  readOnly={!isEditing}
                />
              ),
            },
            {
              id: "testimonials",
              label: (
                <div className="flex items-center space-x-2">
                  <MessageSquareQuote size={16} />
                  <span>{t('tabs.testimonials')}</span>
                </div>
              ),
              content: (
                <Testimonials 
                  testimonials={advisor.testimonials} 
                  readOnly={!isEditing}
                />
              ),
            },
            {
              id: "custom",
              label: (
                <div className="flex items-center space-x-2">
                  <FileText size={16} />
                  <span>{t('tabs.custom')}</span>
                </div>
              ),
              content: (
                <CustomSection 
                  content={advisor.customContent} 
                  readOnly={!isEditing}
                />
              ),
            },
            {
              id: "contact",
              label: (
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>{t('tabs.contact')}</span>
                </div>
              ),
              content: (
                <Contact 
                  contactInfo={advisor.contactInfo} 
                  readOnly={!isEditing}
                />
              ),
            },
          ]}
        />
      </div>
      
      {/* Footer */}
      <footer className="border-t border-gray-100 mt-20 py-10 text-center text-sm text-gray-500">
        <div className="max-w-5xl mx-auto px-4">
          <p>{t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
