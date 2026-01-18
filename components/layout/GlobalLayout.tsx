import { Header } from "./Header";

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      {/* Footer goes here */}
    </>
  );
}
