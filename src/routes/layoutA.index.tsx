import { createFileRoute } from "@tanstack/react-router";

const LayoutAIndex = () => {
  return <span>LayoutA Index</span>;
};

export const Route = createFileRoute("/layoutA/")({
  component: LayoutAIndex,
});
