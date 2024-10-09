import { HydrateClient, trpc } from "@/trpc/server";
import { HelloClientComponent } from "./HelloClientComponent";

export function HelloComponent() {
  // enabling this will remove the error 
//   console.log("prefetching on server");
//   void trpc.hello.prefetch({ text: "knthmn" });

  return (
    <HydrateClient>
      <HelloClientComponent />
    </HydrateClient>
  );
}
