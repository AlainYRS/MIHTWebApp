// app/api/excel-flag/route.ts
import { NextResponse } from "next/server";
import { FLAG } from "@/app/remote/remote-flag";

export const dynamic = "force-static"; // fijo hasta nuevo deploy

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      run: FLAG.run,
      reason: FLAG.reason,
      // útil para cache/control:
      version: "v1",
    },
    {
      headers: {
        // si quieres evitar cache en clientes/proxies, usa no-store:
        "Cache-Control": "no-store",
      },
    }
  );
}
