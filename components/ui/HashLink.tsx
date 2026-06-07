"use client";

import { type ComponentProps, type MouseEvent } from "react";

type HashLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: `#${string}`;
};

export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
    onClick?.(e);
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
