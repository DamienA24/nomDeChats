import { redirect } from "next/navigation";
import Image from "next/image";

import { ListAlphabet } from "@/components/ListAlphabet";
import { CatResume } from "@/components/CatResume";

import { ALPHABET } from "@/constants";
import { ListCatsNames } from "@/components/ListCatsNames";

export default function NameCat({ params }: { params: { slug: string } }) {
  const isLetter = params?.slug
    ? ALPHABET.some((lett) => lett === params.slug.toLocaleLowerCase())
    : false;

  if (!isLetter) {
    return redirect("/nom-de-chat-en/a"); // Navigate to the new post page
  }
  return (
    <main className="flex min-h-screen flex-col bg-[url('/cat2.png')] bg-no-repeat bg-top">
      <div className="mt-3 ml-3">
        <Image src={"/pawLogo.svg"} width={60} height={60} alt="image a cat" />
      </div>
      <nav className="static">
        <p className="font-poppins font-bold text-2xl pl-4 pt-4">
          Nom de chat en {params.slug.toLocaleUpperCase()}
        </p>
        <ListAlphabet letterSelected={params.slug} />
      </nav>
      <div className="">
        <CatResume />
        <ListCatsNames />
      </div>
    </main>
  );
}
