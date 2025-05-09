"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const year = new Date().getFullYear();
  const contractAddress = "TBA - Coming Soon!"; // Contract placeholder

  const handleCopy = async () => {
    if (contractAddress.startsWith("TBA")) {
      alert("Contract address is not yet available. Stay tuned!");
      return;
    }
    try {
      await navigator.clipboard.writeText(contractAddress);
      alert('Contract address copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy contract address.');
    }
  };

  return (
    <footer className="w-full border-t border-border/40 bg-primary/80 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container-custom py-6 md:py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">JUSTAGORILLA</h3>
            <p className="text-sm text-custom-subtle">
              The ultimate showdown that divides the internet.
            </p>
          </div>
          
          <div className="md:text-right space-y-2">
            <h3 className="text-lg font-medium">Contract (Coming Soon)</h3>
            <div className="flex md:flex-row-reverse md:justify-start items-center gap-2">
              <Button
                onClick={handleCopy}
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
              >
                Copy
              </Button>
              <code className="text-xs bg-primary/50 p-2 rounded text-custom-subtle flex-1 truncate">
                {contractAddress}
              </code>
            </div>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
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