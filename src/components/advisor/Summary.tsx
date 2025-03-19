
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry } from "@/lib/animation";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

interface SummaryProps {
  summary: string;
  readOnly?: boolean;
  onUpdate?: (summary: string) => void;
}

export default function Summary({ 
  summary, 
  readOnly = false,
  onUpdate = () => {},
}: SummaryProps) {
  const { t } = useLanguage();
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (readOnly) return;
    onUpdate(e.target.value);
  };
  
  return (
    <div className="space-y-4">
      <AnimatedEntry animation="scale-in">
        <div className="space-y-3">
          {!readOnly && (
            <Label htmlFor="summary">{t('sections.summary.title') || 'Professional Summary'}</Label>
          )}
          
          {readOnly ? (
            <BlurredCard className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </BlurredCard>
          ) : (
            <Textarea
              id="summary"
              value={summary}
              onChange={handleChange}
              className="min-h-[150px] bg-white resize-y p-3"
              placeholder={t('sections.summary.placeholder') || 'Write a brief summary of your professional background and expertise...'}
            />
          )}
        </div>
      </AnimatedEntry>
    </div>
  );
}
