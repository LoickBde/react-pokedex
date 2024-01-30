import { Outlet, createFileRoute } from "@tanstack/react-router";

const LayoutA = () => {
  return (
    <>
      <span>LayoutA</span>
      <Outlet />
    </>
  );
};

export const Route = createFileRoute("/layoutA")({
  component: LayoutA,
});
