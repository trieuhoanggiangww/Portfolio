// File: projectmanager.style.js
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 30px;
  font-family: 'JetBrains Mono', monospace;
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
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
`

export const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    display: block;
    color: ${({ theme }) => theme.text};
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.border || '#ccc'};
    font-size: 14px;
    background-color: ${({ theme }) => theme.input || '#fff'};
    color: #000;
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
  border-collapse: collapse;

  th,
  td {
    border: 1px solid ${({ theme }) => theme.border || '#ccc'};
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.accent || '#c778dd'};
    color: white;
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
  width: 100px;
  height: auto;
  border-radius: 6px;
`
