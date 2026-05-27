import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
 import {neobrutalism } from '@clerk/ui/themes'
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      theme: neobrutalism
    }}>

    <html
      lang="en"
      suppressHydrationWarning      
      >
      <body  className={`${inter.className} initialised`}>
       <Header />

        <main className="min-h-screen">{children}</main>
       <Toaster richColors/>
     <footer className="py-8 px-4 border-t">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <p className="text-stone-500 text-sm">
          &copy; {new Date().getFullYear()} Servd. Made with ❤️ by Charles Osango.
        </p>
      </div>
     
     </footer>
      </body>
    </html>
      </ClerkProvider>
  );
}
