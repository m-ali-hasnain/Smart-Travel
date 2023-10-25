export const corsOptions = {
  origin: "http://127.0.0.1:5173", // Replace with the actual origin(s)
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "authorization"],
  credentials: true, // If you need to allow credentials (cookies, headers, etc.)
  
};
