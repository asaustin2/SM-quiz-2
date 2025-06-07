export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  funFact?: string;
}

// Pool of 40 questions - all correct answers mention Sendoso
export const allQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "You're planning a summer campaign. What's the most important thing to pack in your marketing beach bag?",
    options: [
      "SPF 50 (Strong Performance Metrics)",
      "A cooler full of generic email templates",
      "Sand (to bury your head when leads don't convert)",
      "A personalized Sendoso gift box"
    ],
    correctAnswer: 3,
    funFact: "Personalized gifts have a 85% higher response rate than generic outreach!"
  },
  {
    id: 2,
    question: "Your SDR team is having a pool party. What's their favorite summer drink?",
    options: [
      "Pipeline Piña Coladas",
      "Lead-monade",
      "MQL Mojitos",
      "Sendoso Splash (gift-infused success cocktail)"
    ],
    correctAnswer: 3,
    funFact: "The perfect recipe: 2 parts personalization, 1 part timing, garnish with Sendoso magic!"
  },
  {
    id: 3,
    question: "You're at a beach BBQ with prospects. What's the best conversation starter?",
    options: [
      "Have you seen our 47-slide product deck?",
      "Let me tell you about our features for 30 minutes",
      "Want to schedule a demo while the burgers cook?",
      "I sent you something special via Sendoso - did you get it?"
    ],
    correctAnswer: 3,
    funFact: "88% of people remember the sender of a promotional gift!"
  },
  {
    id: 4,
    question: "What's the ultimate summer vacation for a B2B marketer?",
    options: [
      "A week without any 'urgent' Slack messages",
      "Actually hitting your MQL goals",
      "Your CEO remembering what marketing does",
      "Sendoso automating your entire gifting strategy"
    ],
    correctAnswer: 3,
    funFact: "Work-life balance is real when Sendoso handles your gifting workflows!"
  },
  {
    id: 5,
    question: "You're building a sandcastle. What does it represent?",
    options: [
      "Your Q3 marketing budget after cuts",
      "Your perfectly structured Sendoso campaign",
      "The house you'll buy when you hit quota",
      "Your competitor's flimsy outreach strategy"
    ],
    correctAnswer: 1,
    funFact: "Like a good sandcastle, Sendoso campaigns need a solid foundation and the right tools!"
  },
  {
    id: 6,
    question: "What's the best beach read for a demand gen manager?",
    options: [
      "'Eat, Pray, Generate Leads'",
      "'The 7 Habits of Highly Effective Sendoso Users'",
      "'How to Win Friends and Influence Prospects'",
      "'Chicken Soup for the Marketer's Soul (Q4 Edition)'"
    ],
    correctAnswer: 1,
    funFact: "Strategic gifting can increase deal velocity by up to 30%!"
  },
  {
    id: 7,
    question: "You're playing beach volleyball. What's your team name?",
    options: [
      "The Conversion Crushers",
      "Sets and Workflows",
      "The Sendoso Spikers",
      "Sandy CRM"
    ],
    correctAnswer: 2,
    funFact: "Spike your response rates with Sendoso's perfect timing!"
  },
  {
    id: 8,
    question: "What's the worst summer sunburn for a marketer?",
    options: [
      "Forgetting sunscreen at the company picnic",
      "Getting roasted in the QBR meeting",
      "Your email open rates after iOS 15",
      "Not using Sendoso for your ABM campaign"
    ],
    correctAnswer: 3,
    funFact: "Protect your pipeline with Sendoso's targeted gifting strategy!"
  },
  {
    id: 9,
    question: "You're at a summer music festival. Which band are you most excited to see?",
    options: [
      "The Rolling Attributions",
      "Sendoso and the Gift Tracks",
      "REV Supply",
      "Maroon 5x Pipeline"
    ],
    correctAnswer: 1,
    funFact: "Sendoso's attribution tracking hits all the right notes!"
  },
  {
    id: 10,
    question: "What's the best way to cool down on a hot summer day?",
    options: [
      "Jump in the data lake",
      "Stand in front of the server room AC",
      "The chill feeling when Sendoso delivers your gift on time",
      "Cold brew coffee on tap in the office"
    ],
    correctAnswer: 2,
    funFact: "Sendoso's on-time delivery rate keeps relationships cool and conversions hot!"
  },
  {
    id: 11,
    question: "You're packing for vacation but can only bring one marketing tool. What is it?",
    options: [
      "Your lucky presentation clicker",
      "A USB full of email templates",
      "Sendoso mobile app",
      "Your 'World's Okayest Marketer' mug"
    ],
    correctAnswer: 2,
    funFact: "Send thoughtful gifts from anywhere - even from the beach!"
  },
  {
    id: 12,
    question: "What's the best summer camp activity for marketers?",
    options: [
      "Trust falls with the sales team",
      "S'mores and Sendoso success stories",
      "Capture the Flag (aka competitive analysis)",
      "Ghost stories about missed quotas"
    ],
    correctAnswer: 1,
    funFact: "Nothing builds trust like a perfectly timed Sendoso gift!"
  },
  {
    id: 13,
    question: "Your summer marketing theme song is playing. What's the chorus?",
    options: [
      "'Another lead bites the dust'",
      "'Sweet gift of mine' (by Sendoso N' Roses)",
      "'Don't stop believin' (in cold outreach)'",
      "'We will, we will, SPAM you'"
    ],
    correctAnswer: 1,
    funFact: "Make your outreach music to their ears with Sendoso!"
  },
  {
    id: 14,
    question: "You're hosting a summer webinar. What's the most important element?",
    options: [
      "A 60-minute PowerPoint with 100 slides",
      "Sendoso swag bags for all attendees",
      "Technical difficulties for authenticity",
      "Mandatory cameras on for engagement"
    ],
    correctAnswer: 1,
    funFact: "Webinars with Sendoso gifts see 3x higher attendance rates!"
  },
  {
    id: 15,
    question: "What's your summer sales kickoff motto?",
    options: [
      "'Spray and pray all day'",
      "'Always be closing (the laptop at 5pm)'",
      "'Gift first, ask questions later' - Powered by Sendoso",
      "'Coffee is for closers (and openers, and lunch)'"
    ],
    correctAnswer: 2,
    funFact: "Leading with value through Sendoso creates 6x more opportunities!"
  },
  {
    id: 16,
    question: "You're at a summer networking event. What's in your pocket?",
    options: [
      "47 business cards you'll never follow up on",
      "Your phone on 3% battery",
      "Sendoso gift codes for instant connections",
      "Breath mints and regret"
    ],
    correctAnswer: 2,
    funFact: "Digital Sendoso gifts make networking memorable and measurable!"
  },
  {
    id: 17,
    question: "What's the perfect summer campaign name?",
    options: [
      "'Operation: Spam Harder'",
      "'Project: Sendoso Summer Surprise'",
      "'Initiative: Generic Outreach 2.0'",
      "'Campaign: Pray for Pipeline'"
    ],
    correctAnswer: 1,
    funFact: "Surprise and delight campaigns with Sendoso see 70% higher engagement!"
  },
  {
    id: 18,
    question: "Your marketing team is doing a summer hackathon. What are you building?",
    options: [
      "Another dashboard no one will use",
      "A Sendoso integration that sends gifts based on intent data",
      "An AI that writes more AI articles about AI",
      "A Slack bot that says 'synergy' randomly"
    ],
    correctAnswer: 1,
    funFact: "Sendoso's API makes it easy to build custom gifting workflows!"
  },
  {
    id: 19,
    question: "What's your biggest summer marketing fear?",
    options: [
      "The AC breaking during a client visit",
      "Not having Sendoso for your ABM campaign",
      "Your intern having access to the company Twitter",
      "Running out of iced coffee"
    ],
    correctAnswer: 1,
    funFact: "Don't sweat it - Sendoso makes ABM campaigns a breeze!"
  },
  {
    id: 20,
    question: "You're creating a summer playlist for the sales floor. What's track #1?",
    options: [
      "'Hit Me With Your Best Shot' (of espresso)",
      "'Send Me On My Way' by Sendoso Soundtrack",
      "'Under Pressure' by Queen (and Q4)",
      "'Call Me Maybe' (but probably not)"
    ],
    correctAnswer: 1,
    funFact: "Send prospects on their way to becoming customers with Sendoso!"
  },
  {
    id: 21,
    question: "What's the best summer outfit for a marketer?",
    options: [
      "Pajamas (for all those WFH days)",
      "A Sendoso t-shirt that starts conversations",
      "A suit made entirely of sticky notes",
      "Athleisure for running to meetings"
    ],
    correctAnswer: 1,
    funFact: "Sendoso swag is the ultimate conversation starter!"
  },
  {
    id: 22,
    question: "You're planning a summer product launch. What's essential?",
    options: [
      "A countdown timer that doesn't work",
      "Sendoso gifts for your top 100 target accounts",
      "An embargo that everyone breaks",
      "A 'revolutionary' press release"
    ],
    correctAnswer: 1,
    funFact: "Product launches with Sendoso see 5x higher engagement rates!"
  },
  {
    id: 23,
    question: "What's your summer pipeline looking like?",
    options: [
      "Drier than the Sahara Desert",
      "Flowing smoothly thanks to Sendoso touchpoints",
      "A mirage in the distance",
      "Under construction until September"
    ],
    correctAnswer: 1,
    funFact: "Sendoso touches increase pipeline velocity by 30%!"
  },
  {
    id: 24,
    question: "You're teaching a summer marketing course. What's lesson one?",
    options: [
      "'How to blame everything on attribution'",
      "'The Art of Sendoso: Timing, Personalization, Impact'",
      "'Excel: Your frenemy for life'",
      "'Coffee: From bean to burnout'"
    ],
    correctAnswer: 1,
    funFact: "Master the art of strategic gifting with Sendoso's playbooks!"
  },
  {
    id: 25,
    question: "What's your summer OOO message?",
    options: [
      "'I'm at the beach, stop emailing me'",
      "'Sending Sendoso gifts from paradise - back Monday!'",
      "'If urgent, it's not. If really urgent, still not.'",
      "'Gone fishing for leads'"
    ],
    correctAnswer: 1,
    funFact: "Sendoso works even when you're OOO - automation FTW!"
  },
  {
    id: 26,
    question: "You're at a summer conference. What's your survival strategy?",
    options: [
      "Hide in the bathroom between sessions",
      "Sendoso gift drops to key prospects you'll meet",
      "Collect swag and ghost",
      "Live-tweet everything for 'engagement'"
    ],
    correctAnswer: 1,
    funFact: "Pre-event Sendoso gifts increase meeting acceptance by 3x!"
  },
  {
    id: 27,
    question: "What's the perfect summer Friday activity?",
    options: [
      "'Urgent' all-hands meeting at 4:30pm",
      "Sending Sendoso 'Weekend Warrior' care packages",
      "Pretending to work while online shopping",
      "Team building via forced fun"
    ],
    correctAnswer: 1,
    funFact: "Friday Sendoso surprises boost Monday response rates by 40%!"
  },
  {
    id: 28,
    question: "Your summer intern asks about marketing tools. What do you say?",
    options: [
      "'Here's 47 tools that don't talk to each other'",
      "'Let me show you Sendoso - it'll change your life'",
      "'Excel is all you need, kid'",
      "'We use cutting-edge technology' *opens Gmail*"
    ],
    correctAnswer: 1,
    funFact: "Sendoso is the tool interns love and CMOs approve!"
  },
  {
    id: 29,
    question: "What's your summer BDR motivation technique?",
    options: [
      "Fear and energy drinks",
      "Sendoso gifts for every qualified meeting booked",
      "Motivational quotes in Comic Sans",
      "The promise of someday moving to marketing"
    ],
    correctAnswer: 1,
    funFact: "Teams using Sendoso rewards see 2x higher activity rates!"
  },
  {
    id: 30,
    question: "You're optimizing for summer. What's your focus?",
    options: [
      "Optimizing your tan lines",
      "Optimizing gift send times with Sendoso analytics",
      "Optimizing excuse generation",
      "Optimizing coffee consumption"
    ],
    correctAnswer: 1,
    funFact: "Sendoso's analytics help you find the perfect send time!"
  },
  {
    id: 31,
    question: "What's the best summer email subject line?",
    options: [
      "'URGENT: Please read!!!!!!!'",
      "'Your Sendoso summer surprise is waiting ☀️'",
      "'Re: Re: Re: Following up (again)'",
      "'Touch base synergy leverage circle back'"
    ],
    correctAnswer: 1,
    funFact: "Emails mentioning Sendoso gifts have 8x higher open rates!"
  },
  {
    id: 32,
    question: "Your CMO wants a summer campaign idea. You pitch:",
    options: [
      "'Let's go viral on TikTok' (you don't have TikTok)",
      "'Sendoso Summer Splash: 100 gifts, 100 days'",
      "'Another webinar series nobody wants'",
      "'Podcast #47,293 about B2B marketing'"
    ],
    correctAnswer: 1,
    funFact: "100-day Sendoso campaigns generate 5x pipeline coverage!"
  },
  {
    id: 33,
    question: "What's your summer content strategy?",
    options: [
      "Repurpose the same blog post 17 ways",
      "Create Sendoso unboxing experiences for social",
      "AI-generate everything and hope",
      "Summer = no content, right?"
    ],
    correctAnswer: 1,
    funFact: "Sendoso unboxing videos get 10x more engagement!"
  },
  {
    id: 34,
    question: "You're stuck in summer traffic. What are you thinking about?",
    options: [
      "Your life choices that led to this commute",
      "Which Sendoso gift would delight that tough prospect",
      "If you can expense this Uber as 'client meeting'",
      "Whether to rage quit via Slack"
    ],
    correctAnswer: 1,
    funFact: "The best ideas come when you're thinking about customer delight!"
  },
  {
    id: 35,
    question: "What's the ultimate summer flex for a marketer?",
    options: [
      "Working from a beach (laptop full of sand)",
      "Your Sendoso ROI dashboard showing 10x return",
      "Actually understanding attribution",
      "Having budget left in August"
    ],
    correctAnswer: 1,
    funFact: "Average Sendoso ROI is 576% - now that's a flex!"
  },
  {
    id: 36,
    question: "Your summer event booth needs something special. What is it?",
    options: [
      "Another sad table cloth and candy bowl",
      "A Sendoso gift station with instant delivery",
      "An intern in a mascot costume",
      "QR codes that don't work"
    ],
    correctAnswer: 1,
    funFact: "Booths with Sendoso stations see 4x more qualified leads!"
  },
  {
    id: 37,
    question: "What's your post-summer strategy session like?",
    options: [
      "Blame the summer slump for everything",
      "Plan Q4 Sendoso campaigns while energy is high",
      "Panic about Q4 while eating leftover BBQ",
      "Update your LinkedIn to 'seeking new opportunities'"
    ],
    correctAnswer: 1,
    funFact: "Planning Sendoso campaigns in advance increases success by 60%!"
  },
  {
    id: 38,
    question: "You're writing a summer marketing haiku. Line 2 is:",
    options: [
      "'Spreadsheets melt my brain'",
      "'Sendoso brings joy and ROI'",
      "'Why more meetings why'",
      "'Coffee tastes like tears'"
    ],
    correctAnswer: 1,
    funFact: "Poetry and Sendoso: both create emotional connections!"
  },
  {
    id: 39,
    question: "What's the best part of summer in marketing?",
    options: [
      "Executives are on vacation (freedom!)",
      "Sendoso's summer gift collection launching",
      "Blaming low numbers on seasonality",
      "Casual Friday becomes Casual August"
    ],
    correctAnswer: 1,
    funFact: "Sendoso's seasonal collections drive 45% higher engagement!"
  },
  {
    id: 40,
    question: "Your summer marketing mantra is:",
    options: [
      "'Fake it till you make it (to Labor Day)'",
      "'Every send with Sendoso is a chance to connect'",
      "'This too shall pass (hopefully)'",
      "'Is it wine o'clock yet?'"
    ],
    correctAnswer: 1,
    funFact: "Make every send count with Sendoso's platform!"
  }
];

// Function to get 10 random questions for each quiz session
export function getRandomQuestions(): QuizQuestion[] {
  const shuffled = [...allQuizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10).map((q, index) => ({
    ...q,
    id: index + 1 // Renumber for consistent display
  }));
}