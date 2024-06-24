"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./lib/db";
import { revalidatePath } from "next/cache";

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