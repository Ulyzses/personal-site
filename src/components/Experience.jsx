import { format } from 'date-fns';

import "../styles/react/Experience.css";

const Experience = (props) => {
    const { title, affiliation, startDate, endDate, description } = props.experience;

    let start = format(new Date(startDate), 'MMMM yyyy');
    let end = (endDate === "present") ? "Present" : format(new Date(endDate), 'MMMM yyyy');
    const date = `${start}–${end}`;

    return (
        <div className="exp">
            <p className="date">{date}</p>
            <h3>{title}</h3>
            <p className="subtitle">{affiliation}</p>
            <ul>
                {description.map((item) => (
                    <li key={item.slice(0,10)}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Experience;