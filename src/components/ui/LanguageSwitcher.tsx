
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: "icon" | "full";
  className?: string;
}

export function LanguageSwitcher({ 
  variant = "full", 
  className = "" 
}: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };
  
  if (variant === "icon") {
    return (
      <Button
        onClick={toggleLanguage}
        variant="ghost"
        size="icon"
        className={className}
      >
        <Globe size={20} />
      </Button>
    );
  }
  
  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className={`gap-2 ${className}`}
    >
      <Globe size={16} />
      <span>{t('common.switchTo')}</span>
    </Button>
  );
}
