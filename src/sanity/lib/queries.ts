import { groq } from 'next-sanity'

export const homePageQuery = groq`
*[_type == "home"][0]{
    ...,
    "sections" : sections[] ${sectionsQuery()}
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    "sections" : sections[] ${sectionsQuery()}
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
export const headerQuery = groq`
*[_type == "header"][0]{
  _id,
  title,
  logo,
  menu[] {
    _type,
    label,
    link,
    reference->{
      _type,
      "slug": slug.current
    }
  }
}
`

// SHARED COMPONENTS

function sharedLinkQuery() {
    return `
    {
        ...,
       "reference" : reference->{
         _type,
         "slug" : slug.current
       } ,
     }
    `
}

function sharedTextQuery() {
    return `
    {
        ...,
         "links" : links[] ${sharedLinkQuery()}
      }
    `
}

// SECTIONS

function sectionsQuery() {
    return `
    {
        _type == 'section.hero' => ${sectionHeroesQuery()},
        _type == 'section.twocolumns' => ${sectionTwocolumnsQuery()},
        _type == 'section.features' => ${sectionFeaturesQuery()},
        _type == 'section.logosgrid' => ${sectionLogosGridQuery()},
      }
    `
}
function sectionHeroesQuery() {
    return `
    {
        ...,
        "text": text ${sharedTextQuery()}
      }
    `
}

function sectionTwocolumnsQuery() {
    return `
    {
        ...
      }
    `
}

function sectionFeaturesQuery() {
    return `
    {
        ...,
        "items": items[] {
          ...,
          "link" : link ${sharedLinkQuery()}
        }
      }
    `
}

function sectionLogosGridQuery() {
    return `
     {
        ...,
        "items" : items[] {
            ...,
            "link" : ${sharedLinkQuery()}
        }
      } 
    `
}
