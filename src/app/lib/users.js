import "server-only";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const usersFile = join(process.cwd(), "data", "data.json");

export async function getUsers() {
  const data = await readFile(usersFile, "utf8");
  return JSON.parse(data);
}

export async function addUser(user) {
  const users = await getUsers();
  const nextId =
    users.reduce((maxId, currentUser) => Math.max(maxId, Number(currentUser.id) || 0), 0) + 1;
  const newUser = {
    ...user,
    id: nextId,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  await writeFile(usersFile, `${JSON.stringify(users, null, 2)}\n`, "utf8");
  return newUser;
}
