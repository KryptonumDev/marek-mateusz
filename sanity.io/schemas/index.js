// Single Types
import global, { global_Seo } from './singleTypes/global'
import indexPage from './singleTypes/indexPage'

export const singleTypes = [
  indexPage,
]

// Collection Types

export const collectionTypes = [
  
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import { titleAndDescription, titleAndImage, imageAndLink, titleDescriptionAndImage } from './components/list'
import Faq from './components/Faq'

export const components = [
  global_Seo,
  cta,
  seo,
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
  Faq,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]