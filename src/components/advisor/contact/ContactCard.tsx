
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry } from "@/lib/animation";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { ContactInfo } from "@/lib/types";
import { ChatDialog } from "./ChatDialog";
import { ScheduleCallPopover } from "./ScheduleCallPopover";

interface ContactCardProps {
  contactInfo: ContactInfo;
}

export const ContactCard = ({ contactInfo }: ContactCardProps) => {
  return (
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

            <ChatDialog advisorName={contactInfo.advisorName || "Advisor"} />
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-gray-600">
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

            {contactInfo.calendlyLink && (
              <ScheduleCallPopover calendlyLink={contactInfo.calendlyLink} />
            )}
          </div>
        </div>
      </BlurredCard>
    </AnimatedEntry>
  );
};
