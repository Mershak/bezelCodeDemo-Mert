import '../App.css';
import { GlassMagnifier } from 'react-image-magnifiers';

const ImageView = ({path, name}) =>{

    // return <img
    //     src={process.env.PUBLIC_URL+`assets/${path}/${name}`}
    //     className="Photo"
    // /> 

    return <GlassMagnifier
        imageSrc={process.env.PUBLIC_URL+`assets/${path}/${name}`}
        imageAlt="Cat"
        className='Photo'
            
    />
}

export default ImageView