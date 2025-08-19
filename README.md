# Go Downloader Frontend

A modern, minimal frontend for your Go Downloader application, built using **React**, **TypeScript**, and **Vite**. This project provides a fast, responsive, and extensible UI scaffold, ready to connect to your Go backend for file downloading and management.

---

## Features

- ⚡ **Vite-Powered:** Ultra-fast development and build times with Hot Module Replacement (HMR).
- ⚛️ **React + TypeScript:** Build robust, type-safe UIs efficiently.
- 🧹 **ESLint Integration:** Pre-configured with sensible linting rules for code quality.
- 🛠️ **Easy Customization:** Clean project structure—ideal for rapid prototyping and scaling.
- 🔌 **Plugin Support:** Ready to use with [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) or [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc).

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation (Frontend)

```bash
git clone https://github.com/DinuthInduwara/Go-Downloader-Frontend.git
cd Go-Downloader-Frontend
pnpm install        # or npm install / yarn install
```

### Running the Frontend

```bash
pnpm dev            # or npm run dev / yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Starting the Backend Server

This frontend is designed to work with the Go Downloader backend.  
To start the backend, use the [Go-Download-Server](https://github.com/DinuthInduwara/Go-Download-Server) repository:

```bash
git clone https://github.com/DinuthInduwara/Go-Download-Server.git
cd Go-Download-Server
go run main.go
```

- Make sure the backend is running before using the frontend.
- The frontend expects the backend API to be available locally by default. You can configure API endpoints in the frontend as needed.

---

## Project Structure

```
src/
  ├── assets/        # Images and static files
  ├── components/    # Reusable React components
  ├── pages/         # Page-level components (routes)
  ├── App.tsx        # Main application component
  └── main.tsx       # Entry point
public/
  └── index.html
```

---

## Frontend Screenshots / UI

<!-- Replace the lines below with actual screenshots when available -->
> **Frontend UI Screenshots:**
> - ![Frontend Screenshot Placeholder 1](https://github.com/DinuthInduwara/Go-Downloader-Frontend/blob/master/public/Screenshot%202025-08-19%20220557.png?raw=true)
> - ![Frontend Screenshot Placeholder 2](https://github.com/DinuthInduwara/Go-Downloader-Frontend/blob/master/public/Screenshot%202025-08-19%20220615.png?raw=true)
> - ![Frontend Screenshot Placeholder 3](https://github.com/DinuthInduwara/Go-Downloader-Frontend/blob/master/public/Screenshot%202025-08-19%20220629.png?raw=true)
> - ![Frontend Screenshot Placeholder 4](https://github.com/DinuthInduwara/Go-Downloader-Frontend/blob/master/public/Screenshot%202025-08-19%20220650.png?raw=true)
---

## ESLint & TypeScript Configuration

For production-grade linting, update your ESLint config:

```js
export default {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  // ...other rules
}
```
- Install peer dependencies:
  - `eslint-plugin-react`
  - `@typescript-eslint/eslint-plugin`
  - `@typescript-eslint/parser`

---

## Customization & Extending

- Add your own components in `src/components/`
- Connect to your Go backend via APIs—add fetch logic or use libraries like [Axios](https://axios-http.com/) or [React Query](https://tanstack.com/query/latest).
- Style your app with [Tailwind CSS](https://tailwindcss.com/) or [Styled Components](https://styled-components.com/).

---

## Useful Links

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Documentation](https://eslint.org/)
- [Go Downloader Backend](https://github.com/DinuthInduwara/Go-Download-Server)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Pull requests, issues, and suggestions are welcome! Please open an issue to discuss your ideas or improvements.
