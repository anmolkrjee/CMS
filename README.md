# CMS Project

## Overview
CMS is a robust Content Management System backend built with Node.js, Express, MongoDB, and Socket.IO. It provides RESTful APIs for user authentication, artifact management, likes, comments, real-time chat, and media uploads via Cloudinary. The system is designed for scalability, security, and extensibility.


## Tech Stack used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- Cloudinary
- JWT
- bcrypt
- node-cron


## Key Features
- **User Authentication:** Secure JWT-based login and registration.
- **Artifact Management:** CRUD operations for digital artifacts.
- **Likes & Comments:** Social interaction features for artifacts.
- **Real-Time Chat:** Socket.IO-powered messaging between users.
- **Media Uploads:** Cloudinary integration for image/file storage.
- **Webhooks:** Support for external event triggers.
- **Rate Limiting & Roles:** Middleware for security and access control.
- **Scheduled Tasks:** Cron jobs for background operations.

## Folder Structure

```
CMS/
├── app.js                # Express app setup
├── server.js             # Server entry, Socket.IO integration
├── config/               # DB & Cloudinary config
├── controllers/          # Route logic (artifacts, auth, chats, etc.)
├── cron/                 # Scheduled tasks
├── middlewares/          # Auth, rate limiter, role, uploads
├── models/               # Mongoose schemas
├── public/               # Static files (chat.html)
├── routes/               # API route definitions
├── services/             # Business logic
├── sockets/              # Socket.IO handlers
├── uploads/              # Uploaded files
├── utils/                # Utility functions
├── webhook/              # Webhook handlers
└── README.md             # Project documentation
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <repo-url>
cd CMS
npm install
npm start
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following:

```
PORT=5000
MONGO_URI=<your-mongodb-uri>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
JWT_SECRET=<your-jwt-secret>
```

### 4. Start the Server

```bash
npm start
```
For development with auto-reload:
```bash
npx nodemon server.js
```

The server will run on the port specified in `.env` (default: 5000).

## API Structure

### Authentication
- `POST /auth/register` — Register a new user
- `POST /auth/login` — User login
- `POST /auth/logout` — User logout

### Artifacts
- `GET /artifacts` — List all artifacts
- `POST /artifacts` — Create artifact
- `GET /artifacts/:id` — Get artifact by ID
- `PUT /artifacts/:id` — Update artifact
- `DELETE /artifacts/:id` — Delete artifact

### Likes & Comments
- `POST /likes` — Like an artifact
- `POST /comments` — Comment on artifact

### Chats
- `GET /chats` — List chats
- `POST /chats` — Start chat
- Real-time: Socket.IO events (see `public/chat.html`)

### Webhooks
- `POST /webhooks` — Receive external events

## Real-Time Chat

The chat system uses Socket.IO for real-time communication. To connect:

```js
const socket = io('http://localhost:5000');
socket.emit('join', { userId });
socket.on('message', (msg) => { /* handle message */ });
```
See `public/chat.html` for a working example.

## Media Uploads

Artifacts and user profiles can include images/files uploaded to Cloudinary. Ensure your Cloudinary credentials are set in `.env`.

## Scheduled Tasks

Background jobs (e.g., cleanup, notifications) are managed via `node-cron` in the `cron/` folder.

## Security & Middleware

- **Authentication:** JWT tokens, password hashing (bcrypt)
- **Rate Limiting:** Prevent abuse via `express-rate-limit`
- **Role-Based Access:** Restrict routes by user role
- **CORS:** Configured for cross-origin requests

## Developer Notes

- All code is written in ES modules (`type: module` in `package.json`).
- MongoDB is required; ensure your URI is valid.
- Cloudinary is used for media storage; set up your account and credentials.
- Socket.IO enables real-time features; test with multiple clients.
- For production, use secure values for all secrets and environment variables.
- Middlewares are modular and can be extended for custom logic.


## Deployment

This backend project can be deployed on:

- Render
- Railway
- AWS EC2

Ensure all environment variables are configured in the hosting dashboard before starting the service.


## Production Notes

- Set environment variables in hosting dashboard
- Use strong JWT_SECRET
- Do not commit .env file
- Enable MongoDB network access


## Troubleshooting

- **MongoDB connection issues:** Check `MONGO_URI` and network access.
- **Cloudinary errors:** Verify API keys and account status.
- **Socket.IO not connecting:** Confirm server is running and CORS is configured.
- **Environment variables:** Double-check `.env` file placement and values.

## License

ISC

## Author
Anmol Kumar


