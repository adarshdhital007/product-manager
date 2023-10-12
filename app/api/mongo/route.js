import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { config } from "dotenv";

config(); 

export async function GET(request) {

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  
  try {
    const database = client.db('');
    const movies = database.collection('');
    
    const query = { };
    const movie = await movies.find(query).toArray();

    console.log(movie);
    return NextResponse.json({"a":400, try1})
  } finally {
   
    await client.close();
  }
}
