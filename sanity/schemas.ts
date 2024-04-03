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

export const schemaTypes: SchemaTypeDefinition[] = [home, sitemap, redirections, error404, header, footer, settings, page, blog]
