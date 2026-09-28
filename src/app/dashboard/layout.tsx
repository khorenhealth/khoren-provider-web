import { AppSidebar } from "@/components/_core/dashboard/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-healiu-neutral-light">
      <div className="sticky top-0 flex h-screen shrink-0 p-4 pr-0">
        <AppSidebar />
      </div>
      <main className="min-w-0 flex-1 overflow-auto p-4 md:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
