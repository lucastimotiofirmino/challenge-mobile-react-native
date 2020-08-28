export default series => ({
    id: series.id,
    title: series.title,
    description: series.description,
    imageURI: `${series.thumbnail.path}/portrait_uncanny.${series.thumbnail.extension}`
})