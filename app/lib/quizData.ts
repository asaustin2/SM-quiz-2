export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  funFact?: string;
}

export const quizQuestions: QuizQuestion[] = [
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
      "SQL Sangria"
    ],
    correctAnswer: 1,
    funFact: "Pipeline Piña Coladas: 2 parts qualified leads, 1 part personalization, shake with Sendoso magic!"
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
      "All of the above, plus automated gifting workflows"
    ],
    correctAnswer: 3,
    funFact: "Work-life balance is important, but automated workflows make it actually achievable!"
  },
  {
    id: 5,
    question: "You're building a sandcastle. What does it represent?",
    options: [
      "Your Q3 marketing budget after the CEO's cuts",
      "The house you'll buy when you hit quota",
      "Your perfectly segmented ABM strategy",
      "Your competitor's flimsy outreach strategy"
    ],
    correctAnswer: 2,
    funFact: "Like a good sandcastle, ABM strategies need a solid foundation and the right tools!"
  },
  {
    id: 6,
    question: "What's the best beach read for a demand gen manager?",
    options: [
      "'Eat, Pray, Generate Leads'",
      "'The 7 Habits of Highly Effective Gifters'",
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
      "The Spike in Pipeline",
      "Sandy CRM"
    ],
    correctAnswer: 2,
    funFact: "Just like in volleyball, timing and coordination are everything in B2B marketing!"
  },
  {
    id: 8,
    question: "What's the worst summer sunburn for a marketer?",
    options: [
      "Forgetting sunscreen at the company picnic",
      "Getting roasted in the QBR meeting",
      "Your email open rates after iOS 15",
      "Sending a gift to the wrong address"
    ],
    correctAnswer: 1,
    funFact: "Always prepare for QBRs like you prepare for the sun - with protection and data!"
  },
  {
    id: 9,
    question: "You're at a summer music festival. Which band are you most excited to see?",
    options: [
      "The Rolling Attributions",
      "Guns N' ROI-ses",
      "REV Supply",
      "Maroon 5x Pipeline"
    ],
    correctAnswer: 3,
    funFact: "5x pipeline coverage is music to any sales team's ears!"
  },
  {
    id: 10,
    question: "What's the best way to cool down on a hot summer day?",
    options: [
      "Jump in the data lake",
      "Stand in front of the server room AC",
      "Cold brew coffee on tap in the office",
      "The chill feeling when a prospect says 'Yes' to a meeting"
    ],
    correctAnswer: 3,
    funFact: "That 'yes' feeling never gets old - and Sendoso helps you get more of them!"
  },
  {
    id: 11,
    question: "You're packing for vacation but can only bring one marketing tool. What is it?",
    options: [
      "Your lucky presentation clicker",
      "A USB full of email templates",
      "Your 'World's Okayest Marketer' mug",
      "Sendoso mobile app"
    ],
    correctAnswer: 3,
    funFact: "Send thoughtful gifts from anywhere - even from the beach!"
  },
  {
    id: 12,
    question: "What's the best summer camp activity for marketers?",
    options: [
      "Trust falls with the sales team",
      "S'mores and scorecards",
      "Capture the Flag (aka competitive analysis)",
      "Ghost stories about missed quotas"
    ],
    correctAnswer: 1,
    funFact: "S'mores and scorecards: the perfect blend of sweet success and data-driven decisions!"
  }
];