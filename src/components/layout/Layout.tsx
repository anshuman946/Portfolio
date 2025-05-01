import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      <AnimatePresence mode="wait">
        <main className="overflow-y-auto">{children}</main>
      </AnimatePresence>
    </div>
  );
}
