exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // TODO: Clean up and only one language to query
  return graphql(`
    query programQuery {
      allContentfulAuthor {
        nodes {
          surname
          json {
            id
            name
            surname
            fullName
            photo {
              link
              path
            }
            description
            birth {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            death {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            biography {
              date
              description
            }
            works {
              date
              description
            }
            gallery {
              link
              path
            }
            video {
              startTime
              youtubeId
            }
          }
        }
      }
      allContentfulAuthorRussian {
        nodes {
          surname
          json {
            id
            name
            surname
            fullName
            photo {
              link
              path
            }
            description
            birth {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            death {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            biography {
              date
              description
            }
            works {
              date
              description
            }
            gallery {
              link
              path
            }
            video {
              startTime
              youtubeId
            }
          }
        }
      }
      allContentfulAuthorBelarusian {
        nodes {
          surname
          json {
            id
            name
            surname
            fullName
            photo {
              link
              path
            }
            description
            birth {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            death {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            biography {
              date
              description
            }
            works {
              date
              description
            }
            gallery {
              link
              path
            }
            video {
              startTime
              youtubeId
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const authors = result.data.allContentfulAuthor.nodes.map(author => author.json)

    authors.forEach(author => {
      createPage({
        path: `/${author.surname}`,
        component: require.resolve("./src/templates/author-template.js"),
        context: { author },
      })
    })
  })
}
