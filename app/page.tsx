import DropEditor from "@/components/TextArea";

export default function Home() {
  return (
    <div className="py-4 px-5 sm:px-10 md:px-[14vw]">
      <div className="flex flex-col justify-center items-center text-lg">
        <div className="text-3xl my-10">
            Drop<strong>Text</strong>
        </div>
        <div className="text-black/75 dark:text-white/75">
          Drop the text below to share temporarily
        </div>
        <div className="w-full">
          <DropEditor />
        </div>
      </div>
    </div>
  );
}