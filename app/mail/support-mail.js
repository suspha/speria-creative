module.exports = async function(data) {
  return {
    // Wmail options
    options: {
      subject: 'Speria support'
    },
    // HTML version
    html: {
      // The name of the layout to use in app/layouts
      layout: 'mail-html',
      // The content property of the data parameter
      content: data.content
    },
    // Text version
    text: {
      layout: 'mail-text',
      content: data.content
    }
  }
}