import {useState, useEffect} from "react"
import { FiChevronLeft ,FiChevronRight } from "react-icons/fi";
const createBar = ({path, nameList, selectedIndex, changeIndex}) =>{
    var iconList = []
    var i = 0
    console.log(selectedIndex)
    nameList.forEach((_,index) => {
        var type = "MiniIcon"
        if (selectedIndex === index){
            type = "MiniIcon-chosen"
        }
        // console.log(i)
        iconList.push(
            <img
                src={process.env.PUBLIC_URL+`assets/${path}/${nameList[i]}`}
                className={type}
                onClick={() => {
                    changeIndex(index)
                    // console.log(`changing to ${index}`)
                }
                }
                key={index}
                alt={"CatImg"}
            />
        )
        i+=1
    }
    );

    return iconList
}

const ImageScroller = ({path,nameList, selectedIndex, changeIndex}) =>{
    const [iconList, setIconList] = useState(createBar({path,nameList, selectedIndex,changeIndex}))
    const [len, setLen] = useState(nameList.len)
    useEffect(()=>{
        setIconList(createBar({path,nameList, selectedIndex,changeIndex}))
    }, [selectedIndex])

    return <div className="ImageScroller">
        <FiChevronLeft 
            className="Next-Back-Arrow"
            onClick={()=>{
                if (selectedIndex - 1  !== -1){
                    changeIndex(selectedIndex - 1)
                }
            }}
            color={selectedIndex===0 ? "grey" : "black"}
        />

        {iconList}

        <FiChevronRight 
            className="Next-Back-Arrow"
            onClick={()=>{
                if (selectedIndex + 1 !== iconList.length){
                    changeIndex(selectedIndex + 1)
                }
            }}
            color={selectedIndex + 1 === iconList.length ? "grey" : "black"}
        />
    </div>
}

export default ImageScroller