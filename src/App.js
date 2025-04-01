import { GlobalStyle, PageWrapper } from './App.styled';
import Menu from './components/Menu/menu.component';

function App() {
  return (
    <>
    <GlobalStyle />
    <PageWrapper>
      <Menu />
      <h1>Xin chào!</h1>
      <p>Đây là portfolio của tôi.</p>
      <footer style={{ opacity: 0.6 }}>© 2025 - Thiết kế bởi tôi</footer>
    </PageWrapper>
  </>
  );
}

export default App;
