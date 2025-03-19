
import React, { useState } from "react";
import { AnimatedEntry, staggeredChildren } from "@/lib/animation";
import { Education, Certification } from "@/lib/types";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { GraduationCap, Award, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { EducationForm } from "./EducationForm";
import { EducationCard } from "./EducationCard";
import { CertificationForm } from "./CertificationForm";
import { CertificationCard } from "./CertificationCard";

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
  
  // Education handlers
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
      year: new Date().getFullYear()
    };
    
    setEditEduForm(newEdu);
    setEditingEduId(newEdu.id);
    setIsNewEdu(true);
  };
  
  const handleDeleteEdu = (id: string) => {
    const updatedEducation = education.filter(edu => edu.id !== id);
    onUpdateEducation(updatedEducation);
  };
  
  // Certification handlers
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
      year: new Date().getFullYear()
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
          
          {!readOnly && !editingEduId && !isNewEdu && (
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
            editingEduId === edu.id ? (
              <EducationForm
                key={edu.id}
                editEduForm={editEduForm}
                handleChangeEdu={handleChangeEdu}
                handleCancelEdu={handleCancelEdu}
                handleSaveEdu={handleSaveEdu}
              />
            ) : (
              <EducationCard
                key={edu.id}
                education={edu}
                handleEdit={handleEditEdu}
                handleDelete={handleDeleteEdu}
                readOnly={readOnly}
                delay={getDelayEdu()}
              />
            )
          ))}
          
          {/* Show form when adding a new education */}
          {isNewEdu && (
            <EducationForm
              editEduForm={editEduForm}
              handleChangeEdu={handleChangeEdu}
              handleCancelEdu={handleCancelEdu}
              handleSaveEdu={handleSaveEdu}
              isNew={true}
            />
          )}
          
          {!readOnly && !editingEduId && education.length === 0 && !isNewEdu && (
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
          
          {!readOnly && !editingCertId && !isNewCert && (
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
            editingCertId === cert.id ? (
              <CertificationForm
                key={cert.id}
                editCertForm={editCertForm}
                handleChangeCert={handleChangeCert}
                handleCancelCert={handleCancelCert}
                handleSaveCert={handleSaveCert}
              />
            ) : (
              <CertificationCard
                key={cert.id}
                certification={cert}
                handleEdit={handleEditCert}
                handleDelete={handleDeleteCert}
                readOnly={readOnly}
                delay={getDelayCert()}
              />
            )
          ))}
          
          {/* Show form when adding a new certification */}
          {isNewCert && (
            <CertificationForm
              editCertForm={editCertForm}
              handleChangeCert={handleChangeCert}
              handleCancelCert={handleCancelCert}
              handleSaveCert={handleSaveCert}
              isNew={true}
            />
          )}
          
          {!readOnly && !editingCertId && certifications.length === 0 && !isNewCert && (
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
