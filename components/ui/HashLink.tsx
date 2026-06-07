"use client";

import { type ComponentProps, type MouseEvent } from "react";

type HashLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: `#${string}`;
};

export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.slice(1);
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname === "/" ? href : `/${href}`);
      onClick?.(e);
      return;
    }

    window.location.assign(`/${href}`);
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
