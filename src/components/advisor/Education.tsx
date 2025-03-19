
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry, staggeredChildren } from "@/lib/animation";
import { Education, Certification } from "@/lib/types";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { GraduationCap, Award } from "lucide-react";

interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
  readOnly?: boolean;
  onUpdateEducation?: (education: Education[]) => void;
  onUpdateCertifications?: (certifications: Certification[]) => void;
}

export default function EducationSection({
  education,
  certifications,
  readOnly = true,
  onUpdateEducation,
  onUpdateCertifications,
}: EducationSectionProps) {
  const getDelayEdu = staggeredChildren(100, 150);
  const getDelayCert = staggeredChildren(300, 150);
  
  return (
    <div className="space-y-8">
      {/* Education */}
      <div className="space-y-5">
        <div className="flex items-center space-x-2">
          <AnimatedIcon icon={GraduationCap} size={20} animation="float" />
          <h3 className="text-lg font-medium">Education</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu) => (
            <AnimatedEntry
              key={edu.id}
              animation="slide-in"
              delay={getDelayEdu()}
            >
              <BlurredCard 
                variant="outline" 
                padding="md" 
                hover={true}
              >
                <div className="space-y-2">
                  <h4 className="font-medium text-base">{edu.institution}</h4>
                  <div className="text-sm text-gray-700">
                    {edu.degree} in {edu.fieldOfStudy}
                  </div>
                  <div className="text-sm text-gray-500">{edu.year}</div>
                </div>
              </BlurredCard>
            </AnimatedEntry>
          ))}
          
          {!readOnly && (
            <AnimatedEntry animation="fade-in" delay={getDelayEdu()}>
              <BlurredCard
                variant="outline"
                className="flex items-center justify-center h-full border-dashed cursor-pointer hover:bg-gray-50/50"
              >
                <span className="text-sm text-gray-500">+ Add Education</span>
              </BlurredCard>
            </AnimatedEntry>
          )}
        </div>
      </div>
      
      {/* Certifications */}
      <div className="space-y-5">
        <div className="flex items-center space-x-2">
          <AnimatedIcon icon={Award} size={20} animation="float" />
          <h3 className="text-lg font-medium">Certifications</h3>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <AnimatedEntry
              key={cert.id}
              animation="scale-in"
              delay={getDelayCert()}
            >
              <BlurredCard 
                variant="outline"
                className="py-3 px-4 min-w-[190px]"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{cert.name}</span>
                  <span className="text-xs text-gray-500 mt-1">{cert.issuer}, {cert.year}</span>
                </div>
              </BlurredCard>
            </AnimatedEntry>
          ))}
          
          {!readOnly && (
            <AnimatedEntry animation="scale-in" delay={getDelayCert()}>
              <BlurredCard
                variant="outline"
                className="py-3 px-4 border-dashed flex items-center justify-center cursor-pointer min-w-[190px]"
              >
                <span className="text-sm text-gray-500">+ Add Certification</span>
              </BlurredCard>
            </AnimatedEntry>
          )}
        </div>
      </div>
    </div>
  );
}
