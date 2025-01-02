import { NextResponse } from "next/server";

async function POST(Request) {
  let data = await Request.json();
  console.log(data);
  return NextResponse.json({ success: true, data });
}

module.exports = { POST };
