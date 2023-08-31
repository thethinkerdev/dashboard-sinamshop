import React from "react";

interface Props {
  isSidebarOpen: boolean;
  children: React.ReactNode;
}
export default function Content({ isSidebarOpen, children }: Props) {
  return (
    <section
      style={{ flex: "1" }}
      className={`${isSidebarOpen ? "pr-80  mx-8" : "p-0 mx-0"}`}
    >
      <div className="mt-3">
      {children}
      </div>
    </section>
  );
}
