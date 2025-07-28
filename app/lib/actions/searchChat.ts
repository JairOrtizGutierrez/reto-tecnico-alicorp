'use server'

export const searchChat = async (message: string) => {
  const response = await fetch(`https://api.example.com/search?message=${message}`, {
    method: 'get'
  });
  const json = await response.json();
  return json;
}
