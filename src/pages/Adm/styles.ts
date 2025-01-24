import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
export const SSection = styled.section`
  font-size: 2rem;
  padding: 1rem;
  display:flex;
  justify-content: center;
  min-height: calc(100vh - 8.5rem);

  h1{
    color: ${colors.white};
  }
`
