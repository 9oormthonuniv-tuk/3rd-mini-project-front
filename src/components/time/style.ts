import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-around;

  label {
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--color-gray);
  }

  select {
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
  }
`;
