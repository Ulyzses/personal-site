import React, { useState } from "react";
import Filter from "./Filter";
import Experience from "./Experience";

import "../styles/react/Timeline.css";

import timeline from "../resources/timeline.json";

const Timeline = () => {
    const [filter, setFilter] = useState("all");

    const handleFilter = (typeValue) => {
        setFilter(typeValue)
        console.log(typeValue)
    }

    return (
        <>
            <Filter
                updateFilter={handleFilter}
                choices={["All", "Work", "Internship", "Education", "Voluntary"]}
            />
            <div className="timeline">
                {timeline
                    .filter((item) => item.type === filter || filter === "all")
                    .map((item) => (
                    <Experience key={item.name} experience={item} />
                ))}
            </div>
        </>
    )
}

export default Timeline;