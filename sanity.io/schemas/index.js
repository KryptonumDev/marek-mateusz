// Single Types
import global, { global_Seo } from './singleTypes/global'
import IndexPage from './singleTypes/indexPage'

export const singleTypes = [
  IndexPage,
]

// Collection Types

export const collectionTypes = [
  
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import { titleAndDescription, titleAndImage, imageAndLink, titleDescriptionAndImage } from './components/list'
import Faq from './components/Faq'
import ContactForm from './components/ContactForm'
import TextSection from './components/TextSection'
import Painting from './components/Painting'
import ShowcaseSlider from './components/ShowcaseSlider'

export const components = [
  global_Seo,
  cta,
  seo,
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
  Faq,
  ContactForm,
  TextSection,
  Painting,
  ShowcaseSlider,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]