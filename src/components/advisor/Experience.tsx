
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry, staggeredChildren } from "@/lib/animation";
import { Experience } from "@/lib/types";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { Calendar, Briefcase } from "lucide-react";
import { format, parseISO } from "date-fns";

interface ExperienceProps {
  experiences: Experience[];
  readOnly?: boolean;
  onUpdate?: (experiences: Experience[]) => void;
}

export default function ExperienceSection({
  experiences,
  readOnly = true,
  onUpdate,
}: ExperienceProps) {
  const getDelay = staggeredChildren(100, 200);
  
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present";
    try {
      return format(parseISO(dateString), "MMM yyyy");
    } catch (e) {
      return dateString;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <AnimatedIcon icon={Briefcase} size={20} animation="float" />
        <h3 className="text-lg font-medium">Work Experience</h3>
      </div>
      
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <AnimatedEntry
            key={experience.id}
            animation="slide-in"
            delay={getDelay()}
            className="relative pl-6 pb-6"
          >
            {/* Timeline dot and line */}
            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-citec-blue"></div>
            {index < experiences.length - 1 && (
              <div className="absolute left-1.5 top-4 bottom-0 w-px bg-gray-200"></div>
            )}
            
            <BlurredCard 
              variant="outline" 
              padding="md" 
              hover={true}
              className="relative"
            >
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-medium">{experience.title}</h4>
                  <div className="text-citec-blue font-medium">{experience.company}</div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1.5" />
                  <span>
                    {formatDate(experience.startDate)} - {experience.isPresent ? "Present" : formatDate(experience.endDate)}
                  </span>
                </div>
                
                <p className="text-sm text-gray-700 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </BlurredCard>
          </AnimatedEntry>
        ))}
        
        {!readOnly && (
          <AnimatedEntry animation="fade-in" delay={getDelay()} className="mt-4">
            <button className="premium-button-secondary w-full">
              + Add Work Experience
            </button>
          </AnimatedEntry>
        )}
      </div>
    </div>
  );
}
