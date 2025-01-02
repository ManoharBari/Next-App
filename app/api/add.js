import { NextResponse } from "next/server";

export default async function POST(Request) {
  let data = await Request.json();
  return NextResponse.json({ success: true, data });
}
