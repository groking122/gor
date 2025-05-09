"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Vote = () => {
  // State for voting functionality
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [menVotes, setMenVotes] = useState<number>(427);
  const [gorillaVotes, setGorillaVotes] = useState<number>(589);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [voteMessage, setVoteMessage] = useState<string>("");

  // Calculate percentages for progress bars
  const totalVotes = menVotes + gorillaVotes;
  const menPercentage = Math.round((menVotes / totalVotes) * 100);
  const gorillaPercentage = Math.round((gorillaVotes / totalVotes) * 100);

  // Check if user has already voted using localStorage
  useEffect(() => {
    const storedVote = localStorage.getItem('gorillaVote');
    if (storedVote) {
      setSelectedOption(storedVote);
      setHasVoted(true);
    }
  }, []);

  // Function to handle vote submission
  const handleVote = () => {
    if (!selectedOption || hasVoted) return;
    
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      if (selectedOption === 'men') {
        setMenVotes(prevVotes => prevVotes + 1);
      } else {
        setGorillaVotes(prevVotes => prevVotes + 1);
      }
      
      // Save vote to localStorage
      localStorage.setItem('gorillaVote', selectedOption);
      setHasVoted(true);
      setIsLoading(false);
      setVoteMessage(`Thanks for voting for ${selectedOption === 'men' ? '100 Men' : '1 Gorilla'}!`);
    }, 1000);
  };

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
          
          {/* Vote Counts */}
          {hasVoted && (
            <div className="w-full max-w-md mt-4">
              <div className="flex justify-between text-sm text-custom-subtle mb-2">
                <span>100 Men: {menVotes} votes ({menPercentage}%)</span>
                <span>1 Gorilla: {gorillaVotes} votes ({gorillaPercentage}%)</span>
              </div>
              <div className="h-2 w-full bg-card rounded-full overflow-hidden flex">
                <div 
                  className="h-full bg-blue-400" 
                  style={{ width: `${menPercentage}%` }} 
                />
                <div 
                  className="h-full bg-accent" 
                  style={{ width: `${gorillaPercentage}%` }} 
                />
              </div>
              <p className="text-xs text-custom-subtle mt-2">
                Total votes: {totalVotes} • Live results
              </p>
            </div>
          )}
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
                onClick={() => !hasVoted && setSelectedOption('men')}
                disabled={hasVoted || isLoading}
              >
                {hasVoted && selectedOption === 'men' ? '✓ Voted' : 'Vote for Men'}
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
                onClick={() => !hasVoted && setSelectedOption('gorilla')}
                disabled={hasVoted || isLoading}
              >
                {hasVoted && selectedOption === 'gorilla' ? '✓ Voted' : 'Vote for Gorilla'}
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {selectedOption && !hasVoted && (
          <div className="mt-8 text-center">
            <p className="text-custom-subtle mb-4">
              You selected: <span className="font-semibold">{selectedOption === 'men' ? '100 Men' : '1 Gorilla'}</span>
            </p>
            <Button 
              onClick={handleVote} 
              className="bg-custom-dark-blue hover:bg-custom-dark-blue/90"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Confirm Vote'}
            </Button>
          </div>
        )}
        
        {hasVoted && (
          <div className="mt-8 text-center">
            <p className="text-custom-subtle">{voteMessage || `You voted for: ${selectedOption === 'men' ? '100 Men' : '1 Gorilla'}`}</p>
            <Button 
              variant="link" 
              className="text-custom-subtle mt-1 text-xs"
              onClick={() => {
                localStorage.removeItem('gorillaVote');
                setSelectedOption(null);
                setHasVoted(false);
                setVoteMessage("");
              }}
            >
              Reset Vote (Dev Only)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Vote; 