// TODO: Implement brand profile CRUD API route

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { BrandProfile } from "@/lib/types";

export async function GET() {
  try {
    const _supabase = createClient();

    // TODO: Get authenticated user and fetch their brand profile
    // const { data: { user } } = await _supabase.auth.getUser();
    // const { data, error } = await _supabase
    //   .from("brand_profiles")
    //   .select("*")
    //   .eq("user_id", user?.id)
    //   .single();

    return NextResponse.json({ brand: null }); // Placeholder
  } catch (error) {
    console.error("Brand GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch brand profile" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const _supabase = createClient();
    const body: Partial<BrandProfile> = await request.json();

    // TODO: Get authenticated user and create/update brand profile
    // const { data: { user } } = await _supabase.auth.getUser();
    // const { data, error } = await _supabase
    //   .from("brand_profiles")
    //   .upsert({ ...body, user_id: user?.id })
    //   .select()
    //   .single();

    return NextResponse.json({ brand: body }); // Placeholder
  } catch (error) {
    console.error("Brand POST error:", error);
    return NextResponse.json(
      { error: "Failed to save brand profile" },
      { status: 500 }
    );
  }
}
