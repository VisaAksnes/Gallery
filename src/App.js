import './App.css';
import Menu from './components/static/navbar';
import Footer from './components/static/footer';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';

var incremento=1;
function App() {
const apiImages = [
  {
    id: 1,
    url: 'https://preview.redd.it/h10hwc2c58171.jpg?width=640&crop=smart&auto=webp&s=9e1193cfa0e9fe78d4ab653bb0708c9935323c13',
    alt: 'Aurora aksnes',
    band: 'Aurora'
  },
  {
    id: 2,
    url: 'https://2pqaf02qwhn51glbrk2w4wj2-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/m%C3%B8_.jpg',
    alt: 'Karen orsted',
    band: 'Momomoyouth'
  },
  {
    id: 3,
    url: 'https://q.instome.com/v/t51.2885-19/296961755_1230777924336970_4324050262022235990_n.jpg?e=1661702400&token=tD7YOD5im5LowO7Qd5GUP9yVynJ7EsxoIv2sj9Kw:FPWWdY5X4azqhG6YHxa5PfMpQwU=',
    alt: 'Allie sherlock',
    band: '',
  },
  {
    id: 4,
    url: 'https://images6.alphacoders.com/371/thumb-1920-371930.jpg',
    alt: 'Lindsay Stirling',
    band: 'Lindsay Stirling'
  },
  {
    id: 5,
    url: 'https://i.pinimg.com/564x/89/91/c1/8991c11b2536dfe7f896f3513fc85e37.jpg',
    alt: 'Skillet',
    band: 'Skillet'
  },
  {
    id: 6,
    url: 'https://i.pinimg.com/564x/86/eb/d5/86ebd54097e96c8982dd5987df4261e4.jpg',
    alt: 'Nora Ekberg',
    band: 'Aronchupa'
  },
  {
    id: 7,
    url: 'https://cdn.wegow.com/media/artists/melanie-martinez/melanie-martinez-1568967853.53.jpg',
    alt: 'Melanie Martinez',
    band: 'Melanie Martinez'
  },
  {
    id: 8,
    url: 'https://headbangersbr.com/wp-content/uploads/2020/05/amy-lee-1.jpg',
    alt: 'Amy Lee',
    band: 'Evanescence'
  },
  {
    id: 9,
    url: 'https://i.scdn.co/image/84eb0e1f1d644b6209163af7292d4af8bc95c99b',
    alt: 'Chester Bennington',
    band: 'Linkin Park',
  },
  {
    id: 10,
    url: 'https://saude.novartis.com.br/dornascostas/wp-content/uploads/sites/2/2017/10/a-doenca-de-dan-reynolds.jpg',
    alt: 'Dan Reynolds',
    band: 'Imagine Dragons'
  },
  {
    id: 11,
    url: 'https://rollingstone.uol.com.br/media/_versions/ed-sheeran-taylor-swift-anna_webber-getty_images_for_atlantic_records_widelg.jpg',
    alt: 'Ed Sheeran',
    band: 'Ed Sheeram'
  },
  {
    id: 12,
    url: 'https://cdns-images.dzcdn.net/images/artist/40caeb0c61d8f94a2d0b2f2328956e17/500x500.jpg',
    alt: 'Nathan Evans',
    band: 'Nathan Evans'
  },
];
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home img={apiImages}/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
