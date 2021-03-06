import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import ContentBox from './contentBox'

const ProductGroupTile = styled.section`
  background-color: ${props => props.theme.colors.lightYellow};
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.5);

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1.618fr;
    grid-template-rows: min-content 1fr;

    @supports (display: grid) {
      max-width: none;

      h3 {
        margin-top: 0;
      }
    }
  }
`

const ProductGroupImage = styled(Img)`
  max-width: 100%;
  height: 260px;

  grid-row: span 2;
`

const ProductGroupText = styled(ContentBox)`
  @media (min-width: 550px) {
    padding: ${props => props.theme.sizes.baseLineHeight};

    @supports (display: grid) {
      display: grid;
      grid-column-gap: ${props => props.theme.sizes.baseLineHeight};
      grid-template-columns: 1.618fr 1fr;

      > p,
      > ol,
      > ul {
        margin: 0;
      }
    }
  }
`

const ProductGroupHeader = styled.header`
  grid-column: span 2;
`

const ProductGroupHeading = styled.h3`
  color: ${props => props.theme.colors.companyBlue};
  font-size: ${props => props.theme.fontSizes.smallScreens.L};
  line-height: ${props => props.theme.lineHeights.smallScreens.L};

  @media (min-width: ${props => props.theme.sizes.breakpoints.largeScreens}) {
    font-size: ${props => props.theme.fontSizes.largeScreens.L};
    line-height: ${props => props.theme.lineHeights.largeScreens.L};
  }
`

const ProductGroupDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.smallScreens.M};
  line-height: ${props => props.theme.lineHeights.smallScreens.M};

  @media (min-width: ${props => props.theme.sizes.breakpoints.largeScreens}) {
    font-size: ${props => props.theme.fontSizes.largeScreens.M};
    line-height: ${props => props.theme.lineHeights.largeScreens.M};
  }
`

const ProductGroupExamples = styled.ul`
  list-style: none;

  > li {
    font-size: ${props => props.theme.fontSizes.smallScreens.S};
    line-height: ${props => props.theme.lineHeights.smallScreens.S};

    @media (min-width: ${props => props.theme.sizes.breakpoints.largeScreens}) {
      font-size: ${props => props.theme.fontSizes.largeScreens.S};
      line-height: ${props => props.theme.lineHeights.largeScreens.S};
    }
  }
`

const ProductGroup = props => (
  <ProductGroupTile>
    <ProductGroupImage
      fluid={props.photo}
      objectFit="cover"
      objectPosition="50% 50%"
    />
    <ProductGroupText>
      <ProductGroupHeader>
        <ProductGroupHeading>{props.name}</ProductGroupHeading>
      </ProductGroupHeader>
      <ProductGroupDescription>{props.description}</ProductGroupDescription>
      <ProductGroupExamples>
        {props.examples.map(example => (
          <li key={example}>{example}</li>
        ))}
      </ProductGroupExamples>
    </ProductGroupText>
  </ProductGroupTile>
)

ProductGroup.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  examples: PropTypes.arrayOf(PropTypes.string).isRequired,
  photo: PropTypes.object.isRequired,
}

export default ProductGroup
