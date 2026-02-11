// app/remote/page.tsx
import { FLAG } from "../remote/remote-flag";

export const dynamic = "force-static"; // queda fijo hasta nuevo deploy

export default function RemotePage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif", maxWidth: 720 }}>
      <h1 style={{ marginBottom: 8 }}>Remote Control (Excel)</h1>

      <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <div style={{ fontSize: 14, color: "#666" }}>Estado actual</div>
        <div style={{ fontSize: 28, fontWeight: 700, marginTop: 6 }}>
          {FLAG.run ? "✅ RUN = TRUE" : "⛔ RUN = FALSE"}
        </div>

        <div style={{ marginTop: 10, color: "#444" }}>
          <b>Mensaje:</b> {FLAG.reason}
        </div>

        <div style={{ marginTop: 10, color: "#444" }}>
          <b>Endpoint para VBA:</b> <code>/api/excel-flag</code>
        </div>

        <div style={{ marginTop: 10, fontSize: 13, color: "#777" }}>
          Para cambiar el estado: edita <code>app/remote/remote-flag.ts</code> y redeploy.
        </div>
      </div>
    </main>
  );
}
