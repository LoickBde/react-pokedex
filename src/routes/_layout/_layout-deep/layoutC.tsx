import { createFileRoute } from "@tanstack/react-router";

const LayoutC = () => {
  return (
    <>
      <span>LayoutC</span>
    </>
  );
};

export const Route = createFileRoute("/_layout/_layout-deep/layoutC")({
  component: LayoutC,
});
