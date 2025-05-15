"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Download, Wallet, ExternalLink, Copy } from "lucide-react";

const HowToBuy = () => {
  return (
    <section id="how-to-buy" className="section-padding w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/werwerwe.png" 
          alt="Gorilla background" 
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
          <Badge variant="outline" className="mb-4">GET INVOLVED</Badge>
          <h2 className="text-3xl font-bold mb-4 text-white shadow-sm">Get Your $GORILLA Token</h2>
          <p className="text-lg text-white max-w-lg font-medium">
            $GORILLA is available on Solana DEXs.
          </p>
          <Separator className="my-6 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {/* Step 1: Download Phantom */}
          <Card className="card-shadow bg-card/85 backdrop-blur-md border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Download Phantom</CardTitle>
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">1</div>
              </div>
              <CardDescription className="text-custom-subtle">Get your wallet ready</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-custom-subtle">
                Download Phantom or your wallet of choice from the store. Desktop users, download the Google Chrome extension by going to phantom.app.
              </p>
            </CardContent>
          </Card>

          {/* Step 2: Get SOL */}
          <Card className="card-shadow bg-card/85 backdrop-blur-md border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Get some SOL</CardTitle>
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">2</div>
              </div>
              <CardDescription className="text-custom-subtle">Solana&apos;s native currency</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-custom-subtle">
                You can buy SOL directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.
              </p>
            </CardContent>
          </Card>

          {/* Step 3: Go to Raydium */}
          <Card className="card-shadow bg-card/85 backdrop-blur-md border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Go to Raydium</CardTitle>
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">3</div>
              </div>
              <CardDescription className="text-custom-subtle">Use a Solana DEX</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-custom-subtle">
                Now that you have some SOL, head to Raydium.io to swap your SOL for $GORILLA. Raydium is one of the top decentralized exchanges on Solana.
              </p>
            </CardContent>
          </Card>

          {/* Step 4: Buy $GORILLA */}
          <Card className="card-shadow bg-card/85 backdrop-blur-md border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Buy $GORILLA</CardTitle>
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">4</div>
              </div>
              <CardDescription className="text-custom-subtle">Make the swap</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-custom-subtle">
                Paste the $GORILLA token address (CA) into Raydium and swap your SOL for $GORILLA. There are zero taxes so you don&apos;t need to worry about slippage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Buttons in a single row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
          <Button variant="gradient" size="sm" className="h-12 flex items-center justify-center" asChild>
            <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2" />
              Download Phantom
            </a>
          </Button>

          <Button variant="neon" size="sm" className="h-12 flex items-center justify-center" asChild>
            <a href="https://www.binance.com/en/how-to-buy/solana" target="_blank" rel="noopener noreferrer">
              <Wallet className="mr-2" />
              Buy SOL
            </a>
          </Button>

          <Button variant="gradient" size="sm" className="h-12 flex items-center justify-center" asChild>
            <a href="https://raydium.io/swap" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2" />
              Open Raydium
            </a>
          </Button>

          <Button 
            variant="neon" 
            size="sm" 
            className="h-12 flex items-center justify-center"
            onClick={() => {
              navigator.clipboard.writeText("TOKEN_ADDRESS_HERE");
              alert("$GORILLA token address copied to clipboard!");
            }}
          >
            <Copy className="mr-2" />
            Copy Token Address
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy; 