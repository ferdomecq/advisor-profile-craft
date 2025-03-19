
import React, { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, ExternalLink } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

interface ScheduleCallPopoverProps {
  calendlyLink?: string;
}

export const ScheduleCallPopover = ({ calendlyLink }: ScheduleCallPopoverProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("10:00");

  const handleScheduleMeeting = () => {
    if (!date) {
      toast("Please select a date", {
        description: "A date is required to schedule a meeting",
      });
      return;
    }

    toast.success("Meeting scheduled", {
      description: `Meeting scheduled for ${format(date, "PPP")} at ${time}`,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          className="gap-2 p-0 h-auto text-gray-600 hover:text-citec-blue"
        >
          <CalendarIcon size={16} />
          <span className="text-sm">Schedule a Call</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h4 className="font-medium">Schedule a Meeting</h4>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Select a date and time:
            </p>
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
            <Button className="w-full mt-2" onClick={handleScheduleMeeting}>
              Schedule
            </Button>
            {calendlyLink && (
              <div className="mt-2 text-center">
                <a
                  href={calendlyLink}
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
  );
};
