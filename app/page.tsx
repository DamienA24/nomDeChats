import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-[5vh] justify-around">
      <div className=" flex items-center justify-center w-80 h-80 bg-backgroundSecondary rounded-full">
        <Image
          src={"/catHome.svg"}
          width={240}
          height={240}
          alt="image a cat"
        />
      </div>
      <div className="container-titles">
        <div className="flex">
          <h1 className="font-poppins text-4xl font-bold">Nom Pour Chat</h1>
          <Image src={"/paw.svg"} height={32} width={32} alt="image of paw" />
        </div>
        <h2 className="font-poppins font-medium text-base	text-center">
          Trouvons le nom de votre chat
        </h2>

        <p className="font-lora font-medium text-base	text-center mt-6">
          Arlo, Bob, Freud, Beach
        </p>
      </div>
      <div className="container-button">
        <Button
          variant="outline"
          className="font-poppins bg-backgroundThird border-black	text-2xl font-bold h-24 w-80 rounded-2xl"
        >
          ALLONS-Y
        </Button>
      </div>
    </main>
  );
}
