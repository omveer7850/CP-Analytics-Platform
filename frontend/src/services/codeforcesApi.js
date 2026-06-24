export async function getCodeforcesUser(username) {
  const response = await fetch(
    `https://codeforces.com/api/user.info?handles=${username}`
  );

  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error("User not found");
  }

  return data.result[0];
}