'use server'

export const getChatHistory = async () => {
  const response = await fetch(`https://api.example.com/history`, {
    method: 'get'
  });
  const json = await response.json();
  return json;
}
