import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})

export const projectTypeTwo = defineType({
  name: 'adatok',
  title: 'Adatok',
  type: 'document',
  fields: [
    defineField({
      name: 'nev',
      title: 'Nev',
      type: 'string',
    }),
    defineField({
      name: 'felhasznalo_kep',
      title: 'Felhasznalo Kep',
      type: 'image',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'jegyek',
      title: 'Jegyek',
      type: 'array',
      of: [{type: 'number'}],
    }),
  ],
})
