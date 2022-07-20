export default {
  formatImage: function (dataObject, format) {
    const { url, width, height } = dataObject.data.attributes.formats[format];
    const { name, caption, alternativeText } = dataObject.data.attributes;
    const image = {
      url,
      width,
      height,
      name,
      caption,
      alt: alternativeText,
    };

    return image;
  },
};
