import styled from "styled-components"

import footer from "Static/images/footer.svg"

export const Wrapper = styled.div`
  margin-top: auto;
  padding: 28rem 0 4rem 0;
  background-image: url(${footer});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
  
  @media (max-width: 680px) {
    padding-bottom: 1rem;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-iterms: center;
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }
  }
`

export const Details = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`
