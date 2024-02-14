## Client

This repository contains the Client UI section of a chat application. The dashboard provides navigation to screens such as inbox, and account page. It utilizes various modules and libraries to ensure smooth functionality and a pleasant user experience.

### Modules Used

- **@reduxjs/toolkit** (^2.1.0): Redux toolkit for state management.
- **dotenv** (^16.4.1): Module for loading environment variables from a .env file into process.env.
- **flowbite-react** (^0.7.2): React components library for building user interfaces.
- **formik** (^2.4.5): Form library for React.
- **react** (^18.2.0): JavaScript library for building user interfaces.
- **react-dom** (^18.2.0): React package for working with the DOM.
- **react-loader-spinner** (^6.1.6): Loading spinner component for React.
- **react-redux** (^9.1.0): Official React bindings for Redux.
- **react-router-dom** (^6.22.0): DOM bindings for React Router.
- **redux-persist** (^6.0.0): Persist and rehydrate a Redux store.
- **socket.io-client** (^4.7.4): Socket.IO client for real-time communication.

### Development Dependencies

- **@types/react** (^18.2.43): TypeScript types for React.
- **@types/react-dom** (^18.2.17): TypeScript types for React DOM.
- **@vitejs/plugin-react-swc** (^3.5.0): Vite plugin for React with SWC.
- **autoprefixer** (^10.4.17): PostCSS plugin to parse CSS and add vendor prefixes automatically.
- **eslint** (^8.55.0): Pluggable JavaScript linter.
- **eslint-plugin-react** (^7.33.2): React specific linting rules for ESLint.
- **eslint-plugin-react-hooks** (^4.6.0): ESLint plugin for React hooks.
- **eslint-plugin-react-refresh** (^0.4.5): ESLint plugin for React Refresh.
- **postcss** (^8.4.35): Tool for transforming CSS with JavaScript plugins.
- **tailwindcss** (^3.4.1): Utility-first CSS framework for rapidly building custom designs.
- **vite** (^5.0.8): Next generation frontend tooling system.

### Scripts

- **dev**: Start the development server using Vite.
- **build**: Build the project for production.
- **lint**: Lint the project files using ESLint.
- **preview**: Preview the production build locally.

### Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Open your browser and navigate to the specified URL to view the Agent Dashboard.

### Features

1. **Real Time Messaging**
2. **User authentication and authorization**


### WORK FLOW

### Account Creation

- Users can create an account using their email, password, and username.
- Upon registration, the user's credentials are securely stored in the database.

### Authentication

- Before accessing the socket for message communication, users need to be authenticated.
- Authentication ensures that only registered users can participate in the messaging system.

### Socket.io Integration

- Socket.io facilitates real-time bidirectional communication between agents and clients.
- All agents are placed in a socket room called "agent," where they can receive messages from clients.

### Message Handling

- Clients can send messages to the "agent" room, where all agents can view and respond to them.
