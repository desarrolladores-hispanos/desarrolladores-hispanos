const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'mqick3f4',
  dataset: 'production',
  useCdn: true
})