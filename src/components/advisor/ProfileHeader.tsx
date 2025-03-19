
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { ProfilePicture } from "@/components/ui/ProfilePicture";
import { Button } from "@/components/ui/button";
import { BasicInfo } from "@/lib/types";
import { AnimatedEntry } from "@/lib/animation";
import { Linkedin, Mail, Calendar, Share2, MessageCircle } from "lucide-react";
import Rating from "./Rating";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { format } from "date-fns";

interface ProfileHeaderProps {
  data: BasicInfo;
  rating?: number;
  onImportFromLinkedIn: () => void;
  calendlyLink?: string;
  email?: string;
}

export default function ProfileHeader({ 
  data, 
  rating, 
  onImportFromLinkedIn,
  calendlyLink,
  email 
}: ProfileHeaderProps) {
  const { t } = useLanguage();
  
  const [chatMessages, setChatMessages] = React.useState<{id: number, sender: string, message: string, timestamp: Date}[]>([
    { id: 1, sender: "client", message: "Hello, I'm interested in your financial advisory services.", timestamp: new Date(Date.now() - 3600000) },
    { id: 2, sender: "advisor", message: "Hi there! Thank you for reaching out. I'd be happy to discuss how I can help with your financial goals.", timestamp: new Date(Date.now() - 3500000) }
  ]);
  const [newMessage, setNewMessage] = React.useState("");
  
  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    setChatMessages([
      ...chatMessages,
      {
        id: chatMessages.length + 1,
        sender: "advisor",
        message: newMessage,
        timestamp: new Date()
      }
    ]);
    
    setNewMessage("");
  };
  
  return (
    <BlurredCard 
      variant="glass" 
      className="w-full mb-6 overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute inset-0 h-32 bg-gradient-to-r from-citec-blue to-citec-accent opacity-10" />
      
      <div className="relative flex flex-col md:flex-row gap-6 pt-8 items-start">
        <AnimatedEntry animation="blur-in" className="flex-shrink-0">
          <ProfilePicture 
            src={data.profileImage} 
            alt={`${data.firstName} ${data.lastName}`} 
            size="xl" 
            border={true}
            className="mx-auto md:ml-0" 
          />
        </AnimatedEntry>
        
        <div className="flex-1 space-y-4">
          <AnimatedEntry animation="fade-in" delay={100}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="chip-primary mb-2">{t('profile.title')}</div>
                <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
                  {data.firstName} {data.lastName}
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  {data.title} at {data.company}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-sm text-gray-500 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                    {data.location}
                  </p>
                  {rating && (
                    <>
                      <span className="text-sm text-gray-300">•</span>
                      <div className="flex items-center">
                        <Rating rating={rating} size="sm" showValue={true} />
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {data.linkedInUrl ? (
                  <a href={data.linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 h-9">
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </Button>
                  </a>
                ) : (
                  <Button onClick={onImportFromLinkedIn} variant="outline" size="sm" className="gap-2 h-9">
                    <Linkedin size={16} />
                    <span>{t('profile.import')}</span>
                  </Button>
                )}
                
                <Button variant="outline" size="sm" className="gap-2 h-9">
                  <Share2 size={16} />
                  <span>{t('profile.share')}</span>
                </Button>
              </div>
            </div>
          </AnimatedEntry>
          
          <AnimatedEntry animation="fade-in" delay={200}>
            <div className="flex flex-wrap gap-2 pt-2 mt-4 border-t border-gray-100">
              <Button 
                variant="default" 
                size="sm" 
                className="premium-button-primary gap-1.5"
                onClick={() => email && (window.location.href = `mailto:${email}`)}
              >
                <Mail size={16} />
                <span>{t('profile.contact')}</span>
              </Button>
              
              {calendlyLink ? (
                <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1.5 bg-white">
                    <Calendar size={16} />
                    <span>{t('profile.schedule')}</span>
                  </Button>
                </a>
              ) : (
                <Button variant="outline" size="sm" className="gap-1.5 bg-white">
                  <Calendar size={16} />
                  <span>{t('profile.schedule')}</span>
                </Button>
              )}
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1.5 bg-white">
                    <MessageCircle size={16} />
                    <span>Chat Now</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Chat with {data.firstName} {data.lastName}</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col h-80">
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {chatMessages.map((msg) => (
                        <div 
                          key={msg.id} 
                          className={`flex ${msg.sender === 'advisor' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[75%] rounded-lg p-3 ${
                              msg.sender === 'advisor' 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-muted"
                            }`}
                          >
                            <p>{msg.message}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {format(msg.timestamp, "p")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t p-3 flex gap-2">
                      <input 
                        type="text"
                        placeholder="Type your message..." 
                        value={newMessage} 
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-1 px-3 py-2 border rounded-md"
                      />
                      <Button onClick={sendMessage}>Send</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </AnimatedEntry>
        </div>
      </div>
    </BlurredCard>
  );
}
