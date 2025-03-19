
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry, staggeredChildren } from "@/lib/animation";
import { Service, Specialization } from "@/lib/types";
import { AVAILABLE_SERVICES, AVAILABLE_SPECIALIZATIONS } from "@/lib/data";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { Briefcase, Award } from "lucide-react";

interface ServicesProps {
  services: Service[];
  specializations: Specialization[];
  readOnly?: boolean;
  onUpdateServices?: (services: Service[]) => void;
  onUpdateSpecializations?: (specializations: Specialization[]) => void;
}

export default function Services({
  services,
  specializations,
  readOnly = true,
  onUpdateServices,
  onUpdateSpecializations,
}: ServicesProps) {
  const nextDelay = staggeredChildren(100, 50);
  
  return (
    <div className="space-y-8">
      <AnimatedEntry animation="fade-in">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <AnimatedIcon icon={Briefcase} size={20} animation="float" />
            <h3 className="text-lg font-medium">Services Offered</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
              <AnimatedEntry 
                key={service.id} 
                animation="scale-in"
                delay={nextDelay()}
              >
                <BlurredCard
                  variant="outline"
                  className="py-3 px-4 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-sm text-gray-700">{service.name}</span>
                </BlurredCard>
              </AnimatedEntry>
            ))}
            
            {!readOnly && (
              <AnimatedEntry animation="scale-in" delay={nextDelay()}>
                <BlurredCard
                  variant="outline"
                  className="py-3 px-4 border-dashed hover:bg-gray-50/50 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span className="text-sm text-gray-500">+ Add Service</span>
                </BlurredCard>
              </AnimatedEntry>
            )}
          </div>
        </div>
      </AnimatedEntry>
      
      <AnimatedEntry animation="fade-in" delay={200}>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <AnimatedIcon icon={Award} size={20} animation="float" />
            <h3 className="text-lg font-medium">Areas of Specialization</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {specializations.map((specialization) => (
              <AnimatedEntry 
                key={specialization.id} 
                animation="scale-in" 
                delay={nextDelay()}
                className="chip-secondary"
              >
                {specialization.name}
              </AnimatedEntry>
            ))}
            
            {!readOnly && (
              <AnimatedEntry animation="scale-in" delay={nextDelay()}>
                <div className="chip border border-dashed border-gray-300 bg-transparent text-gray-500 cursor-pointer">
                  + Add Specialization
                </div>
              </AnimatedEntry>
            )}
          </div>
        </div>
      </AnimatedEntry>
    </div>
  );
}
