import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conversaciones Interactivas con IA",
  description: "Plataforma interactiva que ofrece conversaciones inteligentes, respuestas rápidas y asistencia automatizada en tiempo real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased dark`}>
        <QueryProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
