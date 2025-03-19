
import React from "react";
import { Certification } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry } from "@/lib/animation";

interface CertificationFormProps {
  editCertForm: Certification | null;
  handleChangeCert: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancelCert: () => void;
  handleSaveCert: () => void;
  isNew?: boolean;
}

export const CertificationForm = ({ 
  editCertForm, 
  handleChangeCert, 
  handleCancelCert, 
  handleSaveCert,
  isNew = false
}: CertificationFormProps) => {
  return (
    <AnimatedEntry animation="scale-in">
      <BlurredCard 
        variant="outline"
        className="p-4 min-w-[250px]"
      >
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="cert-name" className="text-sm">Certification Name</Label>
            <Input
              id="cert-name"
              name="name"
              value={editCertForm?.name || ""}
              onChange={handleChangeCert}
              className="bg-white"
              placeholder="CFA, CFP, etc."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cert-issuer" className="text-sm">Issuing Organization</Label>
            <Input
              id="cert-issuer"
              name="issuer"
              value={editCertForm?.issuer || ""}
              onChange={handleChangeCert}
              className="bg-white"
              placeholder="Organization name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cert-year" className="text-sm">Year</Label>
            <Input
              id="cert-year"
              name="year"
              value={editCertForm?.year || ""}
              onChange={handleChangeCert}
              className="bg-white"
              type="number"
              placeholder="Year obtained"
            />
          </div>
          
          <div className="flex justify-end space-x-2 mt-2">
            <Button variant="outline" size="sm" onClick={handleCancelCert}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleSaveCert}>
              Save
            </Button>
          </div>
        </div>
      </BlurredCard>
    </AnimatedEntry>
  );
};
