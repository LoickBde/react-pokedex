import { createFileRoute } from "@tanstack/react-router";

const LayoutAWithId = () => {
  return <span>LayoutA with id</span>;
};

export const Route = createFileRoute("/layoutA/$id")({
  component: LayoutAWithId,
});
