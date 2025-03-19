
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { ProfilePicture } from "@/components/ui/ProfilePicture";
import { Button } from "@/components/ui/button";
import { BasicInfo } from "@/lib/types";
import { AnimatedEntry } from "@/lib/animation";
import { Linkedin, Mail, Calendar, Share2 } from "lucide-react";
import Rating from "./Rating";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProfileHeaderProps {
  data: BasicInfo;
  rating?: number;
  onImportFromLinkedIn: () => void;
}

export default function ProfileHeader({ data, rating, onImportFromLinkedIn }: ProfileHeaderProps) {
  const { t } = useLanguage();
  
  return (
    <BlurredCard 
      variant="glass" 
      className="w-full mb-6 overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute inset-0 h-32 bg-gradient-to-r from-citec-blue to-citec-accent opacity-10" />
      
      <div className="relative flex flex-col md:flex-row gap-6 pt-8 items-start">
        <AnimatedEntry animation="blur-in" className="flex-shrink-0">
          <ProfilePicture 
            src={data.profileImage} 
            alt={`${data.firstName} ${data.lastName}`} 
            size="xl" 
            border={true}
            className="mx-auto md:ml-0" 
          />
        </AnimatedEntry>
        
        <div className="flex-1 space-y-4">
          <AnimatedEntry animation="fade-in" delay={100}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="chip-primary mb-2">{t('profile.title')}</div>
                <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
                  {data.firstName} {data.lastName}
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  {data.title} at {data.company}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-sm text-gray-500 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                    {data.location}
                  </p>
                  {rating && (
                    <>
                      <span className="text-sm text-gray-300">•</span>
                      <div className="flex items-center">
                        <Rating rating={rating} size="sm" showValue={true} />
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {data.linkedInUrl ? (
                  <a href={data.linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 h-9">
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </Button>
                  </a>
                ) : (
                  <Button onClick={onImportFromLinkedIn} variant="outline" size="sm" className="gap-2 h-9">
                    <Linkedin size={16} />
                    <span>{t('profile.import')}</span>
                  </Button>
                )}
                
                <Button variant="outline" size="sm" className="gap-2 h-9">
                  <Share2 size={16} />
                  <span>{t('profile.share')}</span>
                </Button>
              </div>
            </div>
          </AnimatedEntry>
          
          <AnimatedEntry animation="fade-in" delay={200}>
            <div className="flex flex-wrap gap-2 pt-2 mt-4 border-t border-gray-100">
              <Button variant="default" size="sm" className="premium-button-primary gap-1.5">
                <Mail size={16} />
                <span>{t('profile.contact')}</span>
              </Button>
              
              <Button variant="outline" size="sm" className="gap-1.5 bg-white">
                <Calendar size={16} />
                <span>{t('profile.schedule')}</span>
              </Button>
            </div>
          </AnimatedEntry>
        </div>
      </div>
    </BlurredCard>
  );
}
