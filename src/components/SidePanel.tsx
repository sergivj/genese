'use client';

import { X } from "lucide-react";
import { ReactNode } from "react";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
  children: ReactNode;
}

export default function SidePanel({ isOpen, onClose, position = "left", children }: SidePanelProps) {
  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      <div
        className={`absolute top-0 h-full w-full sm:w-[400px] bg-genese-beige shadow-lg transition-transform duration-300
          ${position === "left" ? "left-0" : "right-0"}
          ${isOpen ? "translate-x-0" : position === "left" ? "-translate-x-full" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-4">
          <X className="w-6 h-6 cursor-pointer text-genese-dark" onClick={onClose} />
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
