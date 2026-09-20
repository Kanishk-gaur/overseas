import { MongoClient } from "mongodb";

let clientPromise;

function createClientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Add it to your .env.local file (see .env.example)."
    );
  }
  const client = new MongoClient(uri);
  return client.connect();
}

// Lazily created on first use (not at module load) so route modules can be
// analyzed/bundled during `next build` without a MONGODB_URI present yet.
export default function getMongoClient() {
  if (!clientPromise) {
    if (process.env.NODE_ENV === "development") {
      if (!global._mongoClientPromise) {
        global._mongoClientPromise = createClientPromise();
      }
      clientPromise = global._mongoClientPromise;
    } else {
      clientPromise = createClientPromise();
    }
  }
  return clientPromise;
}
