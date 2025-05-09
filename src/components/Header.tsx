"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-gradient-to-r from-primary/95 to-primary/90 backdrop-blur-md supports-[backdrop-filter]:bg-primary/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 overflow-hidden rounded-md relative shadow-lg ring-2 ring-white/10 transition-all duration-300 hover:ring-white/30">
            <img 
              src="/213123122131.png" 
              alt="Gorilla Logo" 
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <Badge variant="glass" className="uppercase tracking-wider hidden sm:inline-flex font-bold px-3 py-1.5 border-white/20 shadow-none text-white">100 Men vs 1 Gorilla</Badge>
        </div>
        <nav className="glass-effect px-4 py-2 rounded-full border border-white/10">
          <ul className="flex items-center space-x-1 md:space-x-2">
            <li><Button variant="ghost" size="sm" asChild className="font-medium"><a href="#hero">Home</a></Button></li>
            <li><Button variant="ghost" size="sm" asChild className="font-medium"><a href="#socials">Socials</a></Button></li>
            <li><Button variant="ghost" size="sm" asChild className="font-medium"><a href="#how-to-buy">Buy</a></Button></li>
            <li><Button variant="ghost" size="sm" asChild className="font-medium"><a href="#vote">Vote</a></Button></li>
            <li><Button variant="ghost" size="sm" asChild className="font-medium"><a href="#biography">Apply</a></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 