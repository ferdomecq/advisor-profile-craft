import React, { useState } from "react";
import { MOCK_ADVISOR } from "@/lib/data";
import { AdvisorProfile } from "@/lib/types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry } from "@/lib/animation";
import { ArrowLeft, Linkedin, Save } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import BasicInfoSection from "@/components/advisor/BasicInfo";
import Summary from "@/components/advisor/Summary";
import Services from "@/components/advisor/Services";
import ExperienceSection from "@/components/advisor/Experience";
import EducationSection from "@/components/advisor/Education";
import CustomSection from "@/components/advisor/CustomSection";
import Contact from "@/components/advisor/Contact";

const AdvisorEdit = () => {
  const [advisor, setAdvisor] = useState<AdvisorProfile>(MOCK_ADVISOR);
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleImportFromLinkedIn = () => {
    toast.success("LinkedIn import", {
      description: "We're fetching your profile data from LinkedIn...",
    });
    
    // Simulate LinkedIn import with timeout
    setTimeout(() => {
      toast.success("LinkedIn import completed", {
        description: "Your profile has been updated with LinkedIn data!",
      });
      
      // Update with "imported" data
      setAdvisor(prev => ({
        ...prev,
        basicInfo: {
          ...prev.basicInfo,
          firstName: "John",
          lastName: "Advisor",
          title: "Financial Planning Expert",
          company: "Financial Advisors Inc.",
          location: "San Francisco, CA",
          linkedInUrl: "https://linkedin.com/in/johnadvisor",
        },
        summary: "Financial planning professional with over 10 years of experience helping clients achieve their financial goals. Specialized in retirement planning and investment strategies.",
      }));
    }, 2000);
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
  
  const handleUpdateServices = (services: typeof advisor.services) => {
    setAdvisor((prev) => ({
      ...prev,
      services,
    }));
  };
  
  const handleUpdateSpecializations = (specializations: typeof advisor.specializations) => {
    setAdvisor((prev) => ({
      ...prev,
      specializations,
    }));
  };
  
  const handleUpdateCustomContent = (content: string) => {
    setAdvisor((prev) => ({
      ...prev,
      customContent: content,
    }));
  };
  
  const handleSaveProfile = () => {
    toast.success("Profile saved", {
      description: "Your profile has been updated successfully!",
    });
    
    // In a real application, this would save to a backend
    // For now, we'll just navigate to the index page after a short delay
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  
  const handleBackToPublicView = () => {
    navigate("/");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Language switcher in top right corner */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher variant="icon" className="mr-2" />
      </div>
      
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={handleBackToPublicView}>
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-xl font-medium">Edit Advisor Profile</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2" onClick={handleImportFromLinkedIn}>
              <Linkedin size={18} />
              <span>Import from LinkedIn</span>
            </Button>
            <Button className="gap-2" onClick={handleSaveProfile}>
              <Save size={18} />
              <span>Save Profile</span>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
        <div className="space-y-10">
          <AnimatedEntry animation="fade-in">
            <BlurredCard className="p-6">
              <h2 className="text-xl font-medium mb-6">Basic Information</h2>
              <BasicInfoSection 
                data={advisor.basicInfo} 
                readOnly={false}
                onUpdate={handleUpdateBasicInfo}
                onImportFromLinkedIn={handleImportFromLinkedIn}
              />
            </BlurredCard>
          </AnimatedEntry>
          
          <AnimatedEntry animation="fade-in" delay={100}>
            <BlurredCard className="p-6">
              <h2 className="text-xl font-medium mb-6">Professional Summary</h2>
              <Summary 
                summary={advisor.summary} 
                readOnly={false}
                onUpdate={handleUpdateSummary}
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
                onUpdateServices={handleUpdateServices}
                onUpdateSpecializations={handleUpdateSpecializations}
              />
            </BlurredCard>
          </AnimatedEntry>
          
          <AnimatedEntry animation="fade-in" delay={300}>
            <BlurredCard className="p-6">
              <h2 className="text-xl font-medium mb-6">Work Experience</h2>
              <ExperienceSection 
                experiences={advisor.experience} 
                readOnly={false}
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
              />
            </BlurredCard>
          </AnimatedEntry>
          
          <AnimatedEntry animation="fade-in" delay={500}>
            <BlurredCard className="p-6">
              <h2 className="text-xl font-medium mb-6">Custom Content</h2>
              <CustomSection 
                content={advisor.customContent} 
                readOnly={false}
                onUpdate={handleUpdateCustomContent}
              />
            </BlurredCard>
          </AnimatedEntry>
          
          <AnimatedEntry animation="fade-in" delay={600}>
            <BlurredCard className="p-6">
              <h2 className="text-xl font-medium mb-6">Contact Information</h2>
              <Contact 
                contactInfo={advisor.contactInfo} 
                readOnly={false}
              />
            </BlurredCard>
          </AnimatedEntry>
        </div>
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

export default AdvisorEdit;
