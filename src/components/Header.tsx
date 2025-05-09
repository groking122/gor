"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container-custom flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 rounded-md">
            <AvatarImage src="/gorilla-logo.png" alt="Gorilla Logo" />
            <AvatarFallback className="rounded-md bg-accent text-accent-foreground">GO</AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-bold">JustAGorilla</h1>
        </div>
        <nav>
          <ul className="flex items-center space-x-1 md:space-x-2">
            <li><Button variant="ghost" size="sm" asChild><a href="#hero">Home</a></Button></li>
            <li><Button variant="ghost" size="sm" asChild><a href="#socials">Socials</a></Button></li>
            <li><Button variant="ghost" size="sm" asChild><a href="#how-to-buy">Buy</a></Button></li>
            <li><Button variant="ghost" size="sm" asChild><a href="#vote">Vote</a></Button></li>
            <li><Button variant="ghost" size="sm" asChild><a href="#biography">Lore</a></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 