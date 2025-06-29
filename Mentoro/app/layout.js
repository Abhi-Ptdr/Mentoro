import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mentoro - AI Career Coach",
  description: "Mentoro is an AI-powered career coach that helps you find the right career path, build your resume, and prepare for interviews.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header/>
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Abhishek Patidar</p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
