import { NextResponse } from "next/server";
import { functionsEndpoint } from "@/lib/functions-api";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(functionsEndpoint("health"), {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, status: response.status },
        { status: 200 },
      );
    }

    const data = await response.json().catch(() => ({}));

    return NextResponse.json({
      ok: true,
      service: data.service ?? "rv-it-consulting-functions",
    });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
