import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI; 

  console.log('Mongo db URI inside connectDB:', MONGODB_URI);

  if (!MONGODB_URI) throw new Error("Please add MONGODB_URI to your .env file");

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
