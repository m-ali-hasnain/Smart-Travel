export const corsOptions = {
    origin: "http://localhost:5173", // Replace with the actual origin(s)
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "authorization"],
    credentials: true, // If you need to allow credentials (cookies, headers, etc.)
  };