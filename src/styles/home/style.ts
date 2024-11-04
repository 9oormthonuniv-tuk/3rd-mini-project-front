import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 16px;
  position: relative;
  justify-content: center;

  > img {
    position: absolute;
    width: calc(100% - 32px);
    opacity: 0.1;
    z-index: 0;
  }

  > label {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    font-size: 28px;
    font-weight: 700;

    input {
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid black;
      font-size: 16px;
    }
  }

  > button {
    font-weight: 500;
    border: 1px solid transparent;
    padding: 12px 16px;
    width: max-content;
    border-radius: 12px;
    align-self: center;
    transition: background-color 0.2s;
    background-color: var(--color-blue-secondary);
    color: #ffffff;

    &:hover {
      background-color: var(--color-skyblue);
    }

    &:active {
      background-color: var(--color-blue);
    }
  }
`;
