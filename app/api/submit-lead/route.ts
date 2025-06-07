import { NextRequest, NextResponse } from 'next/server';

async function sendEmailNotification(leadData: any) {
  const formData = new FormData();
  
  // Using Web3Forms free tier - no API key needed for testing
  // Replace with your own access key from https://web3forms.com
  formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY || '6c71781c-7f1d-4467-8f36-62fb5ce6fd3e');
  formData.append('to', 'austin.sandmeyer@sendoso.com');
  formData.append('subject', `New Quiz Lead: ${leadData.firstName} ${leadData.lastName} (${leadData.score}%)`);
  formData.append('from_name', 'Summer Vibes Quiz');
  
  const message = `
New Summer Vibes Quiz Lead!

Score: ${leadData.score}% ${leadData.score >= 80 ? '🏆 (Eligible for swag!)' : ''}

Contact Information:
- Name: ${leadData.firstName} ${leadData.lastName}
- Email: ${leadData.email}
- Company: ${leadData.company}
- Job Title: ${leadData.jobTitle}
- Phone: ${leadData.phoneNumber || 'Not provided'}
- Marketing Budget: ${leadData.marketingBudget || 'Not provided'}

Submitted at: ${new Date().toLocaleString()}

${leadData.score >= 80 ? '⚡ This lead qualifies for FREE SWAG! Please follow up ASAP.' : ''}
  `.trim();
  
  formData.append('message', message);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('Email sent successfully to austin.sandmeyer@sendoso.com');
      return true;
    } else {
      console.error('Email sending failed:', result);
      return false;
    }
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    console.log('New lead submitted:', data);
    
    // Send email notification
    await sendEmailNotification(data);
    
    // Store lead data (add your database integration here)
    // await saveToDatabase(data);
    
    // Send to CRM (add your CRM integration here)
    // await sendToCRM(data);
    
    // Trigger Sendoso API for swag fulfillment
    // if (data.score >= 80) {
    //   await sendosoAPI.createGift({
    //     recipient: data,
    //     campaign: 'summer-quiz-swag'
    //   });
    // }
    
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