import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layoutD")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div>I'm a layout D</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
