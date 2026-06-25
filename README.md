<div align="center">

# 💬 Chatty

### A real-time full-stack chat application

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?style=flat-square&logo=socket.io)](https://socket.io)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## ✨ Features

- 🔐 **JWT Authentication** — secure signup, login, and logout with HttpOnly cookie sessions
- 💬 **Real-time Messaging** — instant message delivery using Socket.io WebSockets
- 📷 **Image Sharing** — send images in chat and update profile pictures (hosted on Cloudinary)
- 🟢 **Online Presence** — see which users are currently online in real time
- 🎨 **32 Themes** — full DaisyUI theme switcher (light, dark, synthwave, cyberpunk, and more)
- 👤 **Profile Management** — update your profile photo with live preview
- 📱 **Responsive Design** — works on mobile, tablet, and desktop
- 💀 **Skeleton Loading** — smooth loading placeholders while data fetches
- 🔔 **Toast Notifications** — user-friendly feedback for all actions

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js v5** | Web framework & REST API |
| **MongoDB + Mongoose** | Database & ODM |
| **Socket.io** | Real-time WebSocket communication |
| **JWT (jsonwebtoken)** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **Cloudinary** | Cloud image storage |
| **cookie-parser** | Reading HttpOnly cookies |
| **cors** | Cross-origin request handling |
| **dotenv** | Environment variable management |

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite 6** | Build tool & dev server |
| **React Router v7** | Client-side routing |
| **Zustand** | Global state management |
| **Axios** | HTTP client |
| **Socket.io-client** | Real-time event handling |
| **TailwindCSS v4** | Utility-first CSS framework |
| **DaisyUI v5** | UI component library (themes) |
| **lucide-react** | Icon set |
| **react-hot-toast** | Toast notification system |

---

## 📁 Project Structure

```
chat/
├── .gitignore                      # Root gitignore
├── README.md                       # This file
│
├── backend/
│   ├── .env.example                # Environment variable template
│   ├── .gitignore
│   ├── package.json
│   └── src/
│       ├── index.js                # Server entry point
│       ├── controllers/
│       │   ├── auth.controller.js  # Signup, login, logout, update profile
│       │   └── message.controller.js # Get users, get messages, send message
│       ├── db/
│       │   ├── db1.js              # MongoDB connection
│       │   ├── socket.js           # Socket.io server setup
│       │   ├── cloudinary.js       # Cloudinary configuration
│       │   └── util.js             # JWT token generator
│       ├── middlewares/
│       │   └── auth.middleware.js  # JWT route protection
│       ├── models/
│       │   ├── user.model.js       # User schema
│       │   └── message.model.js    # Message schema
│       ├── routes/
│       │   ├── auth.route.js       # /api/auth/* routes
│       │   └── message.route.js    # /api/messages/* routes
│       ├── seeds/
│       │   └── user.seed.js        # Database seeder (15 test users)
│       └── utils/
│           ├── ApiError.js         # Custom error class
│           ├── ApiResponse.js      # Standard response wrapper
│           ├── asyncHandler.js     # Async route handler wrapper
│           └── cloudinary.js       # File-based upload helper
│
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── main.jsx                # React entry point
        ├── App.jsx                 # Root component + routing
        ├── index.css               # Tailwind + DaisyUI imports
        ├── lib/
        │   ├── axios.js            # Configured Axios instance
        │   └── utils.js            # formatMessageTime helper
        ├── store/
        │   ├── useAuthStore.js     # Auth state + socket management
        │   ├── useChatStore.js     # Chat state + messaging
        │   └── useThemeStore.js    # Theme persistence
        ├── pages/
        │   ├── HomePage.jsx        # Main chat layout
        │   ├── LoginPage.jsx       # Login form
        │   ├── SignupPage.jsx      # Registration form
        │   ├── ProfilePage.jsx     # Profile + avatar upload
        │   └── SettingsPage.jsx    # Theme switcher
        └── components/
            ├── Navbar.jsx
            ├── Sidebar.jsx         # Contact list + online status
            ├── ChatContainer.jsx   # Message thread
            ├── ChatHeader.jsx      # Chat area header
            ├── MessageInput.jsx    # Text + image input
            ├── NoChatSelected.jsx  # Welcome placeholder
            ├── AuthimagePattern.jsx # Auth page decoration
            └── skeletons/
                ├── MessageSkeleton.jsx
                └── SidebarSkeleton.jsx
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js** v18 or higher → [nodejs.org](https://nodejs.org)
- **npm** v9 or higher (comes with Node.js)
- A **MongoDB Atlas** account → [cloud.mongodb.com](https://cloud.mongodb.com) (free tier works)
- A **Cloudinary** account → [cloudinary.com](https://cloudinary.com) (free tier works)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Vinay7115/chat_application.git
cd chat_application
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create your environment file:

```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

Open `backend/.env` and fill in your values:

```env
PORT=5001
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=your_long_random_secret_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

#### Getting your credentials:

**MongoDB URI:**
1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free cluster → Connect → Drivers
3. Copy the connection string and replace `<password>` with your DB user's password

**Cloudinary:**
1. Go to [console.cloudinary.com](https://console.cloudinary.com)
2. Your dashboard shows `Cloud Name`, `API Key`, and `API Secret`

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

---

### 4. Run the Application

Open **two terminal windows**:

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
# ✅ Server running at http://localhost:5001
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
# ✅ App running at http://localhost:5173
```

Open your browser at **[http://localhost:5173](http://localhost:5173)**

---

### 5. (Optional) Seed the Database

To populate the database with 15 test users for development:

```bash
cd backend
npm run seed
```

This creates users with password `123456`. You can log in as any of them:

| Name | Email |
|---|---|
| Emma Thompson | emma.thompson@example.com |
| Olivia Miller | olivia.miller@example.com |
| Sophia Davis | sophia.davis@example.com |
| James Anderson | james.anderson@example.com |
| William Clark | william.clark@example.com |
| … and 10 more | password: `123456` |

---

## 🔌 API Reference

### Auth Endpoints

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| `POST` | `/api/auth/signup` | ❌ | Create a new account |
| `POST` | `/api/auth/login` | ❌ | Login with email + password |
| `POST` | `/api/auth/logout` | ❌ | Clear session cookie |
| `PUT` | `/api/auth/update-profile` | ✅ | Update profile picture |
| `GET` | `/api/auth/check` | ✅ | Verify current session |

### Message Endpoints

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| `GET` | `/api/messages/users` | ✅ | Get all users (for sidebar) |
| `GET` | `/api/messages/:id` | ✅ | Get chat history with a user |
| `POST` | `/api/messages/send/:id` | ✅ | Send a message to a user |

---

## ⚡ Socket.io Events

| Event | Direction | Payload | Description |
|---|---|---|---|
| `connection` | Client → Server | `{ userId }` in query | User connects |
| `disconnect` | Client → Server | — | User disconnects |
| `getOnlineUsers` | Server → All Clients | `string[]` (userIds) | Updated online users list |
| `newMessage` | Server → Receiver | `Message` object | Real-time message delivery |

---

## 🗄️ Data Models

### User
```json
{
  "_id": "ObjectId",
  "email": "user@example.com",
  "fullName": "John Doe",
  "password": "$2b$10$...",
  "profilePic": "https://res.cloudinary.com/...",
  "createdAt": "ISO timestamp",
  "updatedAt": "ISO timestamp"
}
```

### Message
```json
{
  "_id": "ObjectId",
  "senderId": "ObjectId",
  "receiverId": "ObjectId",
  "text": "Hello!",
  "image": "https://res.cloudinary.com/... (optional)",
  "createdAt": "ISO timestamp",
  "updatedAt": "ISO timestamp"
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Commit Message Convention
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `style:` — formatting, no logic change
- `refactor:` — code restructure without feature change
- `chore:` — build, tooling, dependency updates

---

## ⚠️ Environment Variables

> **NEVER commit your `.env` file to Git.** It contains secret credentials that would allow anyone to access your database and cloud accounts.

The `.env.example` file documents all required variables with placeholder values. Always use that as a template.

To generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## 📦 Scripts Reference

### Backend (`cd backend`)
| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot-reload (nodemon) |
| `npm run start` | Start production server |
| `npm run seed` | Seed database with 15 test users |

### Frontend (`cd frontend`)
| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ using the MERN Stack + Socket.io

</div>
