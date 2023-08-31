interface Props {
  isSidebarOpen: boolean;
}
export default function Content({ isSidebarOpen }: Props) {
  return (
    <section
      style={{ flex: "1" }}
      className={`${isSidebarOpen ? "pr-80  mx-8" : "p-3 mx-5"}`}
    >
      Content
    </section>
  );
}
