
import React from "react";
import { ContactInfo } from "@/lib/types";
import { ContactCard } from "./contact/ContactCard";
import { ContactForm } from "./contact/ContactForm";

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
        <ContactCard contactInfo={contactInfo} />
      ) : (
        <ContactForm 
          contactInfo={contactInfo} 
          handleInputChange={handleInputChange} 
        />
      )}
    </div>
  );
}
