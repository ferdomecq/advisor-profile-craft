
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry } from "@/lib/animation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MessageCircle } from "lucide-react";
import { ContactInfo } from "@/lib/types";

interface ContactFormProps {
  contactInfo: ContactInfo;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ContactForm = ({
  contactInfo,
  handleInputChange,
}: ContactFormProps) => {
  return (
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
              <Label htmlFor="calendlyLink">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-citec-blue" />
                  <span>Calendar/Scheduling Link</span>
                </div>
              </Label>
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
                Add your Calendly, Cal.com, or any scheduling tool link so
                clients can book appointments with you directly
              </p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="advisorName">
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-citec-blue" />
                  <span>Your Display Name (for Chat)</span>
                </div>
              </Label>
              <Input
                id="advisorName"
                name="advisorName"
                type="text"
                value={contactInfo.advisorName || ""}
                onChange={handleInputChange}
                className="bg-white"
                placeholder="John Doe"
              />
              <p className="text-xs text-gray-500 mt-1">
                This name will be displayed in the chat interface when clients
                message you
              </p>
            </div>
          </div>
        </div>
      </BlurredCard>
    </AnimatedEntry>
  );
};
