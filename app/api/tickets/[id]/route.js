import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const id = params.id;

  const res = await fetch('http://localhost:3000/tickets/${id}');
  const ticket = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: 'Ticket not found' }, {
      status: 404
    });
  }

  return NextResponse.json(ticket, {
    status: 200
  });
}