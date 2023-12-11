// Single Types
import global, { global_Seo } from './singleTypes/global'
import IndexPage from './singleTypes/IndexPage'
import PrivacyPolicyPage from './singleTypes/PrivacyPolicyPage'
import NotFoundPage from './singleTypes/NotFoundPage'

export const singleTypes = [
  IndexPage,
  PrivacyPolicyPage,
  NotFoundPage,
]

// Collection Types
import paintings from './collectionTypes/paintings'
import murals from './collectionTypes/murals'

export const collectionTypes = [
  paintings,
  murals,
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import { titleAndDescription, titleAndImage, imageAndLink, titleDescriptionAndImage } from './components/list'
import Faq from './components/Faq'
import ContactForm from './components/ContactForm'
import TextSection from './components/TextSection'
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
  ShowcaseSlider,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]