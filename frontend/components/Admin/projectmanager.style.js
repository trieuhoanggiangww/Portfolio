import styled from 'styled-components'

export const ProjectManaWrapper = styled.div`
  padding: 40px 24px;
  font-family: 'JetBrains Mono', monospace;
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
`

export const ProjectManaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const ProjectManaAddButton = styled.button`
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

export const ProjectManaForm = styled.form`
  padding: 32px;
  border-radius: 12px;
  margin-bottom: 48px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid ${({ theme }) => theme.border || '#444'};

  display: flex;
  flex-direction: column;
  gap: 20px;

  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`

export const ProjectManaFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.border || '#666'};
    font-size: 14px;
    color: #000;
    transition: 0.3s;

    &:focus {
      border-color: #c778dd;
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 180px;
    max-height: 500px;
    line-height: 1.6;
    font-size: 15px;
  }
`

export const ProjectManaFormButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
  flex-wrap: wrap;
`

export const ProjectManaImagePreview = styled.img`
  margin-top: 10px;
  width: 120px;
  height: auto;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  object-fit: cover;
`
