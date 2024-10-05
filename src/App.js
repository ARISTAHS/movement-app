import Header from './template/Header/Header.jsx';
// import Nav from './template/Nav/Nav.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './template/Footer/Footer.jsx';

function App() {
  return (
    <div id='wrap'>
      <Header></Header>
      {/* <Nav></Nav> */}
      <Content></Content>
      <Footer></Footer>
    </div>

  );
}

export default App;
