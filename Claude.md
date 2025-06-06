# Summer Vibes Marketing Quiz - Project Instructions

## Project Overview
A fun, cheeky B2B marketing quiz website focused on summer vibes and Sendoso. The quiz is designed to be engaging and replayable for marketers, with free swag rewards for high scores.

## Key Features
- Interactive quiz about summer vibes themed around Sendoso
- Humorous, marketing-focused questions
- Score tracking with 80%+ threshold for free swag
- Lead generation form integration
- Shareable results to encourage viral spread
- Mobile-responsive design

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Repository**: https://github.com/asaustin2/SM-quiz-2.git

## Project Structure
```
/app
  /api         # API routes for form submission
  /components  # Reusable components
  /lib         # Utility functions
  page.tsx     # Main quiz page
  layout.tsx   # Root layout
/public        # Static assets (images, icons)
```

## Quiz Requirements
1. **Questions**: 10-15 summer/marketing themed questions
2. **Scoring**: Track correct answers, display percentage
3. **Lead Capture**: Collect email, name, company before results
4. **Swag Eligibility**: 80%+ score unlocks free Sendoso swag
5. **Shareability**: Social sharing buttons for results

## Design Guidelines
- Bright, summer-inspired color palette
- Playful animations and transitions
- Sendoso brand integration (with permission)
- Mobile-first responsive design
- Fast loading times for better UX

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run linting
npm run test     # Run tests (if applicable)
```

## Deployment
- Auto-deploy to Vercel on push to main branch
- Environment variables for API keys (if needed)
- Analytics integration for tracking engagement

## Content Tone
- Cheeky and humorous
- Marketing insider jokes
- Summer/beach/vacation references
- Sendoso product mentions where relevant
- Encouraging repeated plays

## Success Metrics
- Lead generation count
- Quiz completion rate
- Social shares
- Repeat visitors
- Swag redemption rate