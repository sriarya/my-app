import React, { useState } from 'react';

function Page() {
    const [tasks] = useState([
        { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
        { name: "React", category: "wip", bgcolor: "pink" },
        { name: "Vue", category: "complete", bgcolor: "skyblue" }
    ]);

    const listOfTasks = tasks.map(each => {
        return (
            <div style={{ background: `${each.bgcolor}`, width: "100px", height: "100px" }} key={each.name}>
                <h4>{each.name}</h4>
            </div>
        )
    })
    return (
        <div style={{ textAlign: "center" }}>
            <h1>First Page using react functional component</h1>
            <h2>Drag and drop demo</h2>
            {listOfTasks}
        </div>
    )
}
export default Page