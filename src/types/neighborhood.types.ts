export type LandmarkCategory = 'transit' | 'aviation' | 'clubs' | 'healthcare' | 'education'

export interface LandmarkItem {
  id: string
  name: string
  category: LandmarkCategory
  distance: string
  driveTime: string
  description: string
}
