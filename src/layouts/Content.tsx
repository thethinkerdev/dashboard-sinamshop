import React, { useMemo } from "react";

interface Props {
  isSidebarOpen: boolean | null;
  children: React.ReactNode;
}
export default function Content({ isSidebarOpen, children }: Props) {
  const contentClassSidebarCheck: string | null = useMemo(() => {
    if (isSidebarOpen === null) return null;

    return isSidebarOpen ? "content-active" : "content-deactive";
  }, [isSidebarOpen]);

  return (
    <section
      className={`transition-transform pr-0 mx-0 md:pr-80 md:mx-5 ${contentClassSidebarCheck}`}
    >
      <div className="mt-3 p-3">{children}</div>
    </section>
  );
}
