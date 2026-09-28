"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, LogOut, Settings } from "lucide-react";

import { sidebarNavItems } from "@/components/_core/dashboard/sidebar-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function isNavActive(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === "/dashboard";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="flex h-full w-[280px] shrink-0 flex-col overflow-hidden rounded-[28px] text-white shadow-[0_20px_60px_rgba(4,37,70,0.28)]"
      style={{
        background:
          "linear-gradient(180deg, #1B7FE0 0%, #0B69C9 28%, #084F97 58%, #042546 100%)",
      }}
    >
      {/* Brand header */}
      <div className="flex items-start justify-between gap-3 px-5 pt-6 pb-2">
        <Link href="/dashboard" className="min-w-0 shrink">
          <Image
            src="/images/svgs/khoren-logo.svg"
            alt="Khoren"
            width={135}
            height={48}
            className="h-10 w-auto"
            priority
          />
          <p className="mt-1.5 text-[11px] leading-tight text-white/75">
            Home. Healthcare. Connected.
          </p>
        </Link>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="mt-0.5 size-9 shrink-0 rounded-full text-white hover:bg-white/10 hover:text-white"
          aria-label="Notifications"
        >
          <Bell className="size-5" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-1 flex-col gap-1.5 px-4 pb-4">
        {sidebarNavItems.map((item) => {
          const active = isNavActive(pathname, item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-3.5 py-3 text-[15px] font-medium transition-colors",
                active
                  ? "bg-[#042546]/55 text-white shadow-inner"
                  : "text-white/95 hover:bg-white/10",
              )}
            >
              <Icon className="size-5 shrink-0 opacity-95" strokeWidth={1.75} />
              <span className="flex-1 truncate">{item.title}</span>
              {item.badge ? (
                <Badge className="h-5 min-w-8 justify-center rounded-full border-0 bg-healiu-green px-2 text-[11px] font-semibold text-white hover:bg-healiu-green">
                  {item.badge}
                </Badge>
              ) : null}
            </Link>
          );
        })}
      </nav>

      {/* User profile card */}
      <div className="relative px-4 pt-10 pb-4">
        <div
          className="relative rounded-[22px] px-4 pt-10 pb-4 text-center"
          style={{
            background:
              "linear-gradient(180deg, #E8F1FA 0%, #D5E4F2 55%, #C8D8E8 100%)",
          }}
        >
          <Avatar className="absolute top-0 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 after:border-white/40">
            <AvatarImage
              src="/images/pngs/provider-avatar.png"
              alt="Dr. Olumide Adeyemi"
            />
            <AvatarFallback className="bg-healiu-blue text-base font-semibold text-white">
              OA
            </AvatarFallback>
          </Avatar>

          <p className="text-[15px] leading-tight font-bold text-healiu-dark-dark">
            Dr. Olumide Adeyemi
          </p>
          <p className="mt-1 text-sm text-healiu-dark">Physiotherapist</p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <Button
              type="button"
              size="icon"
              className="size-10 rounded-full border-0 bg-healiu-blue text-white shadow-sm hover:bg-healiu-blue-hover"
              aria-label="Settings"
            >
              <Settings className="size-[18px]" />
            </Button>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="size-10 rounded-full border-[#F07167] bg-white text-[#E85A4F] shadow-sm hover:bg-white hover:text-[#D9483E]"
              aria-label="Log out"
            >
              <LogOut className="size-[18px]" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
