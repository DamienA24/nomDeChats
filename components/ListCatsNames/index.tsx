import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Cat = {
  name: string;
  sign: string;
  characteristics: string;
  origin: string;
};

type ListCatsNamesProps = {
  cats: Cat[];
};

export function ListCatsNames({ cats }: ListCatsNamesProps) {
  return (
    <Accordion type="single" collapsible defaultValue={cats[0].name}>
      {cats.map((cat, index) => {
        const fontColor = `"text-black`;
        const textClass = `font-lora ${fontColor} text-base font-semibold`;

        return (
          <AccordionItem
            value={cat.name}
            className={`border-none mt-4 bg-backgroundThird/70 pl-4`}
            key={`${cat}-${index}`}
          >
            <AccordionTrigger
              className={`font-poppins font-bold text-lg ${fontColor}`}
            >
              {cat.name}
            </AccordionTrigger>
            <AccordionContent className={`${textClass}`}>
              Signification: {cat.sign}
            </AccordionContent>
            <AccordionContent className={`${textClass}`}>
              Traits Associés: {cat.characteristics}
            </AccordionContent>
            <AccordionContent className={`${textClass}`}>
              Origine: {cat.origin}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
