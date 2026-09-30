import { Button } from "../button";
import { Navigation } from "../navigation";
import cremss from "../cremss-logo/svg/cremss-texte.svg";
import { useState } from "react";
import {RemoveScroll} from 'react-remove-scroll';


export function MobileMenu() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative mx-auto mt-2 flex w-full max-w-300 items-center px-3 md:mt-10 md:px-6 md:hidden">
      {!isOpen && (
        <div className="flex w-full items-center justify-between">
          <img className="h-auto w-[35%] translate-x-2" src={cremss} alt="Cremss" />
          <Button
            className="h-12 w-[28vw] min-w-24 max-w-32 justify-center px-3 py-0"
            variant="dark"
            size="s"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={false}
            aria-controls="mobile-navigation"
          >
            Menu
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </Button>
        </div>
      )}
      
      {isOpen && (
        <RemoveScroll>
          <div id="mobile-navigation" className="fixed inset-0 z-50 flex min-h-dvh w-screen flex-col bg-ground-glow px-3 pb-3 pt-2">
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
              <Navigation onNavigate={() => setIsOpen(false)} />
            </div>
          </div>
        </RemoveScroll>
      )}

    </header>
  );
}

