"use client";

import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const tokenAddress = "FVL6GafaXTfgFs9DPE66b2AVUXLBcVpQh79r8s5npump";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      alert('$GORILLA token address copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy token address.');
    }
  };

  return (
    <footer className="w-full border-t border-border/40 bg-gradient-to-r from-primary/90 to-primary backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container-custom py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-md relative ring-2 ring-white/10 shadow-lg">
              <Image 
                src="/213123122131.png" 
                alt="Gorilla Logo" 
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <Badge variant="glass" className="uppercase tracking-wider mb-2 self-start">Official</Badge>
              <p className="text-sm bg-gradient-to-r from-[#00FFFF] to-white bg-clip-text text-transparent font-semibold">
                The ultimate showdown that divides the internet.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="font-medium font-mono text-sm text-white">$GORILLA Token Address</div>
            <div className="flex items-center gap-2">
              <code className="text-xs bg-black/50 p-2 rounded-md text-custom-subtle truncate font-mono border border-white/10 max-w-48">
                {tokenAddress}
              </code>
              <Button
                onClick={handleCopy}
                variant="neon"
                size="sm"
                className="whitespace-nowrap h-8"
              >
                <Copy className="mr-1 h-3 w-3" />
                Copy
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 opacity-20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-custom-subtle text-center md:text-left">
            &copy; {year} JustAGorilla. All memes reserved.
          </p>
          <p className="text-xs text-custom-subtle text-center md:text-right">
            This is a meme token. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 