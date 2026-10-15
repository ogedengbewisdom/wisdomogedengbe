"use client";

import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

export default function MobileNavigationDialog({
  children,
}: {
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function closeMenu() {
    dialogRef.current?.close();
  }

  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      closeMenu();
      return;
    }

    if (
      event.target instanceof Element &&
      event.target.closest("a[href]")
    ) {
      closeMenu();
    }
  }

  return (
    <>
      <button
        aria-haspopup="dialog"
        aria-label="Open navigation menu"
        className="mobile-menu-trigger"
        onClick={() => dialogRef.current?.showModal()}
        type="button"
      >
        <span aria-hidden="true" className="hamburger-icon">
          <span />
          <span />
        </span>
      </button>

      <dialog
        aria-label="Site navigation"
        className="mobile-menu-dialog"
        onClick={handleDialogClick}
        ref={dialogRef}
      >
        <div className="mobile-menu-header">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span aria-hidden="true" className="brand-mark">
              +
            </span>
            Wisdom Ogedengbe
          </a>
          <button
            aria-label="Close navigation menu"
            className="mobile-menu-close"
            onClick={closeMenu}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        {children}
      </dialog>
    </>
  );
}
