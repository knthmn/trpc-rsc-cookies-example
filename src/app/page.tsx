import { cookies } from "next/headers";
import Image from "next/image";
import { CookieControl } from "./CookieControl";
import { HelloComponent } from "./HelloComponent";

export default function Home() {
  return (
    <div>
      <div>Hello</div>
      <CookieControl />
      <HelloComponent />
    </div>
  );
}
