import SimpleImageSlider from "react-simple-image-slider";
import picList from "../picList";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const images = picList.map(item => {
    return {url: process.env.PUBLIC_URL+`assets/CatGallery/${item}`}
})

const divs = picList.map(item => {
    return <div data-src={process.env.PUBLIC_URL+`assets/CatGallery/${item}`}/>
})

const SwipeView = () => {
    // return <SimpleImageSlider
    //     images={images}
    //     showBullets={true}
    //     showNavs={false}
    //     width={window.innerWidth*0.9}
    //     height={window.innerWidth*0.9}
    //     style={{alignSelf:"center"}}
    // />

    return <AwesomeSlider 
        >
        {divs}
    </AwesomeSlider>
}

export default SwipeView