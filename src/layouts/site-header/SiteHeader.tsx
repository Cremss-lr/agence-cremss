// import { Logo } from "../../components/logo";
import { MobileMenu } from "../../components/mobile-menu";

export function SiteHeader({ menu = true }: { menu?: boolean }) {
  return (
    <header className="mx-auto mt-2 w-full md:mt-10 box-content flex h-16 max-w-300 items-center justify-between px-6">
      {/*<Logo />*/}
      {menu && (
        <div className="md:hidden">
          <MobileMenu />
        </div>
      )}
    </header>
  );
}
