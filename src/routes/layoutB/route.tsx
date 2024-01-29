import { Outlet, createFileRoute } from "@tanstack/react-router";

const LayoutB = () => {
  return (
    <>
      <span>LayoutB</span>
      <Outlet />
    </>
  );
};

export const Route = createFileRoute("/layoutB")({
  component: LayoutB,
});
