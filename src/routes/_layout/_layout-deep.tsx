import { Outlet, createFileRoute } from "@tanstack/react-router";

const LayoutDeep = () => {
  return (
    <>
      <span>Layout Deep</span>
      <Outlet />
    </>
  );
};

export const Route = createFileRoute("/_layout/_layout-deep")({
  component: LayoutDeep,
});
