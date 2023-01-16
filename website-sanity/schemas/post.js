const post = {
    title: 'post',
    name: 'post',
    type: 'document',
    fields: [
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
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
}

export default post