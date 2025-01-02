import { NextResponse } from "next/server";

async function POST(Request) {
  let data = await Request.json();
  return NextResponse.json({ success: true, data });
}

module.exports = { POST };
