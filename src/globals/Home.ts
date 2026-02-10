import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Startseite Konfiguration',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slideshow',
      label: 'Hero Slideshow (Ganz oben)',
      type: 'array',
      minRows: 1,
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
      name: 'subheadline',
      label: 'Kurzer Text unter der Slideshow (Optional)',
      type: 'text',
    },
  ],
}
