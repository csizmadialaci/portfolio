"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./lib/db";
import { revalidatePath } from "next/cache";
import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";

export async function postData(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const userMessage = formData.get("message");

  const data = await prisma.guestBookEntry.create({
    data: {
      userId: user.id,
      message: userMessage as string,
    },
  });

  revalidatePath("/guestbook");
}

export async function LogoutFunction() {
  const kinde = await createKindeClient({
    client_id: "f0a14712207243a39101d094c048f304",
    domain: "https://csizmadialaszlo.kinde.com",
    redirect_uri: "https://csizmadia-laszlo.vercel.app/",
  });
  await kinde.logout();
}
