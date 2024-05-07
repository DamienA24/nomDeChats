"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ALPHABET } from "@/constants";

export function ListAlphabet({ letterSelected }: { letterSelected: string }) {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const elements = scrollContainerRef.current.children;
      const selectedElement =
        elements[ALPHABET.indexOf(letterSelected.toLowerCase())];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "instant",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, []);

  return (
    <ScrollArea className="w-100 whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4" ref={scrollContainerRef}>
        {ALPHABET.map((letter) => {
          const isSelected = letter === letterSelected.toLocaleLowerCase();
          const backgroundClass = isSelected
            ? "bg-backgroundSecondary"
            : "bg-backgroundThird";
          return (
            <figure
              key={letter}
              id={letter}
              className={`flex justify-center items-center shrink-0 w-14 h-12 ${backgroundClass} rounded-3xl`}
              onClick={() => router.push(`/nom-de-chat-en/${letter}`)}
            >
              <span className={"font-poppins font-bold text-xl"}>
                {letter.toLocaleUpperCase()}
              </span>
            </figure>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
