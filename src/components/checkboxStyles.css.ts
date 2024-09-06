import { css } from 'lit';

export const checkboxStyles = css`
  .checkbox-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: #434d66;
    border-radius: 4px;
    border: 1px solid #657499;
    max-width: 100%;
    box-sizing: border-box;
  }
  .checkbox {
    width: 16px;
    height: 16px;
    padding: 2px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .checkbox.checked {
    background-color: #1f28b8;
  }
  .label {
    font-size: 1rem;
    color: #657499;
    margin-left: 1rem;
  }
  .click-count {
    font-size: 0.8rem;
    color: #fff;
    margin-left: auto;
  }
`;
