import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "./Img";

const Tab = ({type}) => {
    const [loading,setLoading] = useState();
    const [listContentsTab,setListContentsTap] = useState([1,2,3,4,5,6,7,8,9]);
    useEffect(()=>{
        // fetch api get all study set ... 
    },[])
    return (
      <div className="max-h-[20.25rem] overflow-x-hidden overflow-y-auto">
        {listContentsTab && listContentsTab.map((content,index) => (
            <Link
                to=""
                className="flex items-center flex-row text-[#2e3856] dark:text-[#f6f7fb] px-6 py-4 max-w-[100vw] hover:bg-[#f6f7fb] hover:text-[#2e3856]"
            >
                <div className="flex flex-col w-full">
                    <span className="truncate text-[1rem] font-[700]">
                        TOEIC: Beginner Communication Vocabulary Set 1
                    </span>
                <div className="flex flex-row w-full font-[600]">
                    <div className="flex items-center ">
                    <div className="mr-2">
                        <Img
                        src="https://up.quizlet.com/1ts4zx-KRQ7r-96s.png"
                        alt="quizlet"
                        className="w-[16px] h-[16px] rounded-full shadow-[inset 0 0 0.0625rem #0000004d]"
                        />
                    </div>
                    Quizlet
                    </div>
                </div>
                </div>
            </Link>
        ))}
      </div>
    );
}

export default Tab;