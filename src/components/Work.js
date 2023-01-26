import "./WorkCardStyles.css";
import React from 'react'
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        <div className="project-container">
            {WorkCardData.map((val, ind) =>{
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    tags={val.tags}
                    view={val.view}
                    source={val.source}
                    />
                )
            })
            }
        </div>
    </div>
  )
}

export default Work;