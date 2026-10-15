"use client";

import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";

export default function MobileNavigationDialog({
  children,
}: {
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeMenuOnDesktopResize() {
      if (window.matchMedia("(min-width: 1001px)").matches) {
        dialogRef.current?.close();
      }
    }

    window.addEventListener("resize", closeMenuOnDesktopResize);
    return () => {
      window.removeEventListener("resize", closeMenuOnDesktopResize);
    };
  }, []);

  function closeMenu(restoreFocus = false) {
    const dialog = dialogRef.current;
    if (!dialog?.open) {
      return;
    }

    dialog.close();
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }

  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      closeMenu(true);
      return;
    }

    if (
      event.target instanceof Element &&
      event.target.closest("a[href]")
    ) {
      closeMenu(true);
    }
  }

  function handleDialogKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      closeMenu(true);
    }
  }

  return (
    <>
      <button
        aria-haspopup="dialog"
        aria-label="Open navigation menu"
        className="mobile-menu-trigger"
        onClick={() => dialogRef.current?.showModal()}
        ref={triggerRef}
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
        onKeyDown={handleDialogKeyDown}
        ref={dialogRef}
      >
        <div className="mobile-menu-header">
          <a className="brand" href="#top" onClick={() => closeMenu(true)}>
            <span aria-hidden="true" className="brand-mark">
              +
            </span>
            Wisdom Ogedengbe
          </a>
          <button
            aria-label="Close navigation menu"
            className="mobile-menu-close"
            onClick={() => closeMenu(true)}
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
