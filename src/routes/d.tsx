import { collectionD } from "@/collections/settings";
import { useLiveQuery } from "@tanstack/react-db";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/d")({
  component: RouteComponent,
  loader: async () => {
    console.log("Preloading: d");
    await collectionD.preload();
    console.log("Preloaded: d");
  },
});

function RouteComponent() {
  const { data } = useLiveQuery(collectionD);
  return (
    <div>
      <div>Hello "/d"!</div>
      <div>Data: {data.length}</div>
    </div>
  );
}
