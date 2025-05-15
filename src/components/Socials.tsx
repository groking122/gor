"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Socials = () => {
  return (
    <section id="socials" className="section-padding w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/rtrtre.png" 
          alt="Gorilla social background" 
          fill 
          quality={100}
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/60 to-card/40 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <Badge variant="outline" className="mb-4">COMMUNITY</Badge>
          <h2 className="text-3xl font-bold mb-4 text-white shadow-sm">Join The Movement</h2>
          <p className="text-lg text-white max-w-lg font-medium">
            Connect with fellow enthusiasts, get updates, and join the conversation.
          </p>
          <Separator className="my-6 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {/* Twitter Card */}
          <Card className="overflow-hidden group hover:border-accent/50 transition-all bg-card/85 backdrop-blur-md border-blue-400/20">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/10 mb-4 group-hover:scale-110 transition-transform">
                <svg 
                  className="w-6 h-6 text-[#1DA1F2]" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Twitter (X)</h3>
              <p className="text-sm text-custom-subtle mb-4">@Just1Gorilla</p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://x.com/Just1Gorilla" target="_blank" rel="noopener noreferrer">
                  Follow Us
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* TikTok Card */}
          <Card className="overflow-hidden group hover:border-accent/50 transition-all bg-card/85 backdrop-blur-md border-blue-400/20">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/10 mb-4 group-hover:scale-110 transition-transform">
                <svg 
                  className="w-6 h-6 text-black dark:text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">TikTok</h3>
              <p className="text-sm text-custom-subtle mb-4">#100menvsgorilla</p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://www.tiktok.com/tag/100menvsgorilla" target="_blank" rel="noopener noreferrer">
                  View Videos
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Solscan Card */}
          <Card className="overflow-hidden group hover:border-accent/50 transition-all sm:col-span-2 md:col-span-1 bg-card/85 backdrop-blur-md border-blue-400/20">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-500/10 mb-4 group-hover:scale-110 transition-transform">
                <svg 
                  className="w-6 h-6 text-[#9945FF]" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m16 0V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11"/>
                  <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Solscan</h3>
              <p className="text-sm text-custom-subtle mb-4">Verify token & transactions</p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://solscan.io" target="_blank" rel="noopener noreferrer">
                  View Token
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Socials; 