import React from "react"
import styled from "@emotion/styled"

const StyledImageCard = styled.div`
  .card__image {
    display: flex;
    width: 300px;
    flex-shrink: 0;
  }

  .card__content {
    display: flex;
    border-radius: 3px;
    box-shadow: 0px 3px 3px 3px #00000025;
  }
`

const ImageCard = ({ children }) => {
  return <StyledImageCard>{children}</StyledImageCard>
}

export default ImageCard
