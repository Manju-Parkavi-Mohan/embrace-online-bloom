import { createFileRoute } from "@tanstack/react-router";

const RECIPIENTS = ["md@autodome.ae", "md@adlautomotive.com", "sales@adlautomotive.com"];
const MAX_FILE_BYTES = 10 * 1024 * 1024;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const form = await request.formData();
          const get = (k: string) => String(form.get(k) ?? "").trim().slice(0, 4000);

          // Honeypot: bots fill hidden "website" field
          if (get("website")) return Response.json({ ok: true });

          const fullName = get("fullName");
          const phone = get("phone");
          const email = get("email");
          if (fullName.length < 2 || !/^\+?[0-9\s()-]{7,20}$/.test(phone)) {
            return Response.json({ ok: false, error: "Name and a valid phone are required." }, { status: 400 });
          }
          if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
            return Response.json({ ok: false, error: "Invalid email address." }, { status: 400 });
          }

          const fields: [string, string][] = [
            ["Full Name", fullName],
            ["Company", get("company")],
            ["Country", get("country")],
            ["Email", email],
            ["Phone", phone],
            ["Vehicle Brand", get("brand")],
            ["Service Required", get("service")],
            ["Fleet Size", get("fleetSize")],
            ["Message", get("message")],
          ];

          const attachments: { filename: string; content: Buffer }[] = [];
          const file = form.get("attachment");
          if (file && typeof file === "object" && "arrayBuffer" in file && file.size > 0) {
            if (file.size > MAX_FILE_BYTES) {
              return Response.json({ ok: false, error: "File must be under 10 MB." }, { status: 400 });
            }
            attachments.push({ filename: file.name || "attachment", content: Buffer.from(await file.arrayBuffer()) });
          }

          const host = process.env['SMTP_HOST'];
          const user = process.env['SMTP_USER'];
          const pass = process.env['SMTP_PASS'];
          if (!host || !user || !pass) {
            console.error("SMTP_HOST / SMTP_USER / SMTP_PASS not configured");
            return Response.json({ ok: false, error: "Email is not configured on the server." }, { status: 500 });
          }
          const port = Number(process.env['SMTP_PORT'] || 465);

          const nodemailer = (await import("nodemailer")).default;
          const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });

          const text = fields.map(([k, v]) => `${k}: ${v || "—"}`).join("\n");
          const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">${fields
            .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v || "—").replace(/\n/g, "<br>")}</td></tr>`)
            .join("")}</table><p style="color:#888;font-size:12px">Sent from the autodome.ae contact form</p>`;

          await transporter.sendMail({
            from: `"AutoDome Website" <${process.env['SMTP_FROM'] || user}>`,
            to: RECIPIENTS,
            replyTo: email || undefined,
            subject: `Website enquiry — ${get("service") || "General"} — ${fullName}`,
            text,
            html,
            attachments,
          });

          return Response.json({ ok: true });
        } catch (error) {
          console.error("Contact form send failed:", error);
          return Response.json({ ok: false, error: "Could not send your enquiry. Please try again." }, { status: 500 });
        }
      },
    },
  },
});
