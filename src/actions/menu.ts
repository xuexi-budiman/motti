"use server";

import { db } from "@/lib/db";

export const getAllMenus = async (userId: string) => {
  const menus = await db.menu.findMany({
    where: {
      userId,
    },
    include: {
      items: true,
      User: {
        select: {
          email: true,
          id: true,
        },
      },
    },
  });

  return { items: menus };
};
