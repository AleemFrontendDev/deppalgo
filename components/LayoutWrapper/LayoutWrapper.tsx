"use client";

import { usePathname } from "next/navigation";
import NavBar from "../NavBar/NavBar";

export default function LayoutWrapper({ children, }: Readonly<{children: React.ReactNode;}>) {

  const pathname = usePathname();
  const excludedRoutes = ["/login", "/register"];


  return (
    <div className="w-fulll h-full">
        {!excludedRoutes.includes(pathname) && <NavBar />}        
        <div className={`${!excludedRoutes.includes(pathname) ? 'mt-20' : '' }`}>
            {children}
        </div>
    </div>
  );
}
