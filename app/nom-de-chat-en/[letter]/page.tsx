import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Image from "next/image";

import { ListCatsNames } from "@/components/ListCatsNames";
import { ListAlphabet } from "@/components/ListAlphabet";
import { CatResume } from "@/components/CatResume";

import { ALPHABET, CATSDATA } from "@/constants";

type Props = {
  params: { letter: string };
};

type PropsMeta = {
  params: { letter: string };
};

export async function generateStaticParams() {
  const letters = ALPHABET.map((letter) => letter.toLowerCase());
  return letters.map((letter) => ({ letter }));
}

export async function generateMetadata({
  params,
}: PropsMeta): Promise<Metadata> {
  // read route params
  const letter = params.letter;
  const title = `Nom de chat en ${letter.toUpperCase()} - Les meilleurs noms pour votre
          chat`;
  const description = `Découvrez les meilleurs noms de chat en ${letter.toUpperCase()}`;
  const catsForLetter = CATSDATA[letter as keyof typeof CATSDATA];
  const backgroundImg = catsForLetter.background;

  return {
    title,
    description,
    keywords: [`Nom de chat en ${letter.toUpperCase()}`],
    openGraph: {
      title,
      description,
      url: `https://www.nompourchat.com/nom-de-chat-en/${letter.toLowerCase()}`,
      siteName: "NomPourChat",
      images: `https://www.nompourchat.com${backgroundImg}`,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default function NameCat({ params }: Props) {
  const { letter } = params;
  const isLetter = letter
    ? ALPHABET.some((lett) => lett === letter.toLocaleLowerCase())
    : false;

  if (!isLetter) {
    return redirect("/nom-de-chat-en/a");
  }

  const catsForLetter = CATSDATA[letter as keyof typeof CATSDATA];
  const backgroundImg = catsForLetter.background;
  const description = catsForLetter.description;

  return (
    <main
      className={`flex min-h-screen flex-col bg-no-repeat bg-top`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="mt-3 ml-3">
        <a href="/">
          <Image
            src={"/pawLogo.svg"}
            width={60}
            height={60}
            alt="image a cat"
          />
        </a>
      </div>
      <nav className="static">
        <h1 className="font-poppins font-bold text-2xl pl-4 pt-4 ">
          Nom de chat en {letter.toLocaleUpperCase()}
        </h1>
        <ListAlphabet letterSelected={letter} />
      </nav>
      <div className="">
        <CatResume descriptionLetter={description} />
        <ListCatsNames cats={catsForLetter.names} />
      </div>
    </main>
  );
}
