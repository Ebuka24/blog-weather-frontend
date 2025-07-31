import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const namePrefix = searchParams.get('namePrefix') || '';

  try {
    const response = await fetch(
      `https://${process.env.GEODB_API_HOST}/v1/geo/countries?namePrefix=${namePrefix}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': process.env.GEODB_API_HOST!,
          'x-rapidapi-key': process.env.GEODB_API_KEY!,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("GeoDB fetch failed:", errorText);
      return new Response(JSON.stringify({ error: 'GeoDB API failed' }), { status: 500 });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("API catch error:", error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
