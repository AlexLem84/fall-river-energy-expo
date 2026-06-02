export const site = {
  name: 'Fall River Energy Expo',
  fullName: 'FRE Energy Expo & Annual Meeting of Members',
  organization: 'Fall River Rural Electric Cooperative',
  tagline: 'Where Service Matters',
  description:
    'Join us Saturday, June 13 at Teton High School in Driggs for free breakfast, giveaways, kids activities, member voting, and prize drawings.',
  url: 'https://energy-expo.vercel.app',
  event: {
    date: 'Saturday, June 13, 2026',
    dateShort: 'Saturday, June 13th',
    time: 'Doors open at 8:00 AM',
    location: 'Driggs, ID',
    venue: 'Teton High School',
    venueFull: 'Teton High School in Driggs',
  },
  voting: {
    closes: 'In-person voting closes at 10:00 AM Saturday, June 13, 2026.',
    drawing: 'Prize drawing will be held the week of June 15, 2026. Winners will be notified by phone.',
    callout: 'ALL YOU HAVE TO DO IS VOTE & YOU ARE AUTOMATICALLY ENTERED TO WIN!',
  },
  businessMeeting: {
    time: '10:00 AM',
    note: 'Members must be present at the business meeting to qualify to win a prize.',
  },
} as const;

export const perks = ['FREE Breakfast', 'Bring the Kids', 'Vote & Win'] as const;

export const freeGiveaways = [
  {
    title: 'ThermoCube Outlet',
    description:
      'FREE ThermoCube thermostatically controlled electric outlet — available while supplies last.',
    image: '/images/thermocube.png',
    alt: 'ThermoCube thermostatically controlled electric outlet',
  },
  {
    title: 'Idaho Cutting Board',
    description: 'FREE Idaho-shaped bamboo cutting board — available while supplies last.',
    image: '/images/cutting-board.png',
    alt: 'Idaho-shaped bamboo cutting board',
  },
  {
    title: 'Backpack',
    description: 'First 300 attendees receive a FREE backpack!',
    image: '/images/backpack.png',
    alt: 'Fall River Energy Expo backpack',
  },
] as const;

export const breakfastItems = [
  'Pancakes',
  'Eggs',
  'Bacon',
  'Sausage',
  'Hash browns',
  'A drink',
] as const;

export const kidsActivities = [
  'Bounce houses',
  'Climbing wall',
  'Bucket truck rides with our linemen',
  'STEM activities',
  'Cotton candy',
  'And more fun than ever!',
] as const;

export const votePrizes = [
  '$800 Energy Credit',
  'Roku HD Streaming device & soundbar',
  'FREE home energy audit — a $385 value',
  '$100 gift cards',
  'Over two dozen $50 bill credits',
] as const;

export const businessMeetingPrizes = [
  '$1,000 energy credit',
  '70-inch big screen television',
  'Dozens of other prizes',
] as const;

export const images = {
  logo: '/images/logo.png',
  heroBackground: '/images/tetons-hero.jpg',
  breakfast: '/images/breakfast.jpg',
  kidsBreakfast: '/images/kids-breakfast.jpg',
  climbingWall: '/images/climbing-wall.jpg',
} as const;
