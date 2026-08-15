import { LandmarkItem } from '../types/neighborhood.types'

export const neighborhoodData: LandmarkItem[] = [
  // Transit & Connectivity
  {
    id: 'sealink',
    name: 'Bandra-Worli Sea Link Interchange',
    category: 'transit',
    distance: '1.2 km',
    driveTime: '3 mins',
    description: 'Direct uninterrupted expressway access to Bandra, BKC financial hub, and North Mumbai.',
  },
  {
    id: 'coastal-road',
    name: 'Mumbai Coastal Road Promenade Entry',
    category: 'transit',
    distance: '0.8 km',
    driveTime: '2 mins',
    description: 'High-speed transit connecting Marine Drive to Kandivali with pedestrian sea-view walkways.',
  },
  {
    id: 'metro-line-3',
    name: 'Worli Underground Metro Station (Aqua Line 3)',
    category: 'transit',
    distance: '1.5 km',
    driveTime: '4 mins',
    description: 'Seamless subterranean high-speed rail access across South Mumbai and airport corridors.',
  },

  // Aviation
  {
    id: 'mumbai-airport',
    name: 'Chhatrapati Shivaji Maharaj International Airport (T2)',
    category: 'aviation',
    distance: '14.8 km',
    driveTime: '24 mins',
    description: 'Direct VIP terminal corridor via Sea Link and Western Freeway.',
  },
  {
    id: 'mahalaxmi-helipad',
    name: 'Mahalaxmi Helipad & Private Aviation Charter',
    category: 'aviation',
    distance: '3.2 km',
    driveTime: '7 mins',
    description: 'Point-to-point private helicopter transfers to Pune, Alibaug, and private charter hangars.',
  },

  // Private Clubs & Fine Dining
  {
    id: 'willingdon-club',
    name: 'The Willingdon Sports Club & 18-Hole Golf Course',
    category: 'clubs',
    distance: '3.6 km',
    driveTime: '8 mins',
    description: 'Mumbai’s historic premier private country club featuring golf, polo grounds, and dining suites.',
  },
  {
    id: 'taj-lands-end',
    name: 'Taj Lands End & Wasabi by Morimoto',
    category: 'clubs',
    distance: '6.4 km',
    driveTime: '11 mins',
    description: 'Iconic 5-star seaside dining, private marina berths, and executive suites.',
  },
  {
    id: 'st-regis-palladium',
    name: 'The St. Regis Mumbai & Palladium Luxury Enclave',
    category: 'clubs',
    distance: '2.8 km',
    driveTime: '6 mins',
    description: 'Haute couture flagships, Michelin-starred culinary venues, and luxury private lounges.',
  },

  // Healthcare
  {
    id: 'hinduja-hospital',
    name: 'P.D. Hinduja National Hospital & Medical Research Centre',
    category: 'healthcare',
    distance: '5.2 km',
    driveTime: '12 mins',
    description: 'Premier quaternary healthcare with 24/7 dedicated executive emergency airlift protocols.',
  },
  {
    id: 'breach-candy',
    name: 'Breach Candy Hospital Trust',
    category: 'healthcare',
    distance: '4.8 km',
    driveTime: '10 mins',
    description: 'Renowned medical center providing world-class physician suites and private surgical facilities.',
  },

  // Education
  {
    id: 'bombay-international',
    name: 'Bombay International School (IB World School)',
    category: 'education',
    distance: '5.6 km',
    driveTime: '14 mins',
    description: 'Historic prestigious International Baccalaureate curriculum institution.',
  },
  {
    id: 'dhirubhai-ambani',
    name: 'Dhirubhai Ambani International School (BKC)',
    category: 'education',
    distance: '11.5 km',
    driveTime: '18 mins',
    description: 'India’s top-ranked international day school offering Cambridge IGCSE and IB Diploma programs.',
  },
]
