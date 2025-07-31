import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { countryCode: string } }) {
  const countryCode = params.countryCode;
  const namePrefix = req.nextUrl.searchParams.get("namePrefix") || "";

  try {
    const response = await fetch(
      `https://${process.env.GEODB_API_HOST}/v1/geo/countries/${countryCode}/places?namePrefix=${namePrefix}`,
      {
        method: "GET",
        headers: {
          'X-RapidAPI-Host': process.env.GEODB_API_HOST!,
          'X-RapidAPI-Key': process.env.GEODB_API_KEY!,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GeoDB API responded with ${response.status}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    console.error("GeoDB fetch failed:", error.message);
    return new Response(JSON.stringify({ error: "Failed to fetch cities by country" }), { status: 500 });
  }
}
