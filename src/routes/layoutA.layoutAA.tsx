import { createFileRoute } from "@tanstack/react-router";

const LayoutAA = () => {
  return <span>LayoutAA</span>;
};

export const Route = createFileRoute("/layoutA/layoutAA")({
  component: LayoutAA,
});
