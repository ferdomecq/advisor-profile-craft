
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry } from "@/lib/animation";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CustomSectionProps {
  content: string;
  readOnly?: boolean;
  onUpdate?: (content: string) => void;
}

export default function CustomSection({ 
  content, 
  readOnly = false,
  onUpdate = () => {},
}: CustomSectionProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (readOnly) return;
    onUpdate(e.target.value);
  };
  
  // For readOnly mode, we're rendering HTML content from a string
  // In a real app, you'd want to sanitize this content first
  const renderHTML = (html: string) => {
    return { __html: html };
  };
  
  return (
    <div className="space-y-4">
      <AnimatedEntry animation="scale-in">
        <div className="space-y-3">
          {!readOnly && (
            <Label htmlFor="customContent">Personal Message</Label>
          )}
          
          {readOnly ? (
            <BlurredCard className="prose max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={renderHTML(content)} 
              />
            </BlurredCard>
          ) : (
            <Textarea
              id="customContent"
              value={content}
              onChange={handleChange}
              className="min-h-[200px] bg-white resize-y p-3"
              placeholder="Share a personal message with your clients..."
            />
          )}
        </div>
      </AnimatedEntry>
    </div>
  );
}
