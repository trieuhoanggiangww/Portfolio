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
    min-height: 180px; /* 🎯 to hơn mặc định */
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

export const ProjectManaSaveButton = styled.button`
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

export const ProjectManaCancelButton = styled.button`
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

// Bảng cũ (nếu dùng fallback bảng)
export const ProjectManaTable = styled.table`
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

// Các nút cơ bản
export const ProjectManaActionButton = styled.button`
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

export const ProjectManaImagePreview = styled.img`
  margin-top: 10px;
  width: 120px;
  height: auto;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  object-fit: cover;
`

// ---- CARD UI ----

export const ProjectManaCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`

export const ProjectManaCard = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`

export const ProjectManaImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`

export const ProjectManaContent = styled.div`
  padding: 20px;
`

export const ProjectManaTitle = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  color: ${({ theme }) => theme.text};
  margin: 0;
`

export const ProjectManaTech = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`

export const ProjectManaDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textLight || '#999'};
  margin-bottom: 20px;
`

export const ProjectManaCardButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const ProjectManaCardEditButton = styled(ProjectManaActionButton)`
  background-color: #ffa500;

  &:hover {
    background-color: #ff8c00;
  }
`

export const ProjectManaCardDeleteButton = styled(ProjectManaActionButton)`
  background-color: #f44336;

  &:hover {
    background-color: #e53935;
  }
`
