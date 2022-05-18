import logo from './logo.svg';
import './App.css';
import PageScreen from './PageScreen';
import ImageView from './components/ImageView';
import ImageScroller from './components/ImageScroller';
import {useState} from "react"
import picList from './picList';
import SwipeView from './components/SwipeView';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  console.log(window.outerWidth)
  if (window.outerWidth >= 992){
    return (
      <div className="App">
        <div className='Body'>
          <ImageView 
            path="CatGallery" 
            name={`${picList[currentImageIndex]}`}
          />
        </div>
        <ImageScroller
          nameList={picList}
          selectedIndex={currentImageIndex}
          path={"CatGallery"}
          changeIndex={setCurrentImageIndex}
        />
      </div>
    );
  }else{
    return <div className="App">
        <div className='Gallery'>
          <SwipeView/>
        </div>
        
      </div>
  }

}

export default App;
