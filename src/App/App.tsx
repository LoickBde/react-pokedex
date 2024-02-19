import { Outlet } from "@tanstack/react-router";
import { useThemeStore } from "@/hooks";
import { Header } from "@/components/Header";

export const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      data-theme={theme}
      className="h-screen w-screen relative flex flex-col overflow-hidden"
    >
      <Header />
      <main className="h-full w-full relative overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};
