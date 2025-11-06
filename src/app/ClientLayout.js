"use client";

import { GlobalProvider } from "@/context/GlobalContext";

export default function ClientLayout({ children }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
