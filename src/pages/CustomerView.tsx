
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MOCK_ADVISOR } from "@/lib/data";
import { AdvisorProfile, Testimonial } from "@/lib/types";
import { toast } from "sonner";
import { AnimatedEntry } from "@/lib/animation";
import { Button } from "@/components/ui/button";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { ArrowLeft, Star, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdvisorRatingCard } from "@/components/advisor/Rating";
import RatingInput from "@/components/customer/RatingInput";

const CustomerView = () => {
  const { advisorId } = useParams();
  const [advisor, setAdvisor] = useState<AdvisorProfile>(MOCK_ADVISOR);
  const { t } = useLanguage();
  
  // State for the review form
  const [reviewForm, setReviewForm] = useState({
    clientName: "",
    company: "",
    rating: 5,
    comment: "",
  });
  
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  
  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRatingChange = (rating: number) => {
    setReviewForm(prev => ({
      ...prev,
      rating
    }));
  };
  
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reviewForm.clientName || !reviewForm.comment) {
      toast.error("Please fill out required fields", {
        description: "Your name and comment are required."
      });
      return;
    }
    
    setIsSubmittingReview(true);
    
    // Simulate network request
    setTimeout(() => {
      const newTestimonial: Testimonial = {
        id: `t-${Date.now()}`,
        clientName: reviewForm.clientName,
        company: reviewForm.company || undefined,
        rating: reviewForm.rating,
        comment: reviewForm.comment,
        date: new Date().toISOString(),
      };
      
      // Update advisor with new testimonial
      const updatedTestimonials = [...advisor.testimonials, newTestimonial];
      
      // Calculate new average rating
      const totalRating = updatedTestimonials.reduce((sum, t) => sum + t.rating, 0);
      const newRating = totalRating / updatedTestimonials.length;
      
      setAdvisor(prev => ({
        ...prev,
        testimonials: updatedTestimonials,
        overallRating: parseFloat(newRating.toFixed(1)),
      }));
      
      // Reset form
      setReviewForm({
        clientName: "",
        company: "",
        rating: 5,
        comment: "",
      });
      
      setIsSubmittingReview(false);
      
      toast.success("Review submitted successfully", {
        description: "Thank you for your feedback!"
      });
    }, 1000);
  };
  
  // Calculate review count from testimonials
  const reviewCount = advisor.testimonials.length;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Language switcher in top right corner */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      {/* Header with back button */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center">
          <Link to="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-xl font-medium">Advisor Profile</h1>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
        <ProfileHeader 
          data={advisor.basicInfo} 
          rating={advisor.overallRating}
          onImportFromLinkedIn={() => {}}
        />
        
        <ProfileTabs
          tabs={[
            {
              id: "about",
              label: (
                <div className="flex items-center space-x-2">
                  <span>{t('tabs.about')}</span>
                </div>
              ),
              content: (
                <div className="space-y-10">
                  <Summary 
                    summary={advisor.summary} 
                    readOnly={true}
                  />
                  
                  <Services 
                    services={advisor.services} 
                    specializations={advisor.specializations}
                    readOnly={true}
                  />
                </div>
              ),
            },
            {
              id: "experience",
              label: (
                <div className="flex items-center space-x-2">
                  <span>{t('tabs.experience')}</span>
                </div>
              ),
              content: (
                <ExperienceSection 
                  experiences={advisor.experience} 
                  readOnly={true}
                />
              ),
            },
            {
              id: "education",
              label: (
                <div className="flex items-center space-x-2">
                  <span>{t('tabs.education')}</span>
                </div>
              ),
              content: (
                <EducationSection 
                  education={advisor.education} 
                  certifications={advisor.certifications}
                  readOnly={true}
                />
              ),
            },
            {
              id: "testimonials",
              label: (
                <div className="flex items-center space-x-2">
                  <span>{t('tabs.testimonials')}</span>
                </div>
              ),
              content: (
                <div className="space-y-10">
                  <AdvisorRatingCard 
                    rating={advisor.overallRating || 0} 
                    reviewCount={reviewCount}
                    readOnly={true} 
                  />
                  
                  <Testimonials 
                    testimonials={advisor.testimonials} 
                    readOnly={true}
                  />
                  
                  {/* Customer Rating & Review Form */}
                  <AnimatedEntry animation="fade-in" delay={200}>
                    <BlurredCard className="p-6">
                      <h3 className="text-lg font-medium mb-4">Write a Review</h3>
                      <form onSubmit={handleSubmitReview} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="rating">Your Rating</Label>
                          <RatingInput 
                            currentRating={reviewForm.rating} 
                            onChange={handleRatingChange} 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="clientName">Your Name *</Label>
                          <Input
                            id="clientName"
                            name="clientName"
                            value={reviewForm.clientName}
                            onChange={handleReviewChange}
                            className="bg-white"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Company (Optional)</Label>
                          <Input
                            id="company"
                            name="company"
                            value={reviewForm.company}
                            onChange={handleReviewChange}
                            className="bg-white"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="comment">Your Review *</Label>
                          <Textarea
                            id="comment"
                            name="comment"
                            value={reviewForm.comment}
                            onChange={handleReviewChange}
                            className="min-h-[120px] bg-white"
                            placeholder="Share your experience with this advisor..."
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="gap-2 w-full md:w-auto"
                          disabled={isSubmittingReview}
                        >
                          {isSubmittingReview ? (
                            <span>Submitting...</span>
                          ) : (
                            <>
                              <Send size={16} />
                              <span>Submit Review</span>
                            </>
                          )}
                        </Button>
                      </form>
                    </BlurredCard>
                  </AnimatedEntry>
                </div>
              ),
            },
            {
              id: "contact",
              label: (
                <div className="flex items-center space-x-2">
                  <span>{t('tabs.contact')}</span>
                </div>
              ),
              content: (
                <Contact 
                  contactInfo={advisor.contactInfo} 
                  readOnly={true}
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

export default CustomerView;
