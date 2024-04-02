/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { pageStructure, singletonPlugin } from './sanity/plugins/settings'

import home from './sanity/schemas/singletons/home'
import sitemap from './sanity/schemas/singletons/sitemap'
import redirections from './sanity/schemas/singletons/redirections'
import error404 from './sanity/schemas/singletons/page-404'
import header from './sanity/schemas/singletons/header'
import footer from './sanity/schemas/singletons/footer'
import settings from './sanity/schemas/singletons/global-settings'
import page from './sanity/schemas/documents/page'
import blog from './sanity/schemas/documents/blog'

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schema' folder
	schema: {
		types: [home, sitemap, redirections, error404, header, footer, page, settings, blog],
	},
	plugins: [
		structureTool({
			structure: pageStructure([
				{
					schemaType: 'divider',
				},
				{
					schemaType: 'blog',
					singleton: false,
					definition: blog,
				},
				{
					schemaType: 'divider',
				},
				{
					schemaType: 'page',
					singleton: false,
					definition: page,
				},
				{
					schemaType: 'home',
					singleton: true,
					definition: home,
				},
				{
					schemaType: 'page404',
					singleton: true,
					definition: error404,
				},
				{
					schemaType: 'divider',
				},
				{
					schemaType: 'header',
					singleton: true,
					definition: header,
				},
				{
					schemaType: 'footer',
					singleton: true,
					definition: footer,
				},

				{
					schemaType: 'divider',
				},
				{
					schemaType: 'settings',
					singleton: true,
					definition: settings,
				},

				{
					schemaType: 'divider',
				},
				{
					schemaType: 'sitemap',
					singleton: true,
					definition: sitemap,
				},
				{
					schemaType: 'redirections',
					singleton: true,
					definition: redirections,
				},
			]),
		}),
		singletonPlugin([home.name, sitemap.name, redirections.name]),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
	],
})
