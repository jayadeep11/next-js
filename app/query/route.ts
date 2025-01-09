import { db } from "@vercel/postgres";

async function listInvoices() {
  const client = await db.connect(); // Ensure connection happens within the function
  try {
    const data = await client.sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;
    return data.rows;
  } finally {
    client.release(); // Always release the connection to prevent resource leakage
  }
}

export async function GET() {
  try {
    const invoices = await listInvoices();
    return Response.json(invoices);
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return Response.json({ error: "Failed to fetch invoices" }, { status: 500 });
  }
}

