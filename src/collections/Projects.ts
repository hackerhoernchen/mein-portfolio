import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Projekttitel',
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL-Name (z.B. sommer-2024)',
      required: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            // Automatisch einen Slug aus dem Titel generieren, falls leer
            if (!value && data?.title) {
              return data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Vorschaubild (Grid)',
    },
    {
      name: 'client',
      type: 'text',
      label: 'Kunde / Model (Optional)',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Projekt-Inhalt',
      blocks: [
        {
          slug: 'fullWidthImage', // Block 1: Großes Bild
          labels: { singular: 'Vollbild', plural: 'Vollbilder' },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          slug: 'twoColumnImage', // Block 2: Zwei Bilder nebeneinander
          labels: { singular: '2 Bilder', plural: '2 Bilder' },
          fields: [
            {
              name: 'image1',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Bild Links',
            },
            {
              name: 'image2',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Bild Rechts',
            },
          ],
        },
        {
          slug: 'textBlock', // Block 3: Text
          labels: { singular: 'Text', plural: 'Texte' },
          fields: [
            {
              name: 'text',
              type: 'textarea', // Oder 'richText' für Formatierungen
            },
          ],
        },
      ],
    },
  ],
}