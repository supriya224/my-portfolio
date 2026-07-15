"use client";

import { useEffect, useState } from "react";
import Cursor from "../../components/cusror";
import ThemeToggle from "../../components/ThemeToggle";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <html lang="en">
      <body>
        <Cursor dark={dark} />

        {children}

        {/* THEME TOGGLE */}
        <ThemeToggle dark={dark} setDark={setDark} />
      </body>
    </html>
  );
}
