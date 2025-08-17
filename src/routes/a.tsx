import { collectionA } from "@/collections/settings";
import { useLiveQuery } from "@tanstack/react-db";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a")({
  component: RouteComponent,
  loader: async () => {
    console.log("Preloading: a");
    await collectionA.preload();
    console.log("Preloaded: a");
  },
});

function RouteComponent() {
  const { data } = useLiveQuery(collectionA);
  return (
    <div>
      <div>Hello "/a"!</div>
      <div>Data: {data.length}</div>
    </div>
  );
}
