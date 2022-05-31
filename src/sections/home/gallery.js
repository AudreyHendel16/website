import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'
import { useStaticQuery, graphql } from "gatsby"

const SlideshowContainer = styled.section`
  text-align: center;
  h2 {
    font-family: 'Damion';
    font-weight: 400;
    font-size: 60px;
    line-height: 1.2;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.5);
  }
`
const DecGallery = styled.div`
    margin: 0 auto;
    position: relative;
    width: 400px;
    height: 200px;

  .decorTop{
    top: 0;
    left: 0;
  }
  .decorBottom{

  }
`
const Slide = styled.div`
  width: 95%;
  max-width: 1112px;
  margin: 60px auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  .slideItem {
    border-radius: 16px;
  }
  .slideItem:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  .slideItem:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .slideItem:nth-child(3) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  .slideItem:nth-child(4) {
    grid-column: 2/3;
    grid-row: 2/4;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 4fr 3fr;
    gap: 22px;
  .slideItem:nth-child(1) {
    grid-column: 1/2;
    grid-row: 2/6;
  }
  .slideItem:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/4;
  }
  .slideItem:nth-child(3) {
    grid-column: 2/3;
    grid-row: 4/7;
  }
  .slideItem:nth-child(4) {
    grid-column: 3/4;
    grid-row: 2/6;
  }
  }

`

const Gallery = (props) => {
  const data= useStaticQuery(graphql`
  query galleryData {
    dataYaml(page: {eq: "home"}) {
      gallery {
        slide {
          image
          image
          image
          image
        }
      }
    }
  }
`)

  const decor_gallery = GetImageByName(props.decor_gallery)

  return (
    
    <SlideshowContainer>
      <DecGallery> 
        <GatsbyImage image={decor_gallery} alt='decorGallery' className="decorTop" />
      </DecGallery>
      <h2>Gallery</h2>
      <div>
        {props.gallery.map((sld, i) => {
          return (
            <Slide key={"slide-" + i} className="slideBox">
              {sld.slide.map(pict => {
                return (
                  <GatsbyImage image={GetImageByName(pict.image)} alt="gallery image" key={pict.image} 
                    className="slideItem"
                  />
                )
              })}
            </Slide>)
        })}
      </div>
      <DecGallery> 
        <GatsbyImage image={decor_gallery} alt='decorGallery' className="decorBottom" />
      </DecGallery>
    </SlideshowContainer>
  )
}

export default Gallery