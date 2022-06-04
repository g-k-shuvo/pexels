import React from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const slides = data.slides.nodes
  const featured = data.featured.frontmatter
  const about = data.about.frontmatter
  const services = data.services.frontmatter
  const featuredImage = getImage(featured.thumb)
  const aboutImage = getImage(about.thumb)
  const servicesImage = getImage(services.thumb)
  const testimonials = data.testimonials.nodes

  return (
    <Layout>
      <section id="home">
        <section id="home-slider">
          <Container>
            <Carousel controls={false}>
              {slides.map(slide => (
                <Carousel.Item key={slide.frontmatter.id}>
                  <div className="slide-content">
                    <div className="slide-text">
                      <h1>{slide.frontmatter.title}</h1>
                      <p>{slide.frontmatter.description}</p>
                      <Link to="/about">About Us</Link>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </section>

        <section className="bread-crumb">
          <h1>LET'S BUILD SOMETHING GREAT</h1>
        </section>

        <section id="featured-work">
          <div className="half-container">
            <div className="half-image">
              <GatsbyImage
                className="image-container"
                image={featuredImage}
                alt={featured.title}
              />
            </div>
            <div className="half-text">
              <p className="section-subtitle">{featured.subtitle}</p>
              <h3 className="section-title">{featured.title}</h3>
              <p className="section-text">{featured.paragraph1}</p>
              <p className="section-text">{featured.paragraph2}</p>
              <Link to="/" className="section-link stroke">
                Read Full Case Study
              </Link>
              <Link to="/" className="section-link fill">
                View All Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="half-container">
            <div className="half-text order-lg-1 order-md-1 order-sm-2 order-xs-2 order-2">
              <p className="section-subtitle">{about.subtitle}</p>
              <h3 className="section-title">{about.title}</h3>
              <p className="section-text">{about.paragraph1}</p>
              <p className="section-text">{about.paragraph2}</p>
              <Link to="/" className="section-link stroke">
                Learn More
              </Link>
            </div>

            <div className="half-image order-lg-2 order-md-2 order-sm-1 order-xs-1 order-1">
              <GatsbyImage
                className="image-container"
                image={aboutImage}
                alt={about.title}
              />
            </div>
          </div>
        </section>

        <section id="services">
          <div className="half-container">
            <div className="half-image">
              <GatsbyImage
                className="image-container"
                image={servicesImage}
                alt={services.title}
              />
            </div>
            <div className="half-text">
              <p className="section-subtitle">{services.subtitle}</p>
              <h3 className="section-title">{services.title}</h3>
              <Row>
                <Col md={6} sm={12} xs={12}>
                  <div className="service-item">
                    <span className="service-number">1</span>
                    <h4 className="service-name">{services.service1Name}</h4>
                    <p className="service-details">
                      {services.service1Description}
                    </p>
                  </div>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <div className="service-item">
                    <span className="service-number">2</span>
                    <h4 className="service-name">{services.service2Name}</h4>
                    <p className="service-details">
                      {services.service2Description}
                    </p>
                  </div>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <div className="service-item">
                    <span className="service-number">3</span>
                    <h4 className="service-name">{services.service3Name}</h4>
                    <p className="service-details">
                      {services.service3Description}
                    </p>
                  </div>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <div className="service-item">
                    <span className="service-number">4</span>
                    <h4 className="service-name">{services.service4Name}</h4>
                    <p className="service-details">
                      {services.service4Description}
                    </p>
                  </div>
                </Col>
              </Row>

              <Link to="/" className="section-link stroke">
                See All Our Services
              </Link>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-padding">
          <Container>
            <Row>
              <Col md={12}>
                <div className="testimonaial-carousel">
                  <Carousel indicators={false} controls={false} interval={2000}>
                    {testimonials.map(testimonial => (
                      <Carousel.Item key={testimonial.frontmatter.id}>
                        <div className="testimonial-item">
                          <figure className="figure">
                            <img
                              src={
                                testimonial.frontmatter.avatar.childImageSharp
                                  .original.src
                              }
                              alt={testimonial.frontmatter.username}
                            />
                          </figure>
                          <blockquote className="feedback-details">
                            {testimonial.frontmatter.feedback}
                            <cite className="author-details">
                              <span className="author-name">
                                {" "}
                                - {testimonial.frontmatter.username}
                              </span>
                              <span className="author-designation">
                                {testimonial.frontmatter.designation}
                              </span>
                            </cite>
                          </blockquote>
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    slides: allMarkdownRemark(
      sort: { fields: id, order: ASC }
      filter: { fileAbsolutePath: { regex: "//slides//" } }
    ) {
      nodes {
        frontmatter {
          description
          title
          id
        }
      }
    }
    featured: markdownRemark(fileAbsolutePath: { regex: "//featured//" }) {
      frontmatter {
        subtitle
        title
        paragraph1
        paragraph2
        thumb {
          childImageSharp {
            fluid(fit: COVER) {
              src
              srcSet
            }
            gatsbyImageData(
              placeholder: BLURRED
              formats: AUTO
              breakpoints: 768
            )
          }
        }
      }
    }
    about: markdownRemark(fileAbsolutePath: { regex: "//about//" }) {
      frontmatter {
        subtitle
        title
        paragraph1
        paragraph2
        thumb {
          childImageSharp {
            fluid(fit: COVER) {
              src
              srcSet
            }
            gatsbyImageData(
              placeholder: BLURRED
              formats: AUTO
              breakpoints: 768
            )
          }
        }
      }
    }
    services: markdownRemark(fileAbsolutePath: { regex: "//services//" }) {
      frontmatter {
        title
        subtitle
        service1Name
        service1Description
        service2Name
        service2Description
        service3Name
        service3Description
        service4Name
        service4Description
        thumb {
          childImageSharp {
            fluid(fit: COVER) {
              src
              srcSet
            }
            gatsbyImageData(
              placeholder: BLURRED
              formats: AUTO
              breakpoints: 768
            )
          }
        }
      }
    }
    testimonials: allMarkdownRemark(
      sort: { fields: id, order: ASC }
      filter: { fileAbsolutePath: { regex: "//testimonials//" } }
    ) {
      nodes {
        frontmatter {
          username
          id
          designation
          feedback
          avatar {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`
