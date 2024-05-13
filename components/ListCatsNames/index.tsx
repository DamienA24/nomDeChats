import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cats = [
  {
    name: "Ao",
    sign: "Symbole de force et protection",
    characteristics: "Courageux, protecteur",
    origin: "Anglo-Saxon",
  },
  {
    name: "Arlo",
    sign: "Symbole de force et protection",
    characteristics: "Courageux, protecteur",
    origin: "Anglo-Saxon",
  },
  {
    name: "Ange",
    sign: "Symbole de force et protection",
    characteristics: "Courageux, protecteur",
    origin: "Anglo-Saxon",
  },
];
export function ListCatsNames() {
  return (
    <Accordion type="single" collapsible defaultValue={cats[0].name}>
      {cats.map((cat, index) => {
        const backgroundColor = `${
          index % 2 === 0 ? "bg-backgroundBlack/70" : "bg-backgroundThird/70"
        }`;
        const fontColor = `${index % 2 === 0 ? "text-white" : "text-black"}`;
        const textClass = `font-lora ${fontColor} text-base`;
        return (
          <AccordionItem
            value={cat.name}
            className={`border-none mt-3 ${backgroundColor}`}
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
