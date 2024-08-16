import React from "react";
import Image from "next/image";
import { useState } from "react";
import icon1 from "@/public/icons/Bonk.png";
import icon2 from "@/public/icons/Sol.png";
import icon3 from "@/public/icons/copy-01.svg";
import cancel from "@/public/cancel-01.svg";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type jsonObject = {
  status: string;
  amount: number;
  currency: string;
  forAmount: number;
  forCurrency: string;
  programId: string;
  escrowCreator: string;
};

const Card = ({
  status,
  amount,
  currency,
  forAmount,
  forCurrency,
  programId,
  escrowCreator,
}: jsonObject) => {
  return (
    <div className="flex flex-col border rounded-2xl bg-white-4 border-white-4 p-4 gap-4">
      <div className="flex justify-between gap-2">
        {status == "Claimed" ? (
          <div className="flex border rounded-full bg-blue-4 border-blue-8 text-blue-100 ty-subtitle py-2 px-3">
            {status}
          </div>
        ) : (
          <div className="flex border rounded-full bg-yellow-4 border-yellow-8 text-yellow-100 ty-subtitle py-2 px-3">
            {status}
          </div>
        )}

        <div className="flex ty-subtext text-white-50">July 09 • 11:45 PM</div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex items-center pr-3 pl-1 py-1 gap-2 rounded-full bg-white-4">
          <div className="flex border rounded-full border-white-16 p-1">
            <Image src={icon1} alt="Bonk Icon" />
          </div>
          <p className="ty-subheading text-white-100">{amount}</p>
          <p className="ty-title text-white-100">{currency}</p>
        </div>
        <p className="ty-descriptions text-white-50">for</p>
        <div className="flex items-center pr-3 pl-1 py-1 gap-2 rounded-full bg-white-4">
          <div className="flex border rounded-full border-white-16 p-1">
            <Image src={icon2} alt="SOL Icon" />
          </div>
          <p className="ty-subheading text-white-100">{forAmount}</p>
          <p className="ty-title text-white-100">{forCurrency}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 grow">
        <div className="flex gap-1 items-center">
          <h1 className="ty-descriptions text-white-50 w-[108px]">
            Program ID
          </h1>
          <h1 className="ty-descriptions text-white-100">{programId}</h1>
          <Image src={icon3} alt="Copy Icon" />
        </div>
      </div>

      <div className="flex flex-col gap-2 grow">
        <div className="flex gap-1 items-center">
          <h1 className="ty-descriptions text-white-50 w-[108px] text-nowrap">
            Escrow Creator
          </h1>
          <h1 className="ty-descriptions text-white-100">{escrowCreator}</h1>
        </div>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant={"default"}
            className="ty-title p-3.5 text-white-100 bg-white-16"
          >
            Claim bidding
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription className="flex flex-col gap-4 relative">
              <div className="flex justify-between">
                <p className="ty-subtext text-white-50">Create an Escrow</p>
                <button className="p-2">
                  <Image src={cancel} alt="Cancel Icon" />
                </button>
              </div>
              <div className="p-4 bg-white-50 flex items-center justify-between rounded-xl">
                <input
                  value={amount}
                  className="bg-none text-black-100"
                ></input>
                <Button
                  variant={"default"}
                  className="ty-title p-3.5 text-white-100 bg-white-16 gap-1"
                >
                  <Image src={icon1} alt="Bonk Icon" />
                  {currency}
                </Button>
              </div>
              <div className="flex justify-center">
                <p>for</p>
              </div>

              <div className="p-4 bg-white-50 flex items-center justify-between rounded-xl">
                <p>{forAmount}</p>
                <Button
                  variant={"default"}
                  className="ty-title p-3.5 text-white-100 bg-white-16 gap-1"
                >
                  <Image src={icon2} alt="SOL Icon" />
                  {forCurrency}
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <p>Program ID</p>
                <p>{programId}</p>
              </div>
              <div className="flex items-center gap-4">
                <p>Escrow Creator</p>
                <p>{escrowCreator}</p>
              </div>

              <Button
                variant={"default"}
                className="ty-title p-3.5 text-black-100 bg-white-100"
              >
                Approve Contract
              </Button>
              {/* 
              <div className="mt-4 p-4 bg-black-50 rounded-xl">
                <pre>{JSON.stringify(jsonObject, null, 2)}</pre>
              </div> */}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Card;
