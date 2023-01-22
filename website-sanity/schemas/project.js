export default {
    name: 'project',
    type: 'document',
    title: 'project',
    fields: [
        {
            name: 'title',
            title: 'title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'description',
            type: 'text',
            rows: 5,
        },
        {
            title: 'image-preview',
            name: 'imagepreview',
            type: 'image'
        },
        {
            title: 'image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
    ],
}