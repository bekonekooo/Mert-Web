"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

const LINKS = [
  { href: "/", label: "HomePage" },
  { href: "/shop", label: "Shop" },     // gerekirse rotaları kendine göre değiştir
  { href: "/deals", label: "Deals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  const { counter, getCart } = useCartStore();

  // Menü açıldığında/ilk mount’ta sepet sayaçını garanti et
  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  // Route değişince menüyü kapat
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC ile kapat
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleLogout = async () => {
    try {
      Cookies.remove("refreshToken");
      const { logoutUrl } = await wixClient.auth.logout(window.location.href);
      setOpen(false);
      router.push(logoutUrl);
    } catch {
      setOpen(false);
    }
  };

  return (
    <div className="md:hidden relative">
      {/* Hamburger */}
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="p-1 -m-1"
      >
        <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" />
      </button>

      {/* Overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed left-0 top-20 w-full h-[calc(100vh-80px)] z-50
                       bg-black text-white flex flex-col items-center justify-center gap-8 text-xl"
            role="dialog"
            aria-modal="true"
          >
            {/* Linkler */}
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 rounded-md ${
                    active ? "bg-white text-black" : "hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}

            {/* Profil / Auth */}
            {isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  className={`px-4 py-2 rounded-md ${
                    pathname === "/profile" ? "bg-white text-black" : "hover:bg-white/10"
                  }`}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md bg-white text-black"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className={`px-4 py-2 rounded-md ${
                  pathname === "/login" ? "bg-white text-black" : "hover:bg-white/10"
                }`}
              >
                Login
              </Link>
            )}

            {/* Sepet */}
            <Link
              href="/cart"
              // Eğer ayrı bir cart sayfan yoksa sadece label kalsın ya da NavIcons’taki CartModel’i kullan.
              className="px-4 py-2 rounded-md hover:bg-white/10"
            >
              Cart ({counter ?? 0})
            </Link>

            {/* Kapat */}
            <button
              onClick={() => setOpen(false)}
              className="mt-4 text-sm text-white/70 hover:text-white"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}
