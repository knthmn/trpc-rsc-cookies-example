"use server";

import { cookies } from "next/headers";

export async function setUserId() {
  cookies().set("userId", "123");
}
