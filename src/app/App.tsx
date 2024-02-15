import { Outlet } from "@tanstack/react-router";
import { useThemeStore } from "@/hooks";
import { Header } from "@/components/Header";

export const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div data-theme={theme} className="w-screen h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
