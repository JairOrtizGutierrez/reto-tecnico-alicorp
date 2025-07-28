import { http, HttpResponse } from 'msw';

let history = [];

export const handlers = [
  http.get('https://api.example.com/chat', ({ request }) => {
    const url = new URL(request.url);
    const requestId = url.searchParams.get('id');
    const chat = history.find(({ id }) => id == requestId) ?? {}
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
    if (!chat) {
      chat = { id: requestId, userMessages: [], botMessages: [] }
      history.push(chat);
    }

    let { userMessages, botMessages } = chat;
    userMessages.push({ message, file });
    botMessages.push('Hola, como estas? ' + Math.random())

    return HttpResponse.json(history);
  }),
  http.get('https://api.example.com/search', async ({ request }) => {
    const url = new URL(request.url);
    const text = url.searchParams.get('message').toLowerCase();
    console.log('text', text)
    let results = history.filter(({ userMessages, botMessages }) => {
      return userMessages.find(({ message }) => message.includes(text)) || botMessages.includes(text);
    }).map(({ id, userMessages, botMessages }) => {
      const title = userMessages.find(({ message }) => message.includes(text))?.message ?? userMessages[0]?.message;
      const info = botMessages.find(m => m.includes(text)) ?? botMessages[0];
      return { id, title, info };
    });
    console.log('results', results)

    return HttpResponse.json(results);
  }),
  http.delete('https://api.example.com/delete', async ({ request }) => {
    const url = new URL(request.url);
    const requestId = url.searchParams.get('id');
    history = history.filter(({ id }) => id != requestId)
    return HttpResponse.json({});
  }),
];
