export function CatResume({
  descriptionLetter,
}: {
  descriptionLetter: string;
}) {
  return (
    <div className="flex items-center justify-center w-96 h-52 bg-backgroundSecondary/70 mx-auto rounded-2xl">
      <p className="font-lora font-semibold text-base text-center p-2 ">
        {descriptionLetter}
      </p>
    </div>
  );
}
