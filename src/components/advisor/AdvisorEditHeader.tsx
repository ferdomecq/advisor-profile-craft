
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin, Save } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

interface AdvisorEditHeaderProps {
  onBackToPublicView: () => void;
  onImportFromLinkedIn: () => void;
  onSaveProfile: () => void;
}

export const AdvisorEditHeader = ({
  onBackToPublicView,
  onImportFromLinkedIn,
  onSaveProfile,
}: AdvisorEditHeaderProps) => {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBackToPublicView}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-medium">Edit Advisor Profile</h1>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher variant="icon" className="mr-2" />
          <Button variant="outline" className="gap-2" onClick={onImportFromLinkedIn}>
            <Linkedin size={18} />
            <span>Import from LinkedIn</span>
          </Button>
          <Button className="gap-2" onClick={onSaveProfile}>
            <Save size={18} />
            <span>Save Profile</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
