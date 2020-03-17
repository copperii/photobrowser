import styled from 'styled-components'

export const Img = styled.img`
  padding: 5px;
  border-radius: 7px;
`

export const Thumbnail = styled.img`
  padding: 5px;
  border-radius: 7px;
  width: 160px;
`

export const H3 = styled.h3`
  margin: 15px;
`
export const Text = styled.div`
  margin-top: 1em;
  margin-left: 15px;
  font-weight: bold;
`
export const Detail = styled.div`
  flex-direction: column;
`

export const Section = styled.section`
  padding: ${props => (props.top ? '2em' : '0')};
  margin-top: ${props => (props.marginTop ? '1em' : '0')};
  display: flex;
  flex-flow: row wrap;
`
