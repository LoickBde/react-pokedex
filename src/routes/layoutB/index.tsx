import { createFileRoute } from "@tanstack/react-router";

const LayoutBIndex = () => {
  return (
    <>
      <span>LayoutBIndex</span>
    </>
  );
};

export const Route = createFileRoute("/layoutB/")({
  component: LayoutBIndex,
});
