import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  ClipboardList,
  LayoutGrid,
  MessageSquare,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

export type SidebarNavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export const sidebarNavItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Appointments",
    href: "/dashboard/appointments",
    icon: CalendarDays,
  },
  {
    title: "My Patients",
    href: "/dashboard/patients",
    icon: Users,
  },
  {
    title: "Visit Reports",
    href: "/dashboard/visit-reports",
    icon: ClipboardList,
  },
  {
    title: "Chat",
    href: "/dashboard/chat",
    icon: MessageSquare,
    badge: "15+",
  },
  {
    title: "Earnings",
    href: "/dashboard/earnings",
    icon: Wallet,
  },
  {
    title: "Reviews",
    href: "/dashboard/reviews",
    icon: Sparkles,
  },
];
