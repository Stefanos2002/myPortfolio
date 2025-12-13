"use client";
import Navbar from "../Navbar/Navbar";

type MobileNavbarWrapperProps = {
  onNavigate: () => void;
};

export default function MobileNavbarWrapper({
  onNavigate,
}: MobileNavbarWrapperProps) {
  return (
    <div
      onClick={(e) => {
        // Check if a link was clicked
        const link = (e.target as HTMLElement).closest("a");
        if (link) onNavigate();
      }}
    >
      <Navbar />
    </div>
  );
}
