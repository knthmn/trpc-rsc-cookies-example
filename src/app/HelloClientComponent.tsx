"use client";

import { trpc } from "@/trpc/client";
import { useEffect } from "react";

export function HelloClientComponent() {
  console.log(
    `suspending inside client component, has window: ${typeof window !== "undefined"}`
  );
  const [response] = trpc.hello.useSuspenseQuery({ text: "knthmn" });
  return <div>{response.greeting}</div>;
}
