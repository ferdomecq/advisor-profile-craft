
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry } from "@/lib/animation";
import { Button } from "@/components/ui/button";
import { ContactInfo } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Calendar, Share2 } from "lucide-react";

interface ContactProps {
  contactInfo: ContactInfo;
  readOnly?: boolean;
  onUpdate?: (contactInfo: Partial<ContactInfo>) => void;
}

export default function Contact({
  contactInfo,
  readOnly = true,
  onUpdate = () => {},
}: ContactProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return;
    
    const { name, value } = e.target;
    onUpdate({ [name]: value });
  };
  
  return (
    <div className="space-y-6">
      {readOnly ? (
        <AnimatedEntry animation="scale-in">
          <BlurredCard variant="glass" className="p-6">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-medium">Get in Touch</h3>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <Button 
                  variant="default" 
                  className="premium-button-primary flex-1 gap-2" 
                  onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                >
                  <Mail size={18} />
                  <span>Contact Me</span>
                </Button>
                
                {contactInfo.calendlyLink && (
                  <Button 
                    variant="outline" 
                    className="flex-1 gap-2 bg-white"
                    onClick={() => window.open(contactInfo.calendlyLink, '_blank')}
                  >
                    <Calendar size={18} />
                    <span>Schedule Meeting</span>
                  </Button>
                )}
              </div>
              
              <div className="flex justify-center space-x-8 text-gray-600">
                {contactInfo.email && (
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="flex items-center gap-2 hover:text-citec-blue transition-colors"
                  >
                    <Mail size={16} />
                    <span className="text-sm">{contactInfo.email}</span>
                  </a>
                )}
                
                {contactInfo.phone && (
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="flex items-center gap-2 hover:text-citec-blue transition-colors"
                  >
                    <Phone size={16} />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </a>
                )}
              </div>
            </div>
          </BlurredCard>
        </AnimatedEntry>
      ) : (
        <AnimatedEntry animation="scale-in">
          <BlurredCard variant="solid" className="p-6">
            <div className="space-y-5">
              <h3 className="text-lg font-medium">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={contactInfo.email}
                    onChange={handleInputChange}
                    className="bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={contactInfo.phone}
                    onChange={handleInputChange}
                    className="bg-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="calendlyLink">Calendly Link (Optional)</Label>
                  <Input
                    id="calendlyLink"
                    name="calendlyLink"
                    type="url"
                    value={contactInfo.calendlyLink || ""}
                    onChange={handleInputChange}
                    className="bg-white"
                    placeholder="https://calendly.com/yourusername"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Link to your scheduling page for client meetings
                  </p>
                </div>
              </div>
            </div>
          </BlurredCard>
        </AnimatedEntry>
      )}
    </div>
  );
}
