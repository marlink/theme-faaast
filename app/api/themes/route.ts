import { NextRequest, NextResponse } from 'next/server';
import { validateTheme } from '@/lib/validation/theme-schema';
import { defaultTheme } from '@/lib/theme-engine/theme-context';

// GET /api/themes - Get current theme
export async function GET() {
  try {
    // In a real app, you'd fetch from a database
    // For now, return the default theme
    return NextResponse.json({
      success: true,
      data: defaultTheme,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch theme' }, { status: 500 });
  }
}

// POST /api/themes - Save/update theme
export async function POST(request: NextRequest) {
  try {
    const themeData = await request.json();

    // Validate the theme
    const validation = await validateTheme(themeData);

    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid theme data',
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    // In a real app, you'd save to a database
    // For now, just return success
    return NextResponse.json({
      success: true,
      data: validation.data,
      message: 'Theme saved successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save theme' }, { status: 500 });
  }
}

// PUT /api/themes - Update theme
export async function PUT(request: NextRequest) {
  try {
    const themeData = await request.json();

    // Validate the theme
    const validation = await validateTheme(themeData);

    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid theme data',
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    // In a real app, you'd update in a database
    // For now, just return success
    return NextResponse.json({
      success: true,
      data: validation.data,
      message: 'Theme updated successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update theme' }, { status: 500 });
  }
}
