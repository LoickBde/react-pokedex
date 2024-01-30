import { createFileRoute } from "@tanstack/react-router";

const LayoutBWithId = () => {
  return <span>LayoutB with id</span>;
};

export const Route = createFileRoute("/layoutB/$id")({
  component: LayoutBWithId,
});
