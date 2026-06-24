export async function getLeetCodeUser(username) {
  const response = await fetch(
    `https://leetcode-stats-api.herokuapp.com/${username}`
  );

  const data = await response.json();

  if (data.status === "error") {
    throw new Error("User not found");
  }

  return data;
}