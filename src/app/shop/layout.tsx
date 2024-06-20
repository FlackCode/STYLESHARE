import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FilterProvider } from "@/components/FilterProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop | Styleshare",
  description: "Styleshare",
};

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Suspense>
        <FilterProvider>
          {children}
        </FilterProvider>
      </Suspense>
    </div>
  );
}
