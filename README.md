# Summer Vibes Marketing Quiz 🌴

A fun, interactive B2B marketing quiz built for Sendoso that tests marketers' summer knowledge while generating leads. Score 80% or higher to win free Sendoso swag!

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎯 Features

- 12 cheeky marketing-themed questions
- Interactive UI with smooth animations
- Lead capture form integration
- Shareable results
- 80%+ score unlocks free swag eligibility
- Mobile-responsive design

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel hosting

## 📝 Environment Variables

No environment variables required for basic functionality. For production, you may want to add:

```
SENDOSO_API_KEY=your_api_key
CRM_WEBHOOK_URL=your_crm_webhook
```

## 🚢 Deployment

This app is configured for automatic deployment to Vercel. Simply connect your GitHub repository to Vercel and it will deploy on every push to main.

## 📊 Lead Data

Leads are captured via the `/api/submit-lead` endpoint. Currently logs to console but can be easily integrated with:
- Sendoso API for swag fulfillment
- HubSpot/Salesforce for CRM
- Email automation platforms

## 🎨 Customization

Quiz questions can be modified in `/app/lib/quizData.ts`