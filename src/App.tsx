import './App.css';
import Card from './Card';
import CardImg from './CardImg';

const reactImgSrc = 'https://static10.tgcnt.ru/posts/_0/c8/c8f7f4fa968020aa5670c7d1c00fc320.jpg'
function App(): JSX.Element {
  return (
      <Card>
        <CardImg src={reactImgSrc}/>
     </Card>
  ); 
}

export default App;
