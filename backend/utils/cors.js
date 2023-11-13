export const corsOptions = {
  origin: "http://localhost:5173", // Replace with the actual origin(s)
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "authorization"],
  credentials: true, // If you need to allow credentials (cookies, headers, etc.)
};
