import AdminFooter from "@/Components/Dashboard/AdminFooter";
import AdminHeader from "@/Components/Dashboard/AdminHeader";
import AdminMianWrap from "@/Components/Dashboard/AdminMianWrap";
import AdminSidebar from "@/Components/Dashboard/AdminSidebar";
import { SidebarContext, SidebarProvider } from "@/Context/SidebarContext";
import { ThemeProvider } from "@/Context/ThemeContext";
import { cn } from "@/lib/utils";
import { useContext } from "react";

export default function Authenticated({ user, header, children }) {
    return (
        <ThemeProvider>
            <div className="h-screen bg-muted">
                <SidebarProvider>
                    <AdminHeader />
                    <AdminSidebar />
                    <AdminMianWrap>{children}</AdminMianWrap>
                    <AdminFooter />
                </SidebarProvider>
            </div>
        </ThemeProvider>
    );
}
