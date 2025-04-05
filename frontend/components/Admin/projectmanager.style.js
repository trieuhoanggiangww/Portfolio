// File: projectmanager.style.js
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 40px 24px;
  font-family: 'JetBrains Mono', monospace;
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const AddButton = styled.button`
  background-color: #c778dd;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #a65fbd;
  }
`

export const Form = styled.form`
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    display: block;
    color: ${({ theme }) => theme.text};
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.border || '#ccc'};
    font-size: 14px;
    background-color: ${({ theme }) => theme.input || '#fff'};
    color: #000;
    transition: 0.3s;

    &:focus {
      border-color: #c778dd;
      outline: none;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

export const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`

export const CancelButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

  th,
  td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.border || '#ccc'};
  }

  th {
    background-color: ${({ theme }) => theme.accent || '#c778dd'};
    color: white;
    font-weight: bold;
  }

  th:first-child,
  td:first-child {
    width: 100px;
  }

  tr:hover {
    background-color: ${({ theme }) => theme.backgroundLight || '#2e2e4d'};
  }

  img {
    border-radius: 4px;
    object-fit: cover;
  }
`

export const ActionButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 6px 12px;
  margin-right: 6px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`

export const ImagePreview = styled.img`
  margin-top: 10px;
  width: 120px;
  height: auto;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  object-fit: cover;
`
