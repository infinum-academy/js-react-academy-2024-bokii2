import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";

export default function Layout({ children }) {
  return (
    <div>
      <SidebarNavigation />
      {children}
    </div>
  );
}