<h1 align="center">
  Asistente Virtual Inteligente<br>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="React Query" />
  <img src="https://img.shields.io/badge/Zustand-FFB700?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-88C0D0?style=for-the-badge&logo=gsap&logoColor=black" alt="GSAP" />
  <img src="https://img.shields.io/badge/ShadCN-2E2E2E?style=for-the-badge&logo=shadcn&logoColor=white" alt="ShadCN" />
</p>

Este proyecto es una aplicación web tipo chat desarrollada con **Next.js 15** que permite a los usuarios realizar consultas sobre una empresa (misión, visión, organigrama, etc.), enviar archivos y revisar historiales de conversación. Las respuestas se generan simulando una API mediante **MSW** (Mock Service Worker).

![Preview](https://i.imgur.com/ZMQT9M9.gif)

## 🚀 Funcionalidades Principales

- **Chat Interactivo:** Envía mensajes, recibe respuestas automáticas simuladas y adjunta archivos (imágenes, videos, PDFs).
- **Gestión de Historial:** Revisa, elimina y continúa conversaciones anteriores.
- **Búsqueda:** Filtra conversaciones mediante un buscador basado en coincidencias textuales.
- **Adjuntos:**
  - Imágenes: Renderizadas directamente en el chat.
  - Videos y PDFs: Mostrados como enlaces de descarga.

---

## 🧱 Tecnologías Utilizadas

- **Next.js 15** – Framework principal
- **Tailwind CSS** – Estilos utilitarios
- **ShadCN UI** – Componentes accesibles y personalizables
- **TanStack React Query** – Manejo de datos
- **Zustand** – Estado global reactivo
- **GSAP (GreenSock)** – Animaciones fluidas
- **Biome** – Herramienta de formateo y linting unificada
- **MSW (Mock Service Worker)** – Simulación de API
- **pnpm** – Gestor de paquetes rápido
- **TypeScript** – Tipado estricto

---

## ⚙️ Instalación del Proyecto

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/JairOrtizGutierrez/reto-tecnico-alicorp.git
   cd reto-tecnico-alicorp

   ```

2. **Instalar las dependencias**

   ```bash
   pnpm install

   ```

3. **Ejecutar el entorno de desarrollo**
   ```bash
   pnpm run dev
   ```

## 📁 Estructura del Proyecto

```txt
📁 components
  ├── 📁 chat
  │   ├── 📄 ChatAnswer.tsx           → Renderiza la respuesta del bot
  │   ├── 📄 ChatBoard.tsx            → Muestra el contenido del chat
  │   ├── 📄 ChatFilePreview.tsx      → Preview de imágenes o archivos
  │   ├── 📄 ChatFinder.tsx           → Botón para buscar chats
  │   ├── 📄 ChatInput.tsx            → Input principal para consultas
  │   ├── 📄 ChatQuestion.tsx         → Mensaje del usuario
  │   ├── 📄 ChatResults.tsx          → Resultados del buscador
  │   ├── 📄 ChatSideBar.tsx          → Aside con historial de chats
  ├── 📁 providers
  │   └── 📄 QueryProvider.tsx        → Provider de React Query
  └── 📁 ui                          → Componentes de ShadCN UI

📁 hooks
  ├── 📄 useDeleteChat.ts             → Elimina un chat
  ├── 📄 useMobile.ts                 → Detecta si el usuario está en móvil
  └── 📄 useSendMessage.ts            → Envía mensaje al servidor

📁 store
  └── 📄 useStore.ts                  → Estado global con Zustand

📁 lib
  ├── 📄 query.ts                     → Configuración de React Query
  ├── 📄 utils.ts                     → Funciones utilitarias
  └── 📁 actions
      ├── 📄 deleteChat.ts            → Elimina un chat por ID
      ├── 📄 getChatHistory.ts        → Obtiene historial completo de chats
      ├── 📄 getChatResponse.ts       → Obtiene respuesta específica del chat
      ├── 📄 searchChat.ts            → Busca chats que coincidan con criterio
      └── 📄 sendChatMessage.ts       → Envía y guarda mensaje en el chat

📁 models
  ├── 📄 IFile.ts
  ├── 📄 IHistory.ts
  └── 📄 IMessage.ts
```
