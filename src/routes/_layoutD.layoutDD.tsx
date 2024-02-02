import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layoutD/layoutDD")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div>I'm a layout DD</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
