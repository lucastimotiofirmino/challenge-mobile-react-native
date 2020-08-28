export default event => ({
    id: event.id,
    title: event.title,
    description: event.description,
    imageURI: `${event.thumbnail.path}/portrait_uncanny.${event.thumbnail.extension}`
})