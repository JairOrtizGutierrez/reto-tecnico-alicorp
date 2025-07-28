import { http, HttpResponse } from 'msw'

let history = [];

export const handlers = [
  http.get('https://api.example.com/chat', ({ request }) => {
    const url = new URL(request.url);
    const requestId = url.searchParams.get('id');
    const chat = history.find(({ id }) => id == requestId) ?? {}
    console.log('chat', chat, requestId)
    return HttpResponse.json(chat);
  }),
  http.get('https://api.example.com/history', () => {
    let response = history.map(({ id, userMessages, botMessages }) => {
      const title = userMessages[0]?.message;
      const info = botMessages[0];
      return { id, title, info };
    });
    response.reverse();
    return HttpResponse.json(response);
  }),
  http.post('https://api.example.com/message', async ({ request }) => {
    const { id: requestId, message, file } = await request.json();
    let chat = history.find(({ id }) => id == requestId);
    console.log('file api', file)
    if (!chat) {
      chat = { id: requestId, userMessages: [], botMessages: [] }
      history.push(chat);
    }

    let { userMessages, botMessages } = chat;
    userMessages.push({ message, file });
    botMessages.push('Hola, como estas? ' + Math.random())

    return HttpResponse.json(history);
  }),
  http.delete('https://api.example.com/delete', async ({ request }) => {
    const url = new URL(request.url);
    const requestId = url.searchParams.get('id');
    history = history.filter(({ id }) => id != requestId)
    return HttpResponse.json({});
  }),
];
