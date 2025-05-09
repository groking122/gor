"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Vote = () => {
  // Basic state for voting - will be implemented in a future version
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  return (
    <section id="vote" className="section-padding w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/werffew.png" 
          alt="Combat arena background" 
          fill 
          quality={100}
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/60 to-card/40 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <Badge variant="outline" className="mb-4">COMMUNITY POLL</Badge>
          <h2 className="text-3xl font-bold mb-4 text-white shadow-sm">Choose Your Fighter!</h2>
          <p className="text-lg text-custom-subtle mb-6">
            The age-old question that divides the internet. Cast your vote and join the epic debate.
          </p>
          <Separator className="my-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 100 Men Card */}
          <Card className={`border-2 overflow-hidden transition-all duration-300 bg-card/85 backdrop-blur-sm ${selectedOption === 'men' ? 'border-blue-400' : 'border-transparent'}`}>
            <CardHeader className="bg-blue-500/10 pb-2">
              <CardTitle>100 Men</CardTitle>
              <CardDescription className="text-custom-subtle">Strength in numbers</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-2">
              <div className="aspect-video mb-6 rounded-md relative overflow-hidden">
                <Image 
                  src="/ewwe.png" 
                  alt="100 Men Squad"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <ul className="space-y-2 text-sm text-custom-subtle">
                <li className="flex items-center">
                  <span className="mr-2">👥</span> 100x the manpower
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🧠</span> Strategic coordination
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔧</span> Potential for tools
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => setSelectedOption('men')}
              >
                Vote for Men
              </Button>
            </CardFooter>
          </Card>
          
          {/* 1 Gorilla Card */}
          <Card className={`border-2 overflow-hidden transition-all duration-300 bg-card/85 backdrop-blur-sm ${selectedOption === 'gorilla' ? 'border-accent' : 'border-transparent'}`}>
            <CardHeader className="bg-custom-dark-blue/30 pb-2">
              <CardTitle>1 Gorilla</CardTitle>
              <CardDescription className="text-custom-subtle">Raw primal power</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-2">
              <div className="aspect-video mb-6 rounded-md relative overflow-hidden">
                <Image 
                  src="/rgrgr.png" 
                  alt="Silverback Gorilla"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <ul className="space-y-2 text-sm text-custom-subtle">
                <li className="flex items-center">
                  <span className="mr-2">💪</span> 5-10x human strength
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🦍</span> Thick hide, natural weapons
                </li>
                <li className="flex items-center">
                  <span className="mr-2">👑</span> Apex predator instincts
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90" 
                onClick={() => setSelectedOption('gorilla')}
              >
                Vote for Gorilla
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {selectedOption && (
          <div className="mt-8 text-center">
            <p className="text-sm text-custom-subtle">
              You voted for: <span className="font-semibold">{selectedOption === 'men' ? '100 Men' : '1 Gorilla'}</span>
            </p>
            <p className="text-xs text-custom-subtle mt-2">
              Full voting system with live results coming soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Vote; 