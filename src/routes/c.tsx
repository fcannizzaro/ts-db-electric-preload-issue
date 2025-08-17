import { collectionC } from "@/collections/settings";
import { useLiveQuery } from "@tanstack/react-db";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/c")({
  component: RouteComponent,
  loader: async () => {
    console.log("Preloading: c");
    await collectionC.preload();
    console.log("Preloaded: c");
  },
});

function RouteComponent() {
  const { data } = useLiveQuery(collectionC);
  return (
    <div>
      <div>Hello "/c"!</div>
      <div>Data: {data.length}</div>
    </div>
  );
}
