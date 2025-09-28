import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main
        className={`h-full flex w-full flex-col`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      > 
        {children} 
      </main>
    </div>
  );
}
