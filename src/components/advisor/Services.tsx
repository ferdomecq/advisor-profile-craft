
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry, staggeredChildren } from "@/lib/animation";
import { Service, Specialization } from "@/lib/types";
import { AVAILABLE_SERVICES, AVAILABLE_SPECIALIZATIONS } from "@/lib/data";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { Briefcase, Award, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  onUpdateServices = () => {},
  onUpdateSpecializations = () => {},
}: ServicesProps) {
  const nextDelay = staggeredChildren(100, 50);
  
  const handleAddService = () => {
    // Simulating adding a service from a list of available services
    // In a real app, this would open a dropdown or dialog to select from available services
    const availableServices = AVAILABLE_SERVICES.filter(
      service => !services.some(s => s.id === service.id)
    );
    
    if (availableServices.length > 0) {
      const newService = availableServices[0];
      onUpdateServices([...services, newService]);
    }
  };
  
  const handleRemoveService = (serviceId: string) => {
    onUpdateServices(services.filter(service => service.id !== serviceId));
  };
  
  const handleAddSpecialization = () => {
    // Simulating adding a specialization from a list of available specializations
    // In a real app, this would open a dropdown or dialog to select from available specializations
    const availableSpecializations = AVAILABLE_SPECIALIZATIONS.filter(
      spec => !specializations.some(s => s.id === spec.id)
    );
    
    if (availableSpecializations.length > 0) {
      const newSpecialization = availableSpecializations[0];
      onUpdateSpecializations([...specializations, newSpecialization]);
    }
  };
  
  const handleRemoveSpecialization = (specializationId: string) => {
    onUpdateSpecializations(specializations.filter(spec => spec.id !== specializationId));
  };
  
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
                  className="py-3 px-4 hover:bg-gray-50/50 transition-colors flex justify-between items-center"
                >
                  <span className="text-sm text-gray-700">{service.name}</span>
                  
                  {!readOnly && (
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={() => handleRemoveService(service.id)}
                    >
                      <X size={14} className="text-gray-500" />
                    </Button>
                  )}
                </BlurredCard>
              </AnimatedEntry>
            ))}
            
            {!readOnly && (
              <AnimatedEntry animation="scale-in" delay={nextDelay()}>
                <BlurredCard
                  variant="outline"
                  className="py-3 px-4 border-dashed hover:bg-gray-50/50 transition-colors flex items-center justify-center cursor-pointer"
                  onClick={handleAddService}
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
                className="chip-secondary flex items-center gap-1"
              >
                {specialization.name}
                
                {!readOnly && (
                  <X 
                    size={14} 
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={() => handleRemoveSpecialization(specialization.id)}
                  />
                )}
              </AnimatedEntry>
            ))}
            
            {!readOnly && (
              <AnimatedEntry animation="scale-in" delay={nextDelay()}>
                <div 
                  className="chip border border-dashed border-gray-300 bg-transparent text-gray-500 cursor-pointer"
                  onClick={handleAddSpecialization}
                >
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
