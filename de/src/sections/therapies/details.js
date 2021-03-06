import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import GetImageByName from '~components/getImageByName'

const DistanceBox = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  padding: 0 20px;
  max-width: 1332px;
  margin: 40px auto 0;
  background: rgba(240, 128, 179, 0.07);
  border-radius: 0px;
  font-size: 14px;
  @media(min-width: 500px){
    padding: 40px 25px;
    margin: 70px auto 0;
  }
  @media (min-width: 768px) {
    padding: 40px 80px;
    font-size: 22px;
  }
  @media (min-width: 1350px) {
    border-radius: 30px;
  }
  a {
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 34px;
    letter-spacing: 0.08em;
    color: rgba(51, 51, 51, 0.8);
    text-decoration: none;
  }
  p{
    margin-bottom: 10px;
    @media (min-width: 500px){
      margin-bottom: 24px;
    }
  }
`
const Title = styled.h2`
    cursor: pointer;
    font-family: 'Damion';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.08em;
    color: rgba(240, 65, 145, 0.8);
    margin: 0;
    @media (min-width: 500px){
      font-size: 25px;
      line-height: 26px;
  }
`
const Centered = styled.div`
width: fit-content;
margin: 0 auto;
img{
  width: 25%;
  margin: 0 auto;
  @media (min-width: 500px){
    width: 50%;
  }
}
`
const Details = () => {
  const [detailsOpen, setDetailsOpen] = useState(false)
  const data = useStaticQuery(graphql`
  query detailsData {
    dataYaml(page: {eq: "therapies"}) {
      details
    }
  }
`)
  return (
    <>
    <Centered>
    <GatsbyImage image={GetImageByName('logo-leaves-circle-150x150.png')} alt='decor' className='center' />
    </Centered>
      <Title 
        detailsOpen={detailsOpen}
        onClick={() => setDetailsOpen(!detailsOpen)}>
        {detailsOpen ? '-details' : '+details'}
      </Title>
      {detailsOpen ? <DistanceBox open > 
    <div dangerouslySetInnerHTML={{ __html: data.dataYaml.details }} className="AboutText" />
    </DistanceBox> : <DistanceBox> 
    <div dangerouslySetInnerHTML={{ __html: data.dataYaml.details }} className="AboutText" />
    </DistanceBox>}
    </>
  )
}
export default Details