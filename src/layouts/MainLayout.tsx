import MainHeader from "@/components/Headers/MainHeader";
import MainBottomMenu from "@/components/Menu/MainBottomMenu";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <MainHeader />

      {children}

      <MainBottomMenu />

      <footer>Footer</footer>
    </div>
  );
}
