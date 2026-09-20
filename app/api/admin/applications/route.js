import { NextResponse } from "next/server";
import getMongoClient from "@/lib/mongodb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const status = searchParams.get("status");

  const query = {};
  if (category) query.category = category;
  if (status) query.status = status;

  try {
    const client = await getMongoClient();
    const db = client.db();
    const applications = await db
      .collection("applications")
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      applications: applications.map((a) => ({ ...a, _id: a._id.toString() })),
    });
  } catch (err) {
    console.error("Failed to fetch applications:", err);
    return NextResponse.json({ error: "Failed to load applications." }, { status: 500 });
  }
}
