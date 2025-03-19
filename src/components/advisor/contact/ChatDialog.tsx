
import React, { useState } from "react";
import { format } from "date-fns";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  timestamp: Date;
}

interface ChatDialogProps {
  advisorName: string;
}

export const ChatDialog = ({ advisorName }: ChatDialogProps) => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "client",
      message: "Hello, I'm interested in your financial advisory services.",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 2,
      sender: "advisor",
      message:
        "Hi there! Thank you for reaching out. I'd be happy to discuss how I can help with your financial goals.",
      timestamp: new Date(Date.now() - 3500000),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    setChatMessages([
      ...chatMessages,
      {
        id: chatMessages.length + 1,
        sender: "advisor",
        message: newMessage,
        timestamp: new Date(),
      },
    ]);

    setNewMessage("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1 gap-2 bg-white">
          <MessageCircle size={18} />
          <span>Chat Now</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Chat with {advisorName || "Advisor"}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-80">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "advisor" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={cn(
                    "max-w-[75%] rounded-lg p-3",
                    msg.sender === "advisor"
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
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
