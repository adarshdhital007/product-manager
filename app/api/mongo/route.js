import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { config } from "dotenv";

config(); // Loads environment variables from the .env file

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  
  try {
    const database = client.db('asdf');
    const movies = database.collection('invesdfntory');

    // Query for a movie that has the title 'Back to the Future'
    const query = { };
    const movie = await movies.find(query).toArray();

    console.log(movie);
    return NextResponse.json({"a":400, movie})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
