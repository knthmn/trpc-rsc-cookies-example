"use client";

import { setUserId } from "./actions";

export function CookieControl() {
  return <button onClick={() => setUserId()}>Set User Id</button>;
}
