import PocketBase from "pocketbase";
import { cookies, headers } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import PocketBaseInstance from "./pocketbase";

export function encodeCookie(cookie: { [key: string]: string }): string {
  let encodedCookie = "";
  for (const [key, value] of Object.entries(cookie)) {
    encodedCookie += `${encodeURIComponent(key)}=${encodeURIComponent(
      value
    )}; `;
  }
  return encodedCookie.trimEnd();
}

export function encodeNextPBCookie(next_cookie: RequestCookie | undefined) {
  if (!next_cookie) {
    return "";
  }

  const cookie = { pb_auth: next_cookie.value };
  let encodedCookie = "";
  for (const [key, value] of Object.entries(cookie)) {
    encodedCookie += `${encodeURIComponent(key)}=${encodeURIComponent(
      value
    )}; `;
  }

  return encodedCookie.trimEnd();
}

export async function server_component_pb() {
  // const cookie = req.cookies.get('pb_auth')?.value;
  const cookie = await getNextjsCookie();
  // const response = NextResponse.next();
  
  // load the auth store data from the request cookie string
  // console.log("server component cookie == ",cookie)

  PocketBaseInstance.authStore.loadFromCookie(cookie || "");
  // send back the default 'pb_auth' cookie to the client with the latest store state

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    PocketBaseInstance.authStore.isValid &&
      (await PocketBaseInstance.collection("users").authRefresh());
  } catch (_) {
    // clear the auth store on failed refresh
    PocketBaseInstance.authStore.clear();
  }

  return { PocketBaseInstance, cookies, headers };
}

export async function getNextjsCookie(request_cookie?: RequestCookie) {
  // console.log("middleware request cookie  === ",request_cookie)
  try {
    if (request_cookie) {
      const cookie = encodeNextPBCookie(request_cookie);
      return cookie;
    }
    const next_cookie = await cookies().get("pb_auth");
    const cookie = encodeNextPBCookie(next_cookie);
    return cookie;
  } catch (error: any) {
    console.log("issue getting next-cookie  === ", error);
    return "";
  }
}
