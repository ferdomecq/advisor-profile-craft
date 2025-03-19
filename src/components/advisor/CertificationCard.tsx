
import React from "react";
import { Certification } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { Edit, X } from "lucide-react";
import { AnimatedEntry } from "@/lib/animation";

interface CertificationCardProps {
  certification: Certification;
  handleEdit: (cert: Certification) => void;
  handleDelete: (id: string) => void;
  readOnly: boolean;
  delay?: number;
}

export const CertificationCard = ({ 
  certification, 
  handleEdit, 
  handleDelete, 
  readOnly,
  delay = 0 
}: CertificationCardProps) => {
  return (
    <AnimatedEntry
      animation="scale-in"
      delay={delay}
    >
      <BlurredCard 
        variant="outline"
        className="py-3 px-4 min-w-[190px] relative"
      >
        {!readOnly && (
          <div className="absolute top-2 right-2 flex space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => handleEdit(certification)}
            >
              <Edit size={12} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => handleDelete(certification.id)}
            >
              <X size={12} />
            </Button>
          </div>
        )}
        
        <div className="flex flex-col">
          <span className="font-medium text-sm">{certification.name}</span>
          <span className="text-xs text-gray-500 mt-1">{certification.issuer}, {certification.year}</span>
        </div>
      </BlurredCard>
    </AnimatedEntry>
  );
};
