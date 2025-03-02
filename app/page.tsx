import NextSteps from "@/components/NextSteps";
import { createClient } from "gel"
import { Gel_Vercel } from "@/components/Logo";

export default async function Home() {
  const client = createClient();

  const result = await client.query<number>("SELECT random() * 10");

  return (
    <div className="h-full">
      <nav
        className='px-8 pt-8'>
        <a className='contents' href='https://github.com/geldata/nextjs-gel-basic-template' target='_blank' rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" className="h-6 block ml-auto hover:scale-105 transform transition duration-300 ease-in-out" />
        </a>
      </nav>
      <div className="relative isolate  pt-10 sm:pt-16 lg:pt-20 px-6 lg:px-8 flex flex-col items-center">
        <Gel_Vercel />
        <div className="mx-auto max-w-2xl pt-10 sm:pt-14 lg:pt-18">
          <div className="text-center justify-center flex flex-col">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl py-2
          bg-clip-text text-transparent bg-gradient-to-r from-[#955CF0] to-[#1C008A]
          ">
              Gel&nbsp;Next.js&nbsp;Template
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600">
              This guide helps you quickly start using Gel with Next.js, providing a basic schema and UI.
              Here are some next steps to get you up to speed.
            </p>
            <div className="mx-auto">
              <p className="mt-10 text-base leading-10 text-gray-600 border border-primary border-opacity-20 rounded-lg shadow-sm p-6 max-w-fit">
                The result of the query <code className="
              inline-block
              px-2
              py-0.5
              text-sm
              font-medium
              text-white
              bg-[#7947D8]
              rounded
              shadow-sm
              select-none
            ">SELECT random() * 10</code> is: <code className="
            inline-block
            px-2
            py-0.5
            text-sm
            font-medium
            text-white
            bg-[#7947D8]
            rounded
            shadow-sm
            select-none
          ">{result}</code><br />
                Modify the query in <code className="
              inline-block
              px-2
              py-0.5
              text-sm
              font-medium
              text-white
              bg-[#7947D8]
              rounded
              shadow-sm
              select-none
            ">app/page.tsx</code> to see the result of a different query.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl pt-4 sm:pt-8 lg:pt-12">
          <NextSteps />
        </div>
      </div >
    </div>
  );
}
