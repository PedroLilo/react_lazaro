import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  background-color: ${colors.quartenary};
  padding: 0.5rem;
  width: 20rem;
  border-radius: 0.5rem;

  aside {
    display: flex;
    p {
      font-size: 1rem;
    }

    h5{
      font-size: 1rem;
    }
  }
  img{
      width:50%;
      border: 0.2rem solid ${colors.black};
    }

`