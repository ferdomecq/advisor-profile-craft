
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { enUS } from 'src/i18n/en-US';
import { esES } from 'src/i18n/es-ES';

export type Language = 'en' | 'es';

export type Translations = {
  [key: string]: string | Translations;
};

type LanguageContextType = {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const defaultLanguage: Language = 'en';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage or use browser language
    const savedLanguage = localStorage.getItem('language') as Language;
    const browserLanguage = navigator.language.split('-')[0];
    return savedLanguage || (browserLanguage === 'es' ? 'es' : 'en');
  });

  const translations = language === 'en' ? enUS : esES;

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Function to get translations by key
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations,
        setLanguage: handleSetLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
