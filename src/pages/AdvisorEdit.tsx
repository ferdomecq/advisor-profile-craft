
import React, { useState } from "react";
import { MOCK_ADVISOR } from "@/lib/data";
import { AdvisorProfile } from "@/lib/types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { AdvisorEditHeader } from "@/components/advisor/AdvisorEditHeader";
import { AdvisorEditContent } from "@/components/advisor/AdvisorEditContent";
import { AdvisorEditFooter } from "@/components/advisor/AdvisorEditFooter";

const AdvisorEdit = () => {
  const [advisor, setAdvisor] = useState<AdvisorProfile>(MOCK_ADVISOR);
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

  const handleUpdateContactInfo = (contactInfo: Partial<typeof advisor.contactInfo>) => {
    setAdvisor((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        ...contactInfo,
      },
    }));
    
    if (contactInfo.calendlyLink) {
      toast.success("Calendar link updated", {
        description: "Your scheduling link has been added. Clients can now book appointments with you.",
      });
    }
    
    if (contactInfo.advisorName) {
      toast.success("Chat name updated", {
        description: "Your name will be displayed in chat conversations with clients.",
      });
    }
  };
  
  const handleUpdateExperience = (experience: typeof advisor.experience) => {
    setAdvisor((prev) => ({
      ...prev,
      experience,
    }));
    
    toast.success("Experience updated", {
      description: "Your work experience has been updated successfully.",
    });
  };
  
  const handleUpdateEducation = (education: typeof advisor.education) => {
    setAdvisor((prev) => ({
      ...prev,
      education,
    }));
    
    toast.success("Education updated", {
      description: "Your education information has been updated successfully.",
    });
  };
  
  const handleUpdateCertifications = (certifications: typeof advisor.certifications) => {
    setAdvisor((prev) => ({
      ...prev,
      certifications,
    }));
    
    toast.success("Certifications updated", {
      description: "Your certifications have been updated successfully.",
    });
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
      <AdvisorEditHeader 
        onBackToPublicView={handleBackToPublicView}
        onImportFromLinkedIn={handleImportFromLinkedIn}
        onSaveProfile={handleSaveProfile}
      />
      
      <AdvisorEditContent
        advisor={advisor}
        onUpdateBasicInfo={handleUpdateBasicInfo}
        onUpdateSummary={handleUpdateSummary}
        onUpdateServices={handleUpdateServices}
        onUpdateSpecializations={handleUpdateSpecializations}
        onUpdateCustomContent={handleUpdateCustomContent}
        onUpdateContactInfo={handleUpdateContactInfo}
        onImportFromLinkedIn={handleImportFromLinkedIn}
        onUpdateEducation={handleUpdateEducation}
        onUpdateCertifications={handleUpdateCertifications}
        onUpdateExperience={handleUpdateExperience}
      />
      
      <AdvisorEditFooter />
    </div>
  );
};

export default AdvisorEdit;
