import Header from './template/Header/Header.jsx';
// import Nav from './template/Nav/Nav.jsx';
import RoutesPage from './routes/Routes.jsx';
import Footer from './template/Footer/Footer.jsx';

function App() {
  return (
    <div id='wrap'>
      <Header></Header>
      {/* <Nav></Nav> */}
      <RoutesPage></RoutesPage>
      <Footer></Footer>
    </div>

  );
}

export default App;
