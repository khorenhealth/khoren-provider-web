import type { ComponentType } from "react";

import {
  CalenderSvg,
  ChatSvg,
  DashboardSvg,
  EarningsSvg,
  PatientSvg,
  ReviewsSvg,
  VisitReportSvg,
} from "@/components/svg";

export type SidebarNavItem = {
  title: string;
  href: string;
  icon: ComponentType;
  badge?: string;
};

export const sidebarNavItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: DashboardSvg,
  },
  {
    title: "Appointments",
    href: "/dashboard/appointments",
    icon: CalenderSvg,
  },
  {
    title: "My Patients",
    href: "/dashboard/patients",
    icon: PatientSvg,
  },
  {
    title: "Visit Reports",
    href: "/dashboard/visit-reports",
    icon: VisitReportSvg,
  },
  {
    title: "Chat",
    href: "/dashboard/chat",
    icon: ChatSvg,
    badge: "15+",
  },
  {
    title: "Earnings",
    href: "/dashboard/earnings",
    icon: EarningsSvg,
  },
  {
    title: "Reviews",
    href: "/dashboard/reviews",
    icon: ReviewsSvg,
  },
];
