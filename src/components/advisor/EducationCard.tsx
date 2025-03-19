
import React from "react";
import { Education } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { Edit, X } from "lucide-react";
import { AnimatedEntry } from "@/lib/animation";

interface EducationCardProps {
  education: Education;
  handleEdit: (edu: Education) => void;
  handleDelete: (id: string) => void;
  readOnly: boolean;
  delay?: number;
}

export const EducationCard = ({ 
  education, 
  handleEdit, 
  handleDelete, 
  readOnly,
  delay = 0 
}: EducationCardProps) => {
  return (
    <AnimatedEntry
      animation="slide-in"
      delay={delay}
    >
      <BlurredCard 
        variant="outline" 
        padding="md" 
        hover={true}
      >
        {!readOnly && (
          <div className="absolute top-3 right-3 flex space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => handleEdit(education)}
            >
              <Edit size={14} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => handleDelete(education.id)}
            >
              <X size={14} />
            </Button>
          </div>
        )}
      
        <div className="space-y-2">
          <h4 className="font-medium text-base">{education.institution}</h4>
          <div className="text-sm text-gray-700">
            {education.degree} in {education.fieldOfStudy}
          </div>
          <div className="text-sm text-gray-500">{education.year}</div>
        </div>
      </BlurredCard>
    </AnimatedEntry>
  );
};
