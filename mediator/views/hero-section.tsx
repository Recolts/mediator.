import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center p-2">
      <div className="flex flex-col items-start justify-start gap-8 max-w-[960px] px-4 lg:px-8 lg:pb-8 lg:pt-[306px] grow w-full">
        <div className="flex flex-col gap-4 max-w-[636px] w-full">
          <h1 className="ty-h6 sm:ty-h4 lg:ty-h1 text-white-100">
            Escrow your tokens, name your price.
          </h1>
          <h1 className="ty-subheading text-white-50">
            Secured deals, hassle-free token bidding using Anchor Escrow in
            Solana.
          </h1>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Input
            title="private key"
            placeholder="Paste an escrow private key here..."
          />
          <h1 className="ty-subtext text-white-12">OR</h1>
          <Button variant={"default"}>Create an Escrow</Button>
        </div>
        <div className="flex gap-4 max-w-[896px] w-full">
          <div className="flex gap-4">
            <Tabs defaultValue="account" className="w-[480px]">
              <TabsList>
                <TabsTrigger value="Public Bidding">Public Bidding</TabsTrigger>
                <TabsTrigger value="My Escrow">My Escrow</TabsTrigger>
              </TabsList>
              {/* <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent> */}
            </Tabs>
          </div>
          <div className="flex bg-white-100">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;