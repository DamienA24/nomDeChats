import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Image from "next/image";

import { ListCatsNames } from "@/components/ListCatsNames";
import { ListAlphabet } from "@/components/ListAlphabet";
import { CatResume } from "@/components/CatResume";

import { ALPHABET, CATSDATA } from "@/constants";
import { SEO_CONTENT } from "@/constants/seo-content";

type Props = {
  params: Promise<{ letter: string }>;
};

export async function generateStaticParams() {
  const letters = ALPHABET.map((letter) => letter.toLowerCase());
  return letters.map((letter) => ({ letter }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { letter } = await params;
  const title = `Nom de chat en ${letter.toUpperCase()} - Les meilleurs noms pour votre chat`;
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

export default async function NameCat({ params }: Props) {
  const { letter } = await params;
  const isLetter = letter
    ? ALPHABET.some((lett) => lett === letter.toLocaleLowerCase())
    : false;

  if (!isLetter) {
    return redirect("/nom-de-chat-en/a");
  }

  const catsForLetter = CATSDATA[letter as keyof typeof CATSDATA];
  const backgroundImg = catsForLetter.background;
  const description = catsForLetter.description;
  const seoContent = SEO_CONTENT[letter];

  const letterIndex = ALPHABET.indexOf(letter.toLowerCase());
  const prevLetter = letterIndex > 0 ? ALPHABET[letterIndex - 1] : ALPHABET[ALPHABET.length - 1];
  const nextLetter = letterIndex < ALPHABET.length - 1 ? ALPHABET[letterIndex + 1] : ALPHABET[0];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.nompourchat.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Nom de chat en ${letter.toUpperCase()}`,
        item: `https://www.nompourchat.com/nom-de-chat-en/${letter.toLowerCase()}`,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Noms de chat en ${letter.toUpperCase()}`,
    numberOfItems: catsForLetter.names.length,
    itemListElement: catsForLetter.names.map((cat, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: cat.name,
    })),
  };

  const faqJsonLd = seoContent
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seoContent.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <main
      className="flex min-h-screen flex-col bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <div className="mt-3 ml-3 flex items-center gap-3">
        <a href="/">
          <Image
            src={"/pawLogo.svg"}
            width={60}
            height={60}
            alt="logo nompourchat"
          />
        </a>
        <span className="font-poppins text-sm font-medium hidden sm:block">
          Trouver le nom parfait pour votre chat
        </span>
      </div>
      <header>
        <h1 className="font-poppins font-bold text-2xl pl-4 pt-4">
          Nom de chat en {letter.toLocaleUpperCase()}
        </h1>
      </header>
      <nav aria-label="Alphabet" className="static">
        <ListAlphabet letterSelected={letter} />
      </nav>
      <div>
        <CatResume descriptionLetter={description} />

        <div className="mt-6 px-2">
          <h2 className="font-poppins font-bold text-xl pl-2 mb-2">
            Les {catsForLetter.names.length} noms de chat en{" "}
            {letter.toLocaleUpperCase()}
          </h2>
          <ListCatsNames cats={catsForLetter.names} />
        </div>

        <div className="flex justify-between items-center mx-4 mt-4 mb-2">
          <a
            href={`/nom-de-chat-en/${prevLetter}`}
            className="bg-backgroundThird rounded-2xl px-4 py-2 font-poppins font-bold text-sm hover:bg-backgroundSecondary transition-colors"
          >
            ← Lettre {prevLetter.toUpperCase()}
          </a>
          <a
            href={`/nom-de-chat-en/${nextLetter}`}
            className="bg-backgroundThird rounded-2xl px-4 py-2 font-poppins font-bold text-sm hover:bg-backgroundSecondary transition-colors"
          >
            Lettre {nextLetter.toUpperCase()} →
          </a>
        </div>

        {seoContent && (
          <div className="w-11/12 mx-auto mt-6 bg-backgroundSecondary/70 rounded-2xl p-6">
            <h2 className="font-poppins font-bold text-xl mb-3">
              Présentation des noms de chat en {letter.toLocaleUpperCase()}
            </h2>
            <p className="font-lora text-base leading-relaxed">
              {seoContent.richDescription}
            </p>
          </div>
        )}

        {seoContent && (
          <div className="w-11/12 mx-auto mt-8 mb-6">
            <h2 className="font-poppins font-bold text-xl mb-4">
              Questions fréquentes sur les noms de chat en{" "}
              {letter.toLocaleUpperCase()}
            </h2>
            <div className="space-y-4">
              {seoContent.faq.map((item, index) => (
                <div
                  key={index}
                  className="bg-backgroundThird/70 rounded-2xl p-4"
                >
                  <h3 className="font-poppins font-semibold text-base mb-2">
                    {item.question}
                  </h3>
                  <p className="font-lora text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
