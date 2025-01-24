import styled from 'styled-components'


export const Section = styled.section`

  display: grid;
  justify-content:center;
  min-height: calc(100vh - 8.5rem);
  padding:3rem;
  grid-template-columns: auto auto auto auto auto;
  gap: 1rem;
  @media (max-width: 1300px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 840px) {
    grid-template-columns: auto;
    font-size: 0.9rem;
  }
  `