import { createFileRoute } from "@tanstack/react-router";

const Index = () => {
  return <span>Home</span>;
};

export const Route = createFileRoute("/")({
  component: Index,
});
