'use server'

export const deleteChat = async (id: string) => {
  const response = await fetch(`https://api.example.com/delete?id=${id}`, {
    method: 'DELETE'
  });
  const json = await response.json();
  return json;
}
