
import React from "react";
import { MapPin, Star, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AdvisorProfile } from "@/lib/types";
import Rating from "@/components/advisor/Rating";
import { useLanguage } from "@/contexts/LanguageContext";

interface AdvisorCardProps {
  advisor: AdvisorProfile;
  onClick: () => void;
}

export function AdvisorCard({ advisor, onClick }: AdvisorCardProps) {
  const { t } = useLanguage();
  const { basicInfo, services, specializations, overallRating } = advisor;
  
  // Get initials for avatar fallback
  const initials = `${basicInfo.firstName.charAt(0)}${basicInfo.lastName.charAt(0)}`;
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="h-24 bg-gradient-to-r from-primary/80 to-accent/80" />
      <CardContent className="pt-0 relative flex-grow flex flex-col">
        <div className="-mt-12 mb-4 flex justify-between items-end">
          <Avatar className="h-20 w-20 border-4 border-white">
            <AvatarImage src={basicInfo.profileImage} alt={`${basicInfo.firstName} ${basicInfo.lastName}`} />
            <AvatarFallback className="text-lg">{initials}</AvatarFallback>
          </Avatar>
          
          {overallRating !== undefined && (
            <div className="bg-white rounded-lg shadow-sm py-1 px-2 text-sm font-medium flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span>{overallRating.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        <h3 className="font-bold text-lg mb-1">{basicInfo.firstName} {basicInfo.lastName}</h3>
        <p className="text-sm text-muted-foreground mb-2">{basicInfo.title}</p>
        
        {basicInfo.location && (
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <MapPin size={14} className="mr-1" />
            <span>{basicInfo.location}</span>
          </div>
        )}
        
        {/* Specializations */}
        {specializations.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {specializations.slice(0, 3).map((spec) => (
              <span 
                key={spec.id} 
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
              >
                {spec.name}
              </span>
            ))}
            {specializations.length > 3 && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                +{specializations.length - 3}
              </span>
            )}
          </div>
        )}
        
        <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
          {advisor.summary.substring(0, 150)}
          {advisor.summary.length > 150 ? '...' : ''}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          {t('marketplace.viewProfile')}
        </Button>
      </CardContent>
    </Card>
  );
}
