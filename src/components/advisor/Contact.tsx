
import React from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry } from "@/lib/animation";
import { Button } from "@/components/ui/button";
import { ContactInfo } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Calendar, MessageCircle, Link, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ContactProps {
  contactInfo: ContactInfo;
  readOnly?: boolean;
  onUpdate?: (contactInfo: Partial<ContactInfo>) => void;
}

export default function Contact({
  contactInfo,
  readOnly = true,
  onUpdate = () => {},
}: ContactProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return;
    
    const { name, value } = e.target;
    onUpdate({ [name]: value });
  };
  
  const openChatClient = () => {
    toast.success("Chat client", { 
      description: "Chat client will be opened for client conversations"
    });
  };

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
  
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [time, setTime] = React.useState<string>("10:00");
  
  const handleScheduleMeeting = () => {
    if (!date) {
      toast("Please select a date", {
        description: "A date is required to schedule a meeting"
      });
      return;
    }
    
    toast.success("Meeting scheduled", {
      description: `Meeting scheduled for ${format(date, "PPP")} at ${time}`
    });
  };
  
  return (
    <div className="space-y-6">
      {readOnly ? (
        <AnimatedEntry animation="scale-in">
          <BlurredCard variant="glass" className="p-6">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-medium">Get in Touch</h3>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <Button 
                  variant="default" 
                  className="premium-button-primary flex-1 gap-2" 
                  onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                >
                  <Mail size={18} />
                  <span>Contact Me</span>
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex-1 gap-2 bg-white">
                      <MessageCircle size={18} />
                      <span>Chat Now</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Chat with {contactInfo.advisorName || "Advisor"}</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col h-80">
                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {chatMessages.map((msg) => (
                          <div 
                            key={msg.id} 
                            className={`flex ${msg.sender === 'advisor' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div 
                              className={cn(
                                "max-w-[75%] rounded-lg p-3",
                                msg.sender === 'advisor' 
                                  ? "bg-primary text-primary-foreground" 
                                  : "bg-muted"
                              )}
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
                        <Input 
                          placeholder="Type your message..." 
                          value={newMessage} 
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                          className="flex-1"
                        />
                        <Button onClick={sendMessage}>Send</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-gray-600">
                {contactInfo.email && (
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="flex items-center gap-2 hover:text-citec-blue transition-colors"
                  >
                    <Mail size={16} />
                    <span className="text-sm">{contactInfo.email}</span>
                  </a>
                )}
                
                {contactInfo.phone && (
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="flex items-center gap-2 hover:text-citec-blue transition-colors"
                  >
                    <Phone size={16} />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </a>
                )}
                
                {contactInfo.calendlyLink && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="link" className="gap-2 p-0 h-auto text-gray-600 hover:text-citec-blue">
                        <Calendar size={16} />
                        <span className="text-sm">Schedule a Call</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-4">
                        <h4 className="font-medium">Schedule a Meeting</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">Select a date and time:</p>
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                          <div className="mt-2">
                            <Label htmlFor="meeting-time">Time</Label>
                            <select 
                              id="meeting-time"
                              className="w-full p-2 border rounded-md mt-1" 
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                            >
                              <option value="09:00">9:00 AM</option>
                              <option value="10:00">10:00 AM</option>
                              <option value="11:00">11:00 AM</option>
                              <option value="13:00">1:00 PM</option>
                              <option value="14:00">2:00 PM</option>
                              <option value="15:00">3:00 PM</option>
                              <option value="16:00">4:00 PM</option>
                            </select>
                          </div>
                          <Button 
                            className="w-full mt-2" 
                            onClick={handleScheduleMeeting}
                          >
                            Schedule
                          </Button>
                          {contactInfo.calendlyLink && (
                            <div className="mt-2 text-center">
                              <a 
                                href={contactInfo.calendlyLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-sm text-citec-blue flex items-center justify-center gap-1"
                              >
                                <span>Or use Calendly</span>
                                <ExternalLink size={14} />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </div>
            </div>
          </BlurredCard>
        </AnimatedEntry>
      ) : (
        <AnimatedEntry animation="scale-in">
          <BlurredCard variant="solid" className="p-6">
            <div className="space-y-5">
              <h3 className="text-lg font-medium">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={contactInfo.email}
                    onChange={handleInputChange}
                    className="bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={contactInfo.phone}
                    onChange={handleInputChange}
                    className="bg-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="calendlyLink">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-citec-blue" />
                      <span>Calendar/Scheduling Link</span>
                    </div>
                  </Label>
                  <Input
                    id="calendlyLink"
                    name="calendlyLink"
                    type="url"
                    value={contactInfo.calendlyLink || ""}
                    onChange={handleInputChange}
                    className="bg-white"
                    placeholder="https://calendly.com/yourusername"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Add your Calendly, Cal.com, or any scheduling tool link so clients can book appointments with you directly
                  </p>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="advisorName">
                    <div className="flex items-center gap-2">
                      <MessageCircle size={16} className="text-citec-blue" />
                      <span>Your Display Name (for Chat)</span>
                    </div>
                  </Label>
                  <Input
                    id="advisorName"
                    name="advisorName"
                    type="text"
                    value={contactInfo.advisorName || ""}
                    onChange={handleInputChange}
                    className="bg-white"
                    placeholder="John Doe"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This name will be displayed in the chat interface when clients message you
                  </p>
                </div>
              </div>
            </div>
          </BlurredCard>
        </AnimatedEntry>
      )}
    </div>
  );
}
