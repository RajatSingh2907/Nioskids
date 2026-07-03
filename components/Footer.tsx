import { Moon, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="night-footer px-5 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Moon className="mb-4 size-12 text-sun" aria-hidden />
          <h2 className="font-heading text-4xl font-extrabold">NIOS Kids</h2>
          <p className="mt-2 max-w-xl text-white/72">A magical learning world for children, with clarity and care for parents.</p>
        </div>
        <div className="flex gap-3" aria-hidden>
          {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="twinkle size-5 text-sun" />)}
        </div>
      </div>
    </footer>
  );
}
