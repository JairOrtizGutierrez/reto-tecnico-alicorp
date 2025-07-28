"use server";

export const getChatResponse = async (id: string) => {
  const response = await fetch(`https://api.example.com/chat?id=${id}`, {
    method: "get",
  });
  const json = await response.json();
  return json;
};
