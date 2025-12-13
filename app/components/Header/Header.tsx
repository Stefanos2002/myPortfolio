import Link from "next/link";
import MenuToggle from "../MenuToggle/MenuToggle";

type HeaderProps = {
  open: boolean;
  onToggle: () => void;
};

export default function Header({ open, onToggle }: HeaderProps) {
  return (
    <div className="absolute z-40 p-4 top-0 left-0 flex items-center justify-between flex-row xl:hidden bg-neutral-700 w-full h-16">
      <div className="text-white text-4xl uppercase font-extrabold tracking-wide">
        <Link href={"/"}>Home</Link>
      </div>
      <MenuToggle open={open} onToggle={onToggle} />
    </div>
  );
}
