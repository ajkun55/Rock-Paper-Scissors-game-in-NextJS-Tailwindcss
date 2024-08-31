"use client";

import Image from "next/image";
import { useState } from "react";
import {
  RockImg,
  PaperImg,
  ScissorsImg,
  LargeRockImg,
  LargePaperImg,
  LargeScissorsImg,
} from "@/components/image";
import Link from "next/link";

export default function Home() {
  const [score, setScore] = useState(12);
  const [choice, setChoice] = useState("");
  const [randomChoice, setRandomChoice] = useState("");
  const choices = ["paper", "rock", "scissor"];
  const [showModal, setShowModal] = useState(false);

  function reset() {
    setChoice("");
  }

  function handleClick(name) {
    const newChoice = name;
    setChoice(newChoice);
    const newRandomChoice = choices[Math.floor(Math.random() * 3)];
    setRandomChoice(newRandomChoice);
    console.log(choice, randomChoice);
    if (
      (newChoice === "paper" && newRandomChoice === "rock") ||
      (newChoice === "rock" && newRandomChoice === "scissor") ||
      (newChoice === "scissor" && newRandomChoice === "paper")
    ) {
      setTimeout(() => {
        setScore((s) => s + 1);
      }, 2000);
    }
    if (
      (newChoice === "paper" && newRandomChoice === "scissor") ||
      (newChoice === "rock" && newRandomChoice === "paper") ||
      (newChoice === "scissor" && newRandomChoice === "rock")
    ) {
      setTimeout(() => {
        setScore((s) => s - 1);
      }, 2000);
    }
  }

  return (
    <main className="min-h-screen w-5/6 mx-auto lg:max-h-[769px]">
      <div className="flex justify-between items-center border-4 z-10 relative border-Header-Outline rounded-md lg:rounded-2xl p-5 my-10 max-w-[700px] mx-auto">
        <Image src="/logo.svg" alt="logo" width={162} height={99} />
        <div className="bg-white p-3 rounded-md w-[150px] h-[115px] flex flex-col justify-center gap-3">
          <p className="text-Score-Text text-center tracking-wide">SCORE</p>
          <p className="text-Dark-Text text-center text-4xl">{score}</p>
        </div>
      </div>

      {choice === "" ? (
        <div className="bg-bg-triangle bg-center bg-18 md:bg-30 bg-no-repeat w-[310px] h-[310px] md:w-[480px] md:h-[430px] relative mx-auto mt-10 md:mb-0">
          <span className="flex justify-between items-stretch">
            <span
              onClick={() => handleClick("paper")}
              className="cursor-pointer"
            >
              <PaperImg />
            </span>
            <span
              onClick={() => handleClick("scissor")}
              className="cursor-pointer"
            >
              <ScissorsImg />
            </span>
          </span>
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-0 cursor-pointer"
            onClick={() => handleClick("rock")}
          >
            <RockImg />
          </span>
        </div>
      ) : (
        <div className="grid grid-rows-2 grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 mt-20 mb-16">
          <div className="lg:order-1 lg:flex lg:flex-col-reverse lg:justify-between lg:gap-8">
            <div className="container mx-auto">
              {choice === "paper" ? (
                <>
                  <span className="lg:hidden">
                    <PaperImg />
                  </span>
                  <span className="hidden lg:block">
                    <LargePaperImg />
                  </span>
                </>
              ) : choice === "rock" ? (
                <>
                  <span className="lg:hidden">
                    <RockImg />
                  </span>
                  <span className="hidden lg:block">
                    <LargeRockImg />
                  </span>
                </>
              ) : (
                <>
                  <span className="lg:hidden">
                    <ScissorsImg />
                  </span>
                  <span className="hidden lg:block">
                    <LargeScissorsImg />
                  </span>
                </>
              )}
            </div>
            <p className="text-white uppercase mt-4 tracking-widest text-center z-10 lg:mt-0 lg:text-xl">
              You Picked
            </p>
          </div>

          <div className="lg:order-3 lg:flex lg:flex-col-reverse lg:justify-between lg:gap-8">
            <div className="animation">
              {randomChoice === "paper" ? (
                <>
                  <span className="lg:hidden">
                    <PaperImg />
                  </span>
                  <span className="hidden lg:block">
                    <LargePaperImg />
                  </span>
                </>
              ) : randomChoice === "rock" ? (
                <>
                  <span className="lg:hidden">
                    <RockImg />
                  </span>
                  <span className="hidden lg:block">
                    <LargeRockImg />
                  </span>
                </>
              ) : (
                <>
                  <span className="lg:hidden">
                    <ScissorsImg />
                  </span>
                  <span className="hidden lg:block">
                    <LargeScissorsImg />
                  </span>
                </>
              )}
            </div>
            <p className="text-white uppercase mt-4 text-center tracking-widest lg:mt-0 lg:text-xl">
              The House Picked
            </p>
          </div>

          <div className="my-10 grid place-content-center animation-outcome lg:order-2 col-span-2 lg:col-span-1">
            {(choice === "paper" && randomChoice === "rock") ||
            (choice === "rock" && randomChoice === "scissor") ||
            (choice === "scissor" && randomChoice === "paper") ? (
              <p className="text-white text-[2.5rem] text-center">YOU WIN</p>
            ) : choice === randomChoice ? (
              <p className="text-white text-[2.5rem] text-center">
                IT&apos;S A TIE
              </p>
            ) : (
              <p className="text-white text-[2.5rem] text-center">YOU LOSE</p>
            )}
            <button
              className="bg-white text-Dark-Text py-3 rounded-md mt-5 hover:text-Rock-2 w-[220px]"
              onClick={reset}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
      <div className="md:mb-2 lg:mt-6 my-20 flex justify-center md:justify-end items-center gap-5">
        <Link href={"/Bonus"} className="text-white hover:text-Rock-1">
          Bonus Game
        </Link>
        <button
          className="border border-white text-white uppercase rounded-md lg:rounded-lg py-3 w-32 tracking-wider "
          onClick={() => setShowModal(true)}
        >
          Rules
        </button>
      </div>
      {showModal && (
        <section
          isOpen={showModal}
          className="fixed inset-0 w-full h-full z-20 sm:flex sm:justify-center sm:items-center"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col justify-between sm:relative sm:flex-row h-full sm:p-5 bg-white sm:w-[400px] sm:h-[415px] sm:rounded-lg"
          >
            <p className="uppercase text-Dark-Text text-3xl text-center pt-20 sm:p-0">
              Rules
            </p>
            <Image
              src="/image-rules.svg"
              alt="rules"
              width={304}
              height={270}
              className="my-20 mx-auto sm:my-0 sm:absolute sm:bottom-10 sm:left-10"
            />
            <Image
              src="/icon-close.svg"
              alt="close"
              width={20}
              height={20}
              className="mx-auto cursor-pointer max-h-5 sm:m-0 sm:mt-3"
              onClick={() => setShowModal(false)}
            />
          </div>
        </section>
      )}
    </main>
  );
}