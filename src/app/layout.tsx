import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import ChatButton from "@/components/ui/ChatButton";

export const metadata: Metadata = {
  title: "Specter Software | Tecnologia que transforma, integra e evolui",
  description: "Todas as suas ferramentas em um hub central: chatbots inteligentes, analytics robustos e gestão financeira simplificada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen font-space-grotesk flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
