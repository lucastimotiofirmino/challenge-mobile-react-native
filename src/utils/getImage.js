export const getImage = (item) => {

    const path = item.thumbnail.path;
    const extension = item.thumbnail.extension
    const thumbnail = path + "." + extension

    return (item.thumbnail) ? {uri: thumbnail} : require('../assets/images/placeholder.png');
}
