/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import { singletonPlugin } from '@/sanity/plugins/settings'
import { schemaTypes } from '@/sanity/schemas'
import { webStructure } from '@/sanity/structures'
// import { cloudinarySchemaPlugin, cloudinaryImageSource } from 'sanity-plugin-cloudinary'
import { presentationTool } from 'sanity/presentation'
import { documentInternationalization } from '@sanity/document-internationalization'

export default defineConfig({
    basePath: studioUrl,
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema: {
        types: schemaTypes,
    },

    plugins: [
        structureTool({
            structure: webStructure(),
        }),
        media(),
        presentationTool({
            previewUrl: {
                previewMode: {
                    enable: '/api/draft',
                },
            },
        }),
        singletonPlugin(['home', 'page404', 'settings', 'header', 'footer', 'redirections', 'sitemap']),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        // Cloudinary provider
        // cloudinarySchemaPlugin(),
        documentInternationalization({
            // Required configuration
            supportedLanguages: [
                { id: 'fr', title: 'French' },
                { id: 'en', title: 'English' },
            ],
            schemaTypes: ['home', 'page', 'project', 'header', 'footer'],
        }),
    ],
    // form: {
    // 	image: {
    // 		assetSources: (previousAssetSources, context) => {
    // 			return [...previousAssetSources]
    // 		},
    // 	},
    // },
})
