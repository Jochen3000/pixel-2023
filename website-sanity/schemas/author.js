const author = {
    name: 'author',
    title: 'author',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'picture',
            title: 'Picture',
            type: 'image',
            validation: (rule) => rule.required(),
        },
    ],
}

export default author