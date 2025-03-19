
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry, staggeredChildren } from "@/lib/animation";
import { Testimonial } from "@/lib/types";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { MessageSquareQuote, Star } from "lucide-react";
import { format, parseISO } from "date-fns";

interface TestimonialsProps {
  testimonials: Testimonial[];
  readOnly?: boolean;
  onUpdate?: (testimonials: Testimonial[]) => void;
}

export default function Testimonials({
  testimonials,
  readOnly = true,
  onUpdate,
}: TestimonialsProps) {
  const getDelay = staggeredChildren(100, 200);
  
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), "MMM d, yyyy");
    } catch (e) {
      return dateString;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <AnimatedIcon icon={MessageSquareQuote} size={20} animation="float" />
        <h3 className="text-lg font-medium">Client Testimonials</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((testimonial) => (
          <AnimatedEntry
            key={testimonial.id}
            animation="scale-in"
            delay={getDelay()}
          >
            <BlurredCard variant="glass" hover={true}>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{testimonial.clientName}</h4>
                    {testimonial.company && (
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    )}
                  </div>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                        className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-sm italic text-gray-700 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>
                
                <div className="text-xs text-gray-500">
                  {formatDate(testimonial.date)}
                </div>
              </div>
            </BlurredCard>
          </AnimatedEntry>
        ))}
        
        {!readOnly && (
          <AnimatedEntry animation="fade-in" delay={getDelay()}>
            <BlurredCard
              variant="outline"
              className="flex items-center justify-center h-full min-h-[200px] border-dashed cursor-pointer hover:bg-gray-50/50"
            >
              <div className="text-center">
                <span className="text-sm text-gray-500 block">+ Add Client Testimonial</span>
                <span className="text-xs text-gray-400 mt-1 block">Let your clients share their experiences</span>
              </div>
            </BlurredCard>
          </AnimatedEntry>
        )}
      </div>
    </div>
  );
}
