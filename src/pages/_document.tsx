import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <main className="bg-zinc-900 min-h-screen">
          <div className="container max-w-[1140px] mx-auto px-4 py-[40px]">
            <Main />
          </div>
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
