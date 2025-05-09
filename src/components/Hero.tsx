"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Potential image paths to try
const imagePaths = [
  '/ewrwerwerwe (1).png',
  '/images/ewrwerwerwe (1).png',
  '/gorilla-backdrop.jpg',
  '/gorilla-backdrop.png',
  '/images/gorilla-backdrop.jpg',
  '/images/gorilla-backdrop.png'
];

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  // Function to check if an image exists
  const checkImage = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = document.createElement('img');
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  // Try to find a working image on component mount
  useEffect(() => {
    const findWorkingImage = async () => {
      for (const path of imagePaths) {
        const exists = await checkImage(path);
        if (exists) {
          setBackgroundImage(path);
          break;
        }
      }
      
      // Fallback to a gradient background if no images are found
      if (!backgroundImage) {
        console.warn('No gorilla background image found. Using fallback gradient.');
      }
    };

    findWorkingImage();
  }, [backgroundImage]);

  const backgroundStyle = backgroundImage 
    ? {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {
        background: 'linear-gradient(to bottom, #162328, #23253C)'
      };

  return (
    <section id="hero" 
      className="section-padding flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center text-center relative overflow-hidden" 
      style={backgroundStyle}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
      
      <div className="container-custom flex flex-col items-center z-10">
        <Badge variant="secondary" className="mb-6">The Epic Debate</Badge>
        <h1 className="max-w-4xl font-extrabold tracking-tight text-balance mb-4 text-white">
          100 Men <span className="text-white">vs</span> 1 Gorilla
        </h1>
        <p className="max-w-2xl text-lg mb-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-semibold">
          The ultimate showdown that divides the internet. Choose your fighter, back your side, join the movement.
        </p>
        
        {/* Thought Experiment Box */}
        <Card className="max-w-2xl mx-auto bg-black/60 backdrop-blur-sm border-border/30 mb-10 shadow-xl">
          <CardContent className="p-6">
            <p className="text-custom-subtle text-sm leading-relaxed italic">
              &ldquo;100 men versus a gorilla is a thought experiment concerning the winner of a hypothetical battle between one-hundred unarmed male humans and a silverback gorilla.&rdquo;
            </p>
          </CardContent>
        </Card>
        
        {/* Hero Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button size="lg" className="bg-custom-dark-blue hover:bg-custom-dark-blue/90" asChild>
            <a href="#vote">Cast Your Vote</a>
          </Button>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button size="lg" variant="outline" className="border-custom-gray/50 text-white" asChild>
                <a href="#how-to-buy">Get $GORILLA Token</a>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">$GORILLA Token</h4>
                  <p className="text-sm text-custom-subtle">
                    The official token of the 100 Men vs 1 Gorilla movement. Launching soon on Cardano!
                  </p>
                </div>
                <div className="h-16 w-16 relative">
                  <Image 
                    src="/werwerwe.png" 
                    alt="Gorilla Token" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="rounded-md"
                  />
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default Hero; 