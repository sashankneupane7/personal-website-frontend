import styled from 'styled-components';

export const Outer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const Inner = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 10px 0;
  color: red;
  text-align: center;
`

const Maintenance = () => (
  <Outer>
    <Inner>
    </Inner>
  </Outer>
)

export default Maintenance