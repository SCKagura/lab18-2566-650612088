import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Boonyaawut Buthboon",
    studentId: "6506102088",
  });
};
