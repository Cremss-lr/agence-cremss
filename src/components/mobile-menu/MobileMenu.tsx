import { Button } from "../button";
import { Navigation } from "../navigation";
import cremss from "../cremss-logo/svg/cremss-texte.svg";
import { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

const line = "block h-0.5 w-4 bg-current transition-[translate,rotate,scale,opacity] duration-long ease-out";

export function MobileMenu({ ready = true }: { ready?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openCount, setOpenCount] = useState(0);

  const toggle = () => {
    if (!isOpen) setOpenCount((count) => count + 1);
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex w-full items-center bg-ground px-3 py-2 md:hidden">
      <RemoveScroll enabled={isOpen} removeScrollBar={false}>
        <div
          id="mobile-navigation"
          aria-hidden={!isOpen}
          className={`fixed inset-0 z-0 flex min-h-dvh w-screen items-center justify-center bg-ground transition-[opacity,visibility] duration-long ease-out [&_a]:flex [&_a]:items-center [&_a]:gap-2 [&_a]:font-bold [&_a]:text-ink [&_a]:before:size-3 [&_a]:before:rounded-pill [&_a]:before:border-2 [&_a]:before:border-ink [&_a]:before:transition-colors [&_a]:before:duration-standard [&_a]:before:content-[''] [&_a.is-active]:before:bg-mint [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-4 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <Navigation key={openCount} onNavigate={() => setIsOpen(false)} />
        </div>
      )}
      
      {isOpen && (
        <RemoveScroll>
          <div id="mobile-navigation" className="fixed inset-0 z-50 flex min-h-dvh w-screen flex-col bg-ground px-3 pb-3 pt-2">
            <div className="flex items-center justify-between">
              <img className="h-auto w-[35%] translate-x-2" src={cremss} alt="Cremss" />
              <Button
                className="h-12 w-[28vw] min-w-24 max-w-32 justify-center px-3 py-0"
                variant="dark"
                size="s"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
                aria-expanded={true}
                aria-controls="mobile-navigation"
              >
                
                Fermer
                <span aria-hidden="true">X</span>
              </Button>
            </div>

            <div
                className="flex flex-1 items-center justify-center [&_a]:flex [&_a]:items-center [&_a]:gap-2 [&_a]:font-bold [&_a]:text-ink [&_a]:before:text-xl [&_a]:before:content-['○'] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-4"
            >
              <Navigation
                className="font-display text-4xl"
                onNavigate={() => setIsOpen(false)}
              />
            </div>
          </div>
        </RemoveScroll>
      )}

      <div inert={!ready} className={`relative z-10 flex w-full items-center justify-between transition-[opacity,translate] duration-900 ease-out ${ready ? "opacity-100" : "-translate-y-4 opacity-0"}`}>
        <img className="h-auto w-[35%] translate-x-2" src={cremss} alt="Cremss" />
        <Button
          className="h-12 w-[28vw] min-w-24 max-w-32 justify-center px-3 py-0"
          variant="dark"
          size="s"
          onClick={toggle}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="flex flex-col gap-[3px]" aria-hidden="true">
            <span className={`${line} ${isOpen ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`${line} ${isOpen ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`${line} ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
          {isOpen ? "Fermer" : "Menu"}
        </Button>
      </div>
    </header>
  );
}
