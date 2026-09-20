import { icons } from "@/lib/icons";

export default function Icon({ name, className = "h-5 w-5" }) {
  const Cmp = icons[name];
  if (!Cmp) return null;
  return <Cmp className={className} aria-hidden strokeWidth={2} />;
}
