import React, { useState } from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry, staggeredChildren } from "@/lib/animation";
import { Education, Certification } from "@/lib/types";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { GraduationCap, Award, Edit, Plus, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
  readOnly?: boolean;
  onUpdateEducation?: (education: Education[]) => void;
  onUpdateCertifications?: (certifications: Certification[]) => void;
}

export default function EducationSection({
  education,
  certifications,
  readOnly = true,
  onUpdateEducation = () => {},
  onUpdateCertifications = () => {},
}: EducationSectionProps) {
  const [editingEduId, setEditingEduId] = useState<string | null>(null);
  const [editingCertId, setEditingCertId] = useState<string | null>(null);
  const [editEduForm, setEditEduForm] = useState<Education | null>(null);
  const [editCertForm, setEditCertForm] = useState<Certification | null>(null);
  const [isNewEdu, setIsNewEdu] = useState(false);
  const [isNewCert, setIsNewCert] = useState(false);
  
  const getDelayEdu = staggeredChildren(100, 150);
  const getDelayCert = staggeredChildren(300, 150);
  
  const handleEditEdu = (edu: Education) => {
    setEditingEduId(edu.id);
    setEditEduForm({ ...edu });
  };
  
  const handleCancelEdu = () => {
    setEditingEduId(null);
    setEditEduForm(null);
    setIsNewEdu(false);
  };
  
  const handleSaveEdu = () => {
    if (!editEduForm) return;
    
    const formWithNumberYear = {
      ...editEduForm,
      year: Number(editEduForm.year)
    };
    
    const updatedEducation = isNewEdu 
      ? [...education, formWithNumberYear]
      : education.map(edu => edu.id === editingEduId ? formWithNumberYear : edu);
    
    onUpdateEducation(updatedEducation);
    setEditingEduId(null);
    setEditEduForm(null);
    setIsNewEdu(false);
  };
  
  const handleChangeEdu = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editEduForm) return;
    
    const { name, value } = e.target;
    setEditEduForm({
      ...editEduForm,
      [name]: value
    });
  };
  
  const handleAddEdu = () => {
    const newEdu: Education = {
      id: `temp-edu-${Date.now()}`,
      institution: "",
      degree: "",
      fieldOfStudy: "",
      year: 0
    };
    
    setEditEduForm(newEdu);
    setEditingEduId(newEdu.id);
    setIsNewEdu(true);
  };
  
  const handleDeleteEdu = (id: string) => {
    const updatedEducation = education.filter(edu => edu.id !== id);
    onUpdateEducation(updatedEducation);
  };
  
  const handleEditCert = (cert: Certification) => {
    setEditingCertId(cert.id);
    setEditCertForm({ ...cert });
  };
  
  const handleCancelCert = () => {
    setEditingCertId(null);
    setEditCertForm(null);
    setIsNewCert(false);
  };
  
  const handleSaveCert = () => {
    if (!editCertForm) return;
    
    const formWithNumberYear = {
      ...editCertForm,
      year: Number(editCertForm.year)
    };
    
    const updatedCertifications = isNewCert 
      ? [...certifications, formWithNumberYear]
      : certifications.map(cert => cert.id === editingCertId ? formWithNumberYear : cert);
    
    onUpdateCertifications(updatedCertifications);
    setEditingCertId(null);
    setEditCertForm(null);
    setIsNewCert(false);
  };
  
  const handleChangeCert = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editCertForm) return;
    
    const { name, value } = e.target;
    setEditCertForm({
      ...editCertForm,
      [name]: value
    });
  };
  
  const handleAddCert = () => {
    const newCert: Certification = {
      id: `temp-cert-${Date.now()}`,
      name: "",
      issuer: "",
      year: 0
    };
    
    setEditCertForm(newCert);
    setEditingCertId(newCert.id);
    setIsNewCert(true);
  };
  
  const handleDeleteCert = (id: string) => {
    const updatedCertifications = certifications.filter(cert => cert.id !== id);
    onUpdateCertifications(updatedCertifications);
  };
  
  return (
    <div className="space-y-8">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AnimatedIcon icon={GraduationCap} size={20} animation="float" />
            <h3 className="text-lg font-medium">Education</h3>
          </div>
          
          {!readOnly && !editingEduId && (
            <Button 
              variant="outline" 
              size="sm"
              className="gap-1"
              onClick={handleAddEdu}
            >
              <Plus size={14} />
              <span>Add Education</span>
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu) => (
            <AnimatedEntry
              key={edu.id}
              animation="slide-in"
              delay={getDelayEdu()}
            >
              {editingEduId === edu.id ? (
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
              ) : (
                <BlurredCard 
                  variant="outline" 
                  padding="md" 
                  hover={true}
                >
                  {!readOnly && (
                    <div className="absolute top-3 right-3 flex space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleEditEdu(edu)}
                      >
                        <Edit size={14} />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleDeleteEdu(edu.id)}
                      >
                        <X size={14} />
                      </Button>
                    </div>
                  )}
                
                  <div className="space-y-2">
                    <h4 className="font-medium text-base">{edu.institution}</h4>
                    <div className="text-sm text-gray-700">
                      {edu.degree} in {edu.fieldOfStudy}
                    </div>
                    <div className="text-sm text-gray-500">{edu.year}</div>
                  </div>
                </BlurredCard>
              )}
            </AnimatedEntry>
          ))}
          
          {!readOnly && !editingEduId && education.length === 0 && (
            <AnimatedEntry animation="fade-in" delay={getDelayEdu()}>
              <BlurredCard
                variant="outline"
                className="flex items-center justify-center h-full border-dashed cursor-pointer hover:bg-gray-50/50"
                onClick={handleAddEdu}
              >
                <span className="text-sm text-gray-500">+ Add Education</span>
              </BlurredCard>
            </AnimatedEntry>
          )}
        </div>
      </div>
      
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AnimatedIcon icon={Award} size={20} animation="float" />
            <h3 className="text-lg font-medium">Certifications</h3>
          </div>
          
          {!readOnly && !editingCertId && (
            <Button 
              variant="outline" 
              size="sm"
              className="gap-1"
              onClick={handleAddCert}
            >
              <Plus size={14} />
              <span>Add Certification</span>
            </Button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <AnimatedEntry
              key={cert.id}
              animation="scale-in"
              delay={getDelayCert()}
            >
              {editingCertId === cert.id ? (
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
              ) : (
                <BlurredCard 
                  variant="outline"
                  className="py-3 px-4 min-w-[190px] relative"
                >
                  {!readOnly && (
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleEditCert(cert)}
                      >
                        <Edit size={12} />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleDeleteCert(cert.id)}
                      >
                        <X size={12} />
                      </Button>
                    </div>
                  )}
                  
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{cert.name}</span>
                    <span className="text-xs text-gray-500 mt-1">{cert.issuer}, {cert.year}</span>
                  </div>
                </BlurredCard>
              )}
            </AnimatedEntry>
          ))}
          
          {!readOnly && !editingCertId && certifications.length === 0 && (
            <AnimatedEntry animation="scale-in" delay={getDelayCert()}>
              <BlurredCard
                variant="outline"
                className="py-3 px-4 border-dashed flex items-center justify-center cursor-pointer min-w-[190px]"
                onClick={handleAddCert}
              >
                <span className="text-sm text-gray-500">+ Add Certification</span>
              </BlurredCard>
            </AnimatedEntry>
          )}
        </div>
      </div>
    </div>
  );
}
