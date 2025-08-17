import { collectionB } from "@/collections/settings";
import { useLiveQuery } from "@tanstack/react-db";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/b")({
  component: RouteComponent,
  loader: async () => {
    console.log("Preloading: b");
    await collectionB.preload();
    console.log("Preloaded: b");
  },
});

function RouteComponent() {
  const { data } = useLiveQuery(collectionB);
  return (
    <div>
      <div>Hello "/b"!</div>
      <div>Data: {data.length}</div>
    </div>
  );
}
