import { type SchemaTypeDefinition } from 'sanity'
import home from './schemas/singletons/home'
import sitemap from './schemas/singletons/sitemap'
import redirections from './schemas/singletons/redirections'
import error404 from './schemas/singletons/page-404'
import header from './schemas/singletons/header'
import footer from './schemas/singletons/footer'
import settings from './schemas/singletons/global-settings'
import page from './schemas/documents/page'
import blog from './schemas/documents/blog'
import pageInfo from './schemas/objects/page-info'
import pageContent from './schemas/objects/page-content'
import sharedText from './schemas/objects/shared/text'
import sharedButton from './schemas/objects/shared/button'
import sectionHero from './schemas/objects/sections/hero'
import sharedNavigation from './schemas/objects/shared/navigation'
import sharedTwoColumns from './schemas/objects/sections/twocolumns'
import sharedFeature from './schemas/objects/shared/feature'
import sharedLink from './schemas/objects/shared/link'
import sectionFeatures from './schemas/objects/sections/features'
import sectionLogos from './schemas/objects/sections/logos-grid'

const documents = [home, sitemap, redirections, error404, header, footer, settings, page, blog]
const objects = [
    pageInfo,
    pageContent,
    sharedText,
    sectionHero,
    sharedButton,
    sharedNavigation,
    sharedTwoColumns,
    sharedFeature,
    sectionFeatures,
    sharedLink,
    sectionLogos,
]
export const schemaTypes: SchemaTypeDefinition[] = [...documents, ...objects]
