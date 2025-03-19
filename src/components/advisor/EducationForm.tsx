
import React from "react";
import { Education } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { Save } from "lucide-react";
import { AnimatedEntry } from "@/lib/animation";

interface EducationFormProps {
  editEduForm: Education | null;
  handleChangeEdu: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancelEdu: () => void;
  handleSaveEdu: () => void;
  isNew?: boolean;
}

export const EducationForm = ({ 
  editEduForm, 
  handleChangeEdu, 
  handleCancelEdu, 
  handleSaveEdu,
  isNew = false
}: EducationFormProps) => {
  return (
    <AnimatedEntry animation="slide-in">
      <BlurredCard 
        variant="outline" 
        padding="md"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              name="institution"
              value={editEduForm?.institution || ""}
              onChange={handleChangeEdu}
              className="bg-white"
              placeholder="University name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              name="degree"
              value={editEduForm?.degree || ""}
              onChange={handleChangeEdu}
              className="bg-white"
              placeholder="Bachelor's, Master's, etc."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="fieldOfStudy">Field of Study</Label>
            <Input
              id="fieldOfStudy"
              name="fieldOfStudy"
              value={editEduForm?.fieldOfStudy || ""}
              onChange={handleChangeEdu}
              className="bg-white"
              placeholder="Finance, Economics, etc."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              name="year"
              value={editEduForm?.year || ""}
              onChange={handleChangeEdu}
              className="bg-white"
              type="number"
              placeholder="Graduation year"
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" size="sm" onClick={handleCancelEdu}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleSaveEdu}>
              <Save size={14} className="mr-1" />
              Save
            </Button>
          </div>
        </div>
      </BlurredCard>
    </AnimatedEntry>
  );
};
