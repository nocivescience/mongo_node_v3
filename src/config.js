import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = 'mongodb://nocivedb:zAiAoY4DGboyYZ6IakjYXkI1UFc466HnoBZ2NXFzPhPVtQWoXBMSwiJJJByQi020nZCzRvX1NLFyUgmwkKv91A%3D%3D@nocivedb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@nocivedb@'  || "mongodb://localhost/notesdb";
