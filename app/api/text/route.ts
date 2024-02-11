// pages/api/text.ts

import { NextResponse } from "next/server";

const TEXT_URL = "https://baconipsum.com/api/?type=meat-and-filler&paras=1";
export async function GET() {
  const response = await fetch(TEXT_URL);
  const text = await response.json();
  return NextResponse.json(text);
}
