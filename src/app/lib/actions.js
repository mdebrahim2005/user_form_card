"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

// 1. data.json-e user save korar function
export const post_users = async (newUser) => {
  const filePath = path.join(process.cwd(), "data", "data.json");

  try {
    const fileData = fs.readFileSync(filePath, "utf8");
    const usersData = JSON.parse(fileData);

    newUser.id = usersData.length > 0 ? usersData[usersData.length - 1].id + 1 : 1;
    newUser.createdAt = new Date().toISOString();

    usersData.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(usersData, null, 2));

    return { ok: true, user: newUser };
  } catch (error) {
    console.error("Save error:", error);
    return { ok: false };
  }
};

// 2. Form submit theke data newar action
export const createUser = async (formData) => {
  const newUser = Object.fromEntries(formData.entries());
  const res = await post_users(newUser);

  if (res.ok) {
    revalidatePath("/users");
  }

  return res;
};