
import React, { useState } from "react";
import { BlurredCard } from "@/components/ui/BlurredCard";
import { AnimatedEntry, staggeredChildren } from "@/lib/animation";
import { Experience } from "@/lib/types";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { Calendar, Briefcase, Edit, Plus, Save, X } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ExperienceProps {
  experiences: Experience[];
  readOnly?: boolean;
  onUpdate?: (experiences: Experience[]) => void;
}

export default function ExperienceSection({
  experiences,
  readOnly = true,
  onUpdate = () => {},
}: ExperienceProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Experience | null>(null);
  const [newExperience, setNewExperience] = useState(false);
  
  const getDelay = staggeredChildren(100, 200);
  
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present";
    try {
      return format(parseISO(dateString), "MMM yyyy");
    } catch (e) {
      return dateString;
    }
  };
  
  const handleEdit = (experience: Experience) => {
    setEditingId(experience.id);
    setEditForm({ ...experience });
  };
  
  const handleCancel = () => {
    setEditingId(null);
    setEditForm(null);
    setNewExperience(false);
  };
  
  const handleSave = () => {
    if (!editForm) return;
    
    const updatedExperiences = newExperience 
      ? [...experiences, editForm]
      : experiences.map(exp => exp.id === editingId ? editForm : exp);
    
    onUpdate(updatedExperiences);
    setEditingId(null);
    setEditForm(null);
    setNewExperience(false);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editForm) return;
    
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value
    });
  };
  
  const handleTogglePresent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editForm) return;
    
    const isPresent = e.target.checked;
    setEditForm({
      ...editForm,
      isPresent,
      endDate: isPresent ? null : editForm.endDate
    });
  };
  
  const handleAddNew = () => {
    // Create a new experience with a temporary ID
    const newExp: Experience = {
      id: `temp-${Date.now()}`,
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      isPresent: false,
      description: ""
    };
    
    setEditForm(newExp);
    setEditingId(newExp.id);
    setNewExperience(true);
  };
  
  const handleDelete = (id: string) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== id);
    onUpdate(updatedExperiences);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <AnimatedIcon icon={Briefcase} size={20} animation="float" />
          <h3 className="text-lg font-medium">Work Experience</h3>
        </div>
        
        {!readOnly && !editingId && (
          <Button 
            variant="outline" 
            size="sm"
            className="gap-1"
            onClick={handleAddNew}
          >
            <Plus size={14} />
            <span>Add Experience</span>
          </Button>
        )}
      </div>
      
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <AnimatedEntry
            key={experience.id}
            animation="slide-in"
            delay={getDelay()}
            className="relative pl-6 pb-6"
          >
            {/* Timeline dot and line */}
            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-citec-blue"></div>
            {index < experiences.length - 1 && (
              <div className="absolute left-1.5 top-4 bottom-0 w-px bg-gray-200"></div>
            )}
            
            {editingId === experience.id ? (
              <BlurredCard 
                variant="outline" 
                padding="md"
                className="relative"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Position Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={editForm?.title || ""}
                        onChange={handleChange}
                        className="bg-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={editForm?.company || ""}
                        onChange={handleChange}
                        className="bg-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="month"
                        value={editForm?.startDate || ""}
                        onChange={handleChange}
                        className="bg-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date</Label>
                      <div className="flex items-center gap-3">
                        <Input
                          id="endDate"
                          name="endDate"
                          type="month"
                          value={editForm?.endDate || ""}
                          onChange={handleChange}
                          disabled={editForm?.isPresent}
                          className="bg-white flex-1"
                        />
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="isPresent"
                            checked={editForm?.isPresent || false}
                            onChange={handleTogglePresent}
                          />
                          <Label htmlFor="isPresent" className="text-sm">Current</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={editForm?.description || ""}
                      onChange={handleChange}
                      className="bg-white min-h-[100px]"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button size="sm" onClick={handleSave}>
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
                className="relative"
              >
                {!readOnly && (
                  <div className="absolute top-3 right-3 flex space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => handleEdit(experience)}
                    >
                      <Edit size={14} />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => handleDelete(experience.id)}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                )}
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg font-medium">{experience.title}</h4>
                    <div className="text-citec-blue font-medium">{experience.company}</div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1.5" />
                    <span>
                      {formatDate(experience.startDate)} - {experience.isPresent ? "Present" : formatDate(experience.endDate)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </BlurredCard>
            )}
          </AnimatedEntry>
        ))}
        
        {!readOnly && !editingId && experiences.length === 0 && (
          <AnimatedEntry animation="fade-in" delay={getDelay()} className="mt-4">
            <button 
              className="premium-button-secondary w-full"
              onClick={handleAddNew}
            >
              + Add Work Experience
            </button>
          </AnimatedEntry>
        )}
      </div>
    </div>
  );
}
