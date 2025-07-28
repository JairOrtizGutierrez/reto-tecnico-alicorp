# Chat Empresarial – Aplicación Web Interactiva

Este proyecto es una aplicación web tipo chat desarrollada con **Next.js 15** que permite a los usuarios realizar consultas sobre una empresa (misión, visión, organigrama, etc.), enviar archivos y revisar historiales de conversación. Las respuestas se generan simulando una API mediante **MSW** (Mock Service Worker).

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

3. **Ejecuta el entorno de desarrollo**
   ```bash
   pnpm run dev
   ```
