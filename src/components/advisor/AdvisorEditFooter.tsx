
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const AdvisorEditFooter = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-gray-100 mt-20 py-10 text-center text-sm text-gray-500">
      <div className="max-w-5xl mx-auto px-4">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
};
