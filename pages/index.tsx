import Head from "next/head";

import ResponsiveAppBar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar></ResponsiveAppBar>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </main>
    </div>
  );
}
