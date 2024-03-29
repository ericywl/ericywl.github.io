import styled from "styled-components"

import banner from "Static/images/blog-banner.jpg"

export const Wrapper = styled.div`
  padding: 2rem 0;
  align-items: center;

  @media (max-width: 960px) {
    padding: 1rem 0;
  }
`

export const Heading = styled.div`
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 1.5rem;
  margin-top: auto;
  background-image: url(${banner});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.7);
  background-blend-mode: lighten;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 26pt;
    color: #212121;
    
    @media (max-width: 680px) {
      font-size: 24pt;
    }
  }

  h4 {
    margin-bottom: 0;
    font-size: 20pt;
    color: #606060;
    
    @media (max-width: 680px) {
      font-size: 18pt;
    }
  }
`

export const Post = styled.div`
  margin-top: 0rem;
  padding: 1rem;
  
  &:hover {
    background-color: #f5f5f5;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 22pt;
    color: #212121;
    
    @media (max-width: 680px) {
      font-size: 20pt;
    }
  }
  
  h5 {
    margin-bottom: 1rem;
    font-size: 16pt;
    color: #b0b0b0;
    
    @media (max-width: 680px) {
      font-size: 14pt;
    }
  }
  
  p {
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }
`
