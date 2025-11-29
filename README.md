## Wells Fargo Business Credit Close-Up – FuteurCredX

This repository contains the Wells Fargo Business Credit Close-Up experience, implemented as a modern React single-page application and powered by FuteurCredX.

### Production URL

The application is hosted at:

`https://wells-fargo.futeurcredx.com`

### Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### Local development

Prerequisites:

- Node.js (LTS) and npm installed

Steps:

```sh
# Clone the repository
git clone https://github.com/shivvyas2/Wells-Fargo-Enterprise.git

# Change into the project directory
cd Wells-Fargo-Enterprise

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available on the port configured in `vite.config.ts` (by default `http://localhost:8080`).

### Building for production

```sh
npm run build
```

This will create an optimized production build in the `dist` directory, which is what is deployed to `wells-fargo.futeurcredx.com`.

### Deployment

Deployment is handled via your chosen CI/CD workflow by building the project and publishing the `dist` output to the hosting environment backing `wells-fargo.futeurcredx.com`.
