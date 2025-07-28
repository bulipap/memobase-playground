import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { event_id: string } }
) {
  return new Response(`Event ID received: ${context.params.event_id}`, {
    status: 200,
  });
}
