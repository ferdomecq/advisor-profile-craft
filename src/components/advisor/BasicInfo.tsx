
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { ProfilePicture } from "@/components/ui/ProfilePicture";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BasicInfo } from "@/lib/types";
import { AnimatedEntry, staggeredChildren } from "@/lib/animation";
import { Upload, Linkedin } from "lucide-react";

interface BasicInfoSectionProps {
  data: BasicInfo;
  readOnly?: boolean;
  onUpdate?: (data: Partial<BasicInfo>) => void;
  onImportFromLinkedIn?: () => void;
}

export default function BasicInfoSection({ 
  data, 
  readOnly = false,
  onUpdate = () => {},
  onImportFromLinkedIn = () => {}
}: BasicInfoSectionProps) {
  const nextDelay = staggeredChildren(100, 50);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return;
    
    const { name, value } = e.target;
    onUpdate({ [name]: value });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-8">
        <AnimatedEntry animation="blur-in" delay={nextDelay()}>
          <div className="flex flex-col items-center space-y-4">
            <ProfilePicture 
              src={data.profileImage} 
              alt={`${data.firstName} ${data.lastName}`} 
              size="xl" 
              border={true}
            />
            
            {!readOnly && (
              <Button variant="outline" size="sm" className="w-full">
                <Upload size={14} className="mr-2" />
                Upload Photo
              </Button>
            )}
          </div>
        </AnimatedEntry>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatedEntry animation="slide-in" delay={nextDelay()}>
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={handleInputChange}
                readOnly={readOnly}
                className="bg-white"
              />
            </div>
          </AnimatedEntry>
          
          <AnimatedEntry animation="slide-in" delay={nextDelay()}>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={handleInputChange}
                readOnly={readOnly}
                className="bg-white"
              />
            </div>
          </AnimatedEntry>
          
          <AnimatedEntry animation="slide-in" delay={nextDelay()}>
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                name="title"
                value={data.title}
                onChange={handleInputChange}
                readOnly={readOnly}
                className="bg-white"
              />
            </div>
          </AnimatedEntry>
          
          <AnimatedEntry animation="slide-in" delay={nextDelay()}>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={data.company}
                onChange={handleInputChange}
                readOnly={readOnly}
                className="bg-white"
              />
            </div>
          </AnimatedEntry>
          
          <AnimatedEntry animation="slide-in" delay={nextDelay()}>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={data.location}
                onChange={handleInputChange}
                readOnly={readOnly}
                className="bg-white"
                placeholder="City, State/Country"
              />
            </div>
          </AnimatedEntry>
          
          <AnimatedEntry animation="slide-in" delay={nextDelay()}>
            <div className="space-y-2">
              <Label htmlFor="linkedInUrl">LinkedIn Profile</Label>
              <div className="flex space-x-2">
                <Input
                  id="linkedInUrl"
                  name="linkedInUrl"
                  value={data.linkedInUrl}
                  onChange={handleInputChange}
                  readOnly={readOnly}
                  className="bg-white flex-1"
                  placeholder="https://linkedin.com/in/username"
                />
                
                {!readOnly && (
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={onImportFromLinkedIn}
                    className="flex-shrink-0"
                  >
                    <Linkedin size={18} />
                  </Button>
                )}
              </div>
            </div>
          </AnimatedEntry>
        </div>
      </div>
    </div>
  );
}
