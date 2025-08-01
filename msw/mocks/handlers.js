import { http, HttpResponse } from "msw";

let history = [];

const companyData = {
  mision:
    "Nuestra misión es innovar y liderar proporcionando las mejores soluciones tecnológicas.",
  vision:
    "Ser el líder global en innovación tecnológica y satisfacción del cliente.",
  historia:
    "Nuestra empresa fue fundada en 2001 con el objetivo de revolucionar la industria tecnologica, y desde entonces hemos crecido hasta convertirnos en un referente en el sector.",
  valores:
    "Nuestros valores incluyen integridad, innovación, trabajo en equipo, y compromiso con la excelencia.",
  servicios:
    "Ofrecemos una amplia gama de servicios, incluyendo desarrollo de software personalizado, consultoria en IA, soluciones en la nube, y soporte tecnico.",
  proyectos:
    "Tenemos varios proyectos, entre ellos: Proyecto Alfa, que desarrolla una nueva plataforma de IA para empresas, y Proyecto Beta, que crea una solución segura en la nube para clientes corporativos.",
  organigrama:
    "El organigrama de la empresa es el siguiente: CEO: Juan Pérez, CTO: Ana Gómez, COO: Carlos López, VP de Ingeniería: Laura Martínez, VP de Ventas: David García.",
  contacto:
    "Puedes contactarnos por correo electronico a contacto@empresa.com o llamarnos al +34 912 345 678.",
};

const defaultAnswers = {
  saludo: "¡Hola! 👋 ¿En qué puedo ayudarte hoy?",
  agradecimiento: "¡Gracias por tu consulta! 😊",
  despedida: "¡Hasta luego! 👋 Si necesitas algo más, no dudes en preguntar.",
  error: "Lo siento, no entendí tu consulta. 😅 Por favor, intenta de nuevo.",
};

export const handlers = [
  http.get("https://api.example.com/chat", ({ request }) => {
    const url = new URL(request.url);
    const requestId = url.searchParams.get("id");
    const chat = history.find(({ id }) => id == requestId) ?? {};
    return HttpResponse.json(chat);
  }),
  http.get("https://api.example.com/history", async () => {
    let response = history.map(({ id, userMessages, botMessages }) => {
      const title = userMessages[0]?.message;
      const info = botMessages[0];
      return { id, title, info };
    });
    response.reverse();
    await sleep(500);
    return HttpResponse.json(response);
  }),
  http.post("https://api.example.com/message", async ({ request }) => {
    const { id: requestId, message, file } = await request.json();
    let chat = history.find(({ id }) => id == requestId);
    if (!chat) {
      chat = { id: requestId, userMessages: [], botMessages: [] };
      history.push(chat);
    }

    let { userMessages, botMessages } = chat;
    userMessages.push({ message, file });

    let response = defaultAnswers.error;

    if (/\bhello\b|\bhola\b/.test(message)) response = defaultAnswers.saludo;
    if (/\bgracias\b|\bthank you\b/.test(message))
      response = defaultAnswers.agradecimiento;
    if (/\badios\b|\bhasta luego\b/.test(message))
      response = defaultAnswers.despedida;
    if (/\bmisión\b|\bmision\b/.test(message)) response = companyData.mision;
    if (/\bvisión\b|\bvision\b/.test(message)) response = companyData.vision;
    if (/\bhistoria\b/.test(message)) response = companyData.historia;
    if (/\bvalores\b/.test(message)) response = companyData.valores;
    if (/\bservicios?\b/.test(message)) response = companyData.servicios;
    if (/\bproyectos?\b/.test(message)) response = companyData.proyectos;
    if (/\borgani?grama\b|\borganigrama\b|\bequipo\b/.test(message))
      response = companyData.organigrama;
    if (/\bcontacto\b|\bcual es el contacto\b/.test(message))
      response = companyData.contacto;

    botMessages.push(response);

    return HttpResponse.json(history);
  }),
  http.get("https://api.example.com/search", async ({ request }) => {
    const url = new URL(request.url);
    const text = url.searchParams.get("message").toLowerCase();
    let results = history
      .filter(({ userMessages, botMessages }) => {
        return (
          userMessages.find(({ message }) => message.includes(text)) ||
          botMessages.find((message) => message.includes(text))
        );
      })
      .map(({ id, userMessages, botMessages }) => {
        const title =
          userMessages.find(({ message }) => message.includes(text))?.message ??
          userMessages[0]?.message;
        const info =
          botMessages.find((m) => m.includes(text)) ?? botMessages[0];
        return { id, title, info };
      });

    await sleep(500);
    return HttpResponse.json(results);
  }),
  http.delete("https://api.example.com/delete", async ({ request }) => {
    const url = new URL(request.url);
    const requestId = url.searchParams.get("id");
    history = history.filter(({ id }) => id != requestId);
    return HttpResponse.json({});
  }),
];

async function sleep(delay) {
  return await new Promise((resolve) => setTimeout(resolve, delay));
}
