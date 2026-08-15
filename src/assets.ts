import heroVideo from '../project_assets/01_—_Hero_Image__Cinematic_202608102227.mp4'
import architectureVideo from '../project_assets/02_—_Front_Elevation__Signature_202608102231.mp4'
import poolVideo from '../project_assets/03_—_Lifestyle___Pool__202608102238.mp4'
import interiorVideo from '../project_assets/Interior__Luxury_Living_Room___202608102242.mp4'

import monarchHeightsVideo from '../project_assets/Monarch Heights.mp4'
import monarchHeightsImg from '../project_assets/monarch_heights.png'
import residentsLoungeImg from '../project_assets/residents_lounge.png'
import rooftopLoungeImg from '../project_assets/rooftop_lounge.png'
import brushedMetalImg from '../project_assets/brushed_metal.png'
import architecturalGlassImg from '../project_assets/architectural_glass.png'
import designStudioImg from '../project_assets/design_studio.png'
import sustainableArchitectureImg from '../project_assets/sustainable_architecture.png'
import futureLuxuryLivingImg from '../project_assets/future_luxury_living.png'
import insideMonarchOneImg from '../project_assets/inside_monarch_one.png'
import italianMarbleImg from '../project_assets/italian_marble.png'
import naturalTimberImg from '../project_assets/natural_timber.png'

export const mediaAssets = {
  hero: heroVideo,
  architecture: architectureVideo,
  pool: poolVideo,
  interior: interiorVideo,
  monarchHeights: monarchHeightsVideo,
  monarchHeightsImage: monarchHeightsImg,
  residentsLounge: residentsLoungeImg,
  rooftopLounge: rooftopLoungeImg,
  brushedMetal: brushedMetalImg,
  architecturalGlass: architecturalGlassImg,
  designStudio: designStudioImg,
  sustainableArchitecture: sustainableArchitectureImg,
  futureLuxuryLiving: futureLuxuryLivingImg,
  insideMonarchOne: insideMonarchOneImg,
  italianMarble: italianMarbleImg,
  naturalTimber: naturalTimberImg,
} as const

export type MediaAsset = keyof typeof mediaAssets