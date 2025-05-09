"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Biography = () => {
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
          <Badge variant="outline" className="mb-4">LORE</Badge>
          <h2 className="text-3xl font-bold mb-4 text-white shadow-sm">Tale of the Tape</h2>
          <p className="text-lg text-white max-w-2xl font-medium">
            An analysis of the two contenders in the ultimate showdown that has divided the internet.
          </p>
          <Separator className="mt-8 mb-10 max-w-md mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 100 Men Card */}
          <Card className="card-shadow bg-card/85 backdrop-blur-md border-blue-400/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-400">The 100 Men</CardTitle>
              <CardDescription className="text-custom-subtle">The human collective</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="grid grid-cols-[120px_1fr] items-start border-b border-border/40 pb-2">
                  <span className="font-medium">Avg Height:</span>
                  <span className="text-custom-subtle">5&apos;9&quot; (175 cm)</span>
                </li>
                <li className="grid grid-cols-[120px_1fr] items-start border-b border-border/40 pb-2">
                  <span className="font-medium">Avg Weight:</span>
                  <span className="text-custom-subtle">170 lbs (77 kg)</span>
                </li>
                <li className="grid grid-cols-[120px_1fr] items-start border-b border-border/40 pb-2">
                  <span className="font-medium">Abilities:</span>
                  <span className="text-custom-subtle">Numbers, planning, tool creation, communication</span>
                </li>
                <li className="grid grid-cols-[120px_1fr] items-start border-b border-border/40 pb-2">
                  <span className="font-medium">Weakness:</span>
                  <span className="text-custom-subtle">Individual frailty, potential for chaos</span>
                </li>
              </ul>
              
              <div className="rounded-md bg-blue-500/5 p-3 text-sm italic text-custom-subtle">
                &ldquo;Unity is strength. A coordinated human force can overcome almost any obstacle through strategy and persistence.&rdquo;
              </div>
            </CardContent>
          </Card>

          {/* Gorilla Card */}
          <Card className="card-shadow bg-card/85 backdrop-blur-md border-accent/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-accent">The Gorilla</CardTitle>
              <CardDescription className="text-custom-subtle">The primal force</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="grid grid-cols-[120px_1fr] items-start border-b border-border/40 pb-2">
                  <span className="font-medium">Height:</span>
                  <span className="text-custom-subtle">5&apos;6&quot; standing (1.7m), significantly larger when charging</span>
                </li>
                <li className="grid grid-cols-[120px_1fr] items-start border-b border-border/40 pb-2">
                  <span className="font-medium">Weight:</span>
                  <span className="text-custom-subtle">400+ lbs (180+ kg) of muscle</span>
                </li>
                <li className="grid grid-cols-[120px_1fr] items-start border-b border-border/40 pb-2">
                  <span className="font-medium">Abilities:</span>
                  <span className="text-custom-subtle">Immense strength (5-10x human), thick hide, natural weapons</span>
                </li>
                <li className="grid grid-cols-[120px_1fr] items-start border-b border-border/40 pb-2">
                  <span className="font-medium">Weakness:</span>
                  <span className="text-custom-subtle">Lone fighter, no complex strategy</span>
                </li>
              </ul>
              
              <div className="rounded-md bg-custom-dark-blue/20 p-3 text-sm italic text-custom-subtle">
                &ldquo;In the jungle, raw power is supreme. A silverback gorilla represents nature&rsquo;s perfect balance of strength, agility, and primal rage.&rdquo;
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Biography; 