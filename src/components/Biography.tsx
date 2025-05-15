"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Save, Send, Plus } from "lucide-react";

// Form validation types
type FormData = {
  fullName: string;
  age: string;
  weight: string;
  experience: string;
  disciplines: string;
  strategy: string;
}

type FormErrors = {
  [key in keyof FormData]?: string;
}

// Component to render just the form part, client-side only
const ApplicationForm = ({ 
  formData, 
  errors, 
  handleChange, 
  handleSubmit, 
  handleSaveDraft, 
  isSubmitting 
}: {
  formData: FormData,
  errors: FormErrors,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  handleSubmit: (e: React.FormEvent) => void,
  handleSaveDraft: () => void,
  isSubmitting: boolean
}) => {
  return (
    <form onSubmit={handleSubmit} suppressHydrationWarning>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">Fighter Application Form</CardTitle>
            <CardDescription className="text-custom-subtle mt-1">All fields required</CardDescription>
          </div>
          <div className="px-3 py-1 rounded-full bg-accent/20 text-xs text-accent font-medium">
            REF: #GORILLA-2025
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Email-like header */}
        <div className="border-b border-border/40 pb-4 text-sm">
          <div className="grid grid-cols-[100px_1fr] gap-2">
            <span className="text-custom-subtle">From:</span>
            <span className="text-white">applications@100menvsgorilla.com</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-2 mt-1">
            <span className="text-custom-subtle">To:</span>
            <span className="text-white">menvsgorilla@fight.com</span>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-2 mt-1">
            <span className="text-custom-subtle">Subject:</span>
            <span className="text-white font-medium">Fighter Credentials Required</span>
          </div>
        </div>
        
        {/* Message body */}
        <div className="text-custom-subtle">
          <p className="mb-4">
            Dear Applicant,
          </p>
          <p className="mb-4">
            Thank you for your interest in joining the human team for the ultimate 100 Men vs 1 Gorilla showdown. To process your application, we need you to provide your fighting credentials.
          </p>
        </div>
        
        {/* Application form fields */}
        <div className="space-y-4 bg-background/20 p-4 rounded-md">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-white">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 bg-background/50 border rounded-md text-white placeholder-custom-subtle/50 focus:outline-none focus:ring-1 focus:ring-accent"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="age" className="block text-sm font-medium text-white">
                Age <span className="text-xs text-custom-subtle">(18-60)</span>
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Years"
                className="w-full px-3 py-2 bg-background/50 border rounded-md text-white placeholder-custom-subtle/50 focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="weight" className="block text-sm font-medium text-white">
                Weight
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="lbs"
                className="w-full px-3 py-2 bg-background/50 border rounded-md text-white placeholder-custom-subtle/50 focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="experience" className="block text-sm font-medium text-white">
              Combat Experience
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-background/50 border rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="" disabled>Select your experience level</option>
              <option value="novice">Novice (0-2 years)</option>
              <option value="intermediate">Intermediate (3-5 years)</option>
              <option value="advanced">Advanced (6-10 years)</option>
              <option value="expert">Expert (10+ years)</option>
              <option value="professional">Professional Fighter</option>
            </select>
            {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="disciplines" className="block text-sm font-medium text-white">
              Combat Disciplines
            </label>
            <textarea
              id="disciplines"
              name="disciplines"
              value={formData.disciplines}
              onChange={handleChange}
              placeholder="List any martial arts or combat sports experience"
              className="w-full px-3 py-2 bg-background/50 border rounded-md text-white placeholder-custom-subtle/50 focus:outline-none focus:ring-1 focus:ring-accent h-24"
            ></textarea>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="strategy" className="block text-sm font-medium text-white">
              Your Strategy Against the Gorilla
            </label>
            <textarea
              id="strategy"
              name="strategy"
              value={formData.strategy}
              onChange={handleChange}
              placeholder="Explain your strategy and strengths"
              className="w-full px-3 py-2 bg-background/50 border rounded-md text-white placeholder-custom-subtle/50 focus:outline-none focus:ring-1 focus:ring-accent h-32"
            ></textarea>
            {errors.strategy && <p className="text-red-500 text-xs mt-1">{errors.strategy}</p>}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0">
        <Button 
          type="button" 
          variant="brutalism" 
          onClick={handleSaveDraft}
          className="hover:bg-gray-50"
        >
          <Save className="mr-1" />
          Save Draft
        </Button>
        <Button 
          type="submit" 
          variant="gradient"
          className="hover:shadow-xl"
          disabled={isSubmitting}
        >
          <Send className="mr-1" />
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </CardFooter>
    </form>
  );
};

const Biography = () => {
  // Form state management
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    weight: '',
    experience: '',
    disciplines: '',
    strategy: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState('');
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 18 || Number(formData.age) > 60) {
      newErrors.age = 'Age must be between 18-60';
    }
    
    if (!formData.weight.trim()) {
      newErrors.weight = 'Weight is required';
    }
    
    if (!formData.experience) {
      newErrors.experience = 'Please select experience level';
    }
    
    if (!formData.strategy.trim()) {
      newErrors.strategy = 'Please provide your strategy';
    } else if (formData.strategy.length < 20) {
      newErrors.strategy = 'Strategy must be more detailed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate a random application number
      const appNumber = `GORILLA-${Math.floor(1000 + Math.random() * 9000)}`;
      setApplicationNumber(appNumber);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Save application to localStorage
      localStorage.setItem('gorillaApplication', JSON.stringify({
        ...formData,
        applicationNumber: appNumber,
        date: new Date().toISOString()
      }));
    }, 1500);
  };
  
  // Handle saving draft
  const handleSaveDraft = () => {
    localStorage.setItem('gorillaApplicationDraft', JSON.stringify(formData));
    alert('Application draft saved successfully!');
  };

  return (
    <section id="biography" className="section-padding w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/ewrwer.png" 
          alt="Gorilla landscape background" 
          fill 
          quality={100}
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/60 to-card/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <Badge variant="outline" className="mb-4">FIGHTER CREDENTIALS</Badge>
          <h2 className="text-3xl font-bold mb-4 text-white shadow-sm">Join the Battle</h2>
          <p className="text-lg text-white max-w-2xl font-medium">
            Submit your fighting credentials to participate in the ultimate 100 Men vs 1 Gorilla showdown.
          </p>
          <Separator className="mt-8 mb-10 max-w-md mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <Card className="card-shadow bg-card/90 backdrop-blur-md border-accent/20">
              <CardHeader>
                <CardTitle className="text-white">Application Received</CardTitle>
                <CardDescription className="text-custom-subtle">Thank you for your submission</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-custom-dark-blue/20 p-6 rounded-md">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center text-white mb-2">Application Successful!</h3>
                  <p className="text-custom-subtle text-center mb-4">
                    Your fighter credentials have been received and are being reviewed by our team.
                  </p>
                  
                  <div className="bg-background/20 p-3 rounded-md text-center mb-4">
                    <p className="text-sm text-custom-subtle">Application Reference</p>
                    <p className="text-lg font-mono font-bold text-accent">{applicationNumber}</p>
                  </div>
                  
                  <p className="text-sm text-custom-subtle text-center">
                    Please keep this reference number safe. We will contact you at the email address provided 
                    with further instructions on joining the human team.
                  </p>
                </div>
                
                <div className="text-sm text-custom-subtle">
                  <p>
                    What happens next?
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Our team will review your application</li>
                    <li>You will be contacted for physical assessment</li>
                    <li>Training regimen and team assignments will be provided</li>
                    <li>Preparation for the ultimate showdown begins</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  className="hover:shadow-xl" 
                  variant="neon"
                  onClick={() => {
                    localStorage.removeItem('gorillaApplication');
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      age: '',
                      weight: '',
                      experience: '',
                      disciplines: '',
                      strategy: ''
                    });
                  }}
                >
                  <Plus className="mr-1" />
                  Submit Another Application
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="card-shadow bg-card/90 backdrop-blur-md border-accent/20">
              {isClient ? (
                <ApplicationForm 
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  handleSaveDraft={handleSaveDraft}
                  isSubmitting={isSubmitting}
                />
              ) : (
                <div className="p-8 text-center">
                  <div className="animate-pulse">
                    <div className="h-6 bg-accent/20 rounded w-1/2 mx-auto mb-4"></div>
                    <div className="h-4 bg-accent/10 rounded w-3/4 mx-auto mb-8"></div>
                    <div className="h-32 bg-accent/10 rounded mb-4"></div>
                    <div className="h-32 bg-accent/10 rounded mb-4"></div>
                  </div>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Biography; 