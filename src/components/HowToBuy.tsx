"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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
            $GORILLA is available on Cardano DEXs.
          </p>
          <Separator className="my-6 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Step 1: Get a Cardano Wallet */}
          <Card className="card-shadow bg-card/85 backdrop-blur-md border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Get a Cardano Wallet</CardTitle>
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">1</div>
              </div>
              <CardDescription className="text-custom-subtle">First step to join the battle</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-custom-subtle">
                A Cardano wallet enables you to receive, send, and manage your cryptocurrencies on the Cardano blockchain. 
                We recommend using VESPR, a popular and easy-to-use wallet that works on both mobile and desktop.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://vespr.xyz/download" target="_blank" rel="noopener noreferrer">
                  Download VESPR
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Step 2: Get ADA */}
          <Card className="card-shadow bg-card/85 backdrop-blur-md border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Get ADA</CardTitle>
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">2</div>
              </div>
              <CardDescription className="text-custom-subtle">Cardano&apos;s native currency</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-custom-subtle">
                ADA is Cardano&apos;s native cryptocurrency and is used to trade for $GORILLA. 
                You can buy ADA directly from VESPR wallet or get it through a centralized exchange 
                like Binance and then transfer to your wallet.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://vespr.xyz/buy" target="_blank" rel="noopener noreferrer">
                  Buy ADA on VESPR
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Step 3: Swap ADA for $GORILLA */}
          <Card className="card-shadow bg-card/85 backdrop-blur-md border-accent/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Swap for $GORILLA</CardTitle>
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">3</div>
              </div>
              <CardDescription className="text-custom-subtle">Make the final exchange</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-custom-subtle">
                We recommend using DexHunter, as it finds the best price route for your swap by 
                aggregating all the major liquidity sources on Cardano. Simply connect your VESPR 
                wallet and swap ADA for $GORILLA.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://app.dexhunter.io/" target="_blank" rel="noopener noreferrer">
                  Buy on DexHunter
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Policy ID Box */}
        <div className="mt-8 max-w-lg mx-auto">
          <Card className="bg-primary/75 backdrop-blur-md border-accent/20">
            <CardContent className="pt-6">
              <div className="text-center mb-1">
                <h4 className="text-sm font-medium">$GORILLA Policy ID:</h4>
                <div className="bg-background/30 p-2 rounded mt-2 flex items-center justify-between">
                  <code className="text-xs text-accent truncate">Coming Soon</code>
                  <Button variant="ghost" size="sm" className="h-6 ml-2">
                    Copy
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy; 