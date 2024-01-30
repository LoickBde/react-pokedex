import { createFileRoute } from "@tanstack/react-router";

const LayoutBBIndex = () => {
  return (
    <>
      <span>LayoutBBIndex</span>
    </>
  );
};

export const Route = createFileRoute("/layoutB/layoutBB/")({
  component: LayoutBBIndex,
});
