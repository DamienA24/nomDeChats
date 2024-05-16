import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ALPHABET } from "@/constants";

export function Footer() {
  return (
    <div className="footer bg-backgroundSecondary pt-2 mt-4">
      <p className="font-poppins text-center">Made with ❤️</p>
      <p className="text-center underline font-poppins">
        <a href="/sitemap.xml">sitemap</a>
      </p>
      <Accordion type="single" collapsible>
        <AccordionItem value="Liste">
          <AccordionTrigger className="font-poppins text-base pl-4">
            Liste des noms{" "}
          </AccordionTrigger>

          <AccordionContent>
            <ul className="grid grid-cols-2 sm:grid-cols-4 sm:grid-flow-col sm:grid-rows-7 mt-4 gap-4 text-center">
              {ALPHABET.map((letter) => {
                return (
                  <li key={letter} className="">
                    <a
                      href={`/nom-de-chat-en/${letter}`}
                      className="text-center underline font-poppins"
                    >
                      nom de chat en {letter}
                    </a>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
