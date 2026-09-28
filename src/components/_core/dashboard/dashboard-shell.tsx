"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { AppSidebar } from "@/components/_core/dashboard/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-healiu-neutral-light">
      {/* Desktop sidebar */}
      <div className="sticky top-0 hidden h-screen shrink-0 p-4 pr-0 lg:flex">
        <AppSidebar />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile / tablet top bar */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-healiu-neutral-active bg-healiu-neutral-white/90 px-4 backdrop-blur-md lg:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-10 shrink-0 rounded-full border-healiu-neutral-active bg-white"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5 text-healiu-dark-dark" />
          </Button>

          <Link href="/dashboard" className="min-w-0">
            <Image
              src="/images/svgs/khoren-logo.svg"
              alt="Khoren"
              width={135}
              height={48}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </header>

        <main className="min-w-0 flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Drawer for medium and small screens */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          showCloseButton={false}
          className="w-[min(100%,312px)] border-0 bg-transparent p-3 shadow-none sm:max-w-[312px]"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Provider dashboard navigation
          </SheetDescription>
          <AppSidebar
            className="h-full w-full max-w-none rounded-[24px]"
            onNavigate={() => setOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
