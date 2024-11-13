"use client";

import clsx from "clsx";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../components/ui/navigation-menu";
import { BreadCrumb } from "../molecules/Breadcrumb";
import { ThemeToggle } from "../molecules/ThemeToggle";

type NavItemProps = {
  href: string;
  icon?: ReactNode;
  title: string;
  firstOnRight?: boolean;
  newTab?: boolean;
  items?: NavItemProps[];
  description?: string;
};

type NavProps = {
  mainLogo: ReactNode;
  items: NavItemProps[];
  docNav?: ReactNode;
  cta?: ReactNode;
};

export function Nav(props: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const { mainLogo, items, docNav, cta } = props;

  useLayoutEffect(() => {
    searchOpen && searchRef.current?.focus();
  }, [searchOpen]);

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavLinkLogo href="/">{mainLogo}</NavLinkLogo>
          {items.map((item, i) =>
            item.items?.length ? (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent asChild>
                  <ul>
                    {item.items.map(({ title, description, href, icon }) => (
                      <li className="grid gap-1.5 mt-px">
                        <NavigationMenuLink asChild>
                          <Link
                            className="p-3 rounded-md flex gap-3 hover:bg-stone-100/80 dark:hover:bg-stone-900/80 transition-colors"
                            href={href}
                          >
                            {icon}
                            <div>
                              <p className="text-sm font-medium text-stone-900 dark:text-white">
                                {title}
                              </p>
                              <p className="text-sm leading-relaxed">
                                {description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem
                key={item.title}
                className={clsx(
                  "max-sm:w-full",
                  item.firstOnRight ? "md:ml-auto" : "",
                )}
              >
                <NavigationMenuLink>
                  {"icon" in item ? (
                    <NavLinkLogo key={i} href={item.href} newTab={item.newTab}>
                      {item.icon}
                    </NavLinkLogo>
                  ) : (
                    <NavLink key={i} href={item.href} newTab={item.newTab}>
                      {item.title}
                    </NavLink>
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ),
          )}
          {cta}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="md:hidden px-4 flex items-center self-stretch dark:text-white">
        <NavLinkLogo href="/" className="mr-auto">
          {mainLogo}
        </NavLinkLogo>
        <button
          className="flex gap-2 p-3 rounded-xl items-center"
          onMouseDown={() => {
            setMenuOpen((o) => !o);
            setSearchOpen(false);
          }}
          aria-label="Open menu"
        >
          <MenuIcon />
          <BreadCrumb items={items} />
        </button>
      </div>
      <div
        onClick={() => {
          setMenuOpen(false);
          setSearchOpen(false);
        }}
        className={clsx(
          menuOpen || searchOpen ? "block" : "hidden",
          "fixed top-0 bottom-0 left-0 right-0 bg-stone-200/80 dark:bg-black/80 w-full h-full z-20",
        )}
      ></div>
      <nav
        className={clsx(
          "md:hidden fixed flex flex-col bottom-4 right-4 z-50",
          "bg-stone-50 dark:bg-stone-925 border rounded-lg shadow-lg",
          menuOpen || searchOpen ? "left-4" : "",
        )}
      >
        <div className={clsx(menuOpen ? "block" : "hidden", " px-2 pb-2")}>
          <div className="flex items-center w-full border-b">
            <NavLinkLogo
              href="/"
              className="mr-auto"
              onClick={() => setMenuOpen(false)}
            >
              {mainLogo}
            </NavLinkLogo>
            {items
              .filter((item) => "icon" in item)
              .map((item, i) => (
                <NavLinkLogo key={i} href={item.href} newTab={item.newTab}>
                  {item.icon}
                </NavLinkLogo>
              ))}
          </div>

          {pathname.startsWith("/docs") && docNav && (
            <div className="max-h-[calc(100dvh-15rem)] p-4 border-b overflow-x-auto">
              {docNav}
            </div>
          )}

          <div className="flex gap-4 justify-end -mb-2">
            {items
              .filter((item) => !("icon" in item))
              .slice(0, 3)
              .map((item, i) => (
                <NavLink
                  key={i}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  newTab={item.newTab}
                >
                  {item.title}
                </NavLink>
              ))}
          </div>

          <div className="flex gap-4 justify-end border-b">
            {items
              .filter((item) => !("icon" in item))
              .slice(3)
              .map((item, i) => (
                <NavLink
                  key={i}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  newTab={item.newTab}
                  className={clsx("")}
                >
                  {item.title}
                </NavLink>
              ))}
          </div>
        </div>
        <div className="flex items-center self-stretch justify-between">
          {(menuOpen || searchOpen) && <ThemeToggle className="p-3" />}
          <button
            className="flex gap-2 p-3 rounded-xl items-center"
            onMouseDown={() => {
              setMenuOpen((o) => !o);
              setSearchOpen(false);
            }}
            aria-label="Close menu"
          >
            {menuOpen || searchOpen ? (
              <XIcon />
            ) : (
              <>
                <MenuIcon />
                <BreadCrumb items={items} />
              </>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

function NavLink({
  href,
  className,
  children,
  onClick,
  newTab,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  newTab?: boolean;
}) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "py-5 text-sm",
        className,
        path === href
          ? "font-medium text-black dark:text-white cursor-default"
          : "text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors hover:transition-none",
      )}
      onClick={onClick}
      target={newTab ? "_blank" : undefined}
    >
      {children}
      {newTab ? (
        <span className="inline-block text-stone-300 dark:text-stone-700 relative -top-0.5 -left-0.5 -mr-2">
          ⌝
        </span>
      ) : (
        ""
      )}
    </Link>
  );
}

function NavLinkLogo({
  href,
  className,
  children,
  onClick,
  newTab,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  newTab?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "py-3 hover:text-stone-900 dark:hover:text-white transition-colors",
        className,
      )}
      onClick={onClick}
      target={newTab ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}
