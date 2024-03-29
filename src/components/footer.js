import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import footerStlyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStlyles.footer}>
      <p>Created by {data.site.siteMetadata.author} &copy; 2019</p>
    </footer>
  )
}

export default Footer