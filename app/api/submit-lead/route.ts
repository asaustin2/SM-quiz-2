import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send to CRM (HubSpot, Salesforce, etc.)
    // 3. Trigger email workflows
    // 4. Send notification to Sendoso for swag fulfillment
    
    console.log('New lead submitted:', data);
    
    // For now, just return success
    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully',
      eligibleForSwag: data.score >= 80
    });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing submission' },
      { status: 500 }
    );
  }
}