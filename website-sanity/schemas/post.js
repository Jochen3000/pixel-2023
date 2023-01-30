import author from "./author"

const post = {
    title: 'post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: "Language",
            type: "string",
            name: "language",
            options: {
                list: [
                    { title: 'English', value: 'en' },
                    { title: 'German', value: 'de' }
                ]
            }
        },
        {
            name: 'title',
            title: 'title',
            type: 'string',
        },
        {
            name: 'category',
            title: 'category',
            type: 'string',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }]
        },
        {
            name: 'teaser',
            title: 'teaser',
            type: 'text',
            rows: 5,
        },
        {
            title: 'image',
            name: 'image',
            type: 'image'
        },
        {
            name: 'body',
            type: 'array',
            title: 'body',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image'
                },
                {
                    type: 'pictureTitled'
                },
            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'date',
            options: {
                dateFormat: 'DD MMM YYYY',
            }
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
}

export default post