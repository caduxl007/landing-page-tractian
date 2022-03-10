import styled from 'styled-components';

export const Container = styled.div`
  text-align: left;
  width: 34rem;
  height: 21rem;
  border-top: 4px solid #03d8a9;
  border-radius: 8px;
  padding: 4rem 3rem;
  margin: 3rem;
  box-shadow: 0px 30px 40px -20px rgb(0, 0, 0, 0.4);

  &.box-down {
    position: relative;
    top: 110px;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #444;
  }
`;
