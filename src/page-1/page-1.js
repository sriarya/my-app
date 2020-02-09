import React, { useState } from 'react';

function Page() {
    const [tasks, setTask] = useState([
        { name: "Learn Node", category: "wip", bgcolor: "yellow" },
        { name: "React", category: "complete", bgcolor: "pink" },
        { name: "Go", category: "wip", bgcolor: "maroon" },
        { name: "Haskell", category: "wip", bgcolor: "skyblue" }
    ]);

    const tasksObj = {
        wip: [],
        complete: []
    }

    tasks.map(each => {
        tasksObj[each.category].push(
            <div style={{ background: `${each.bgcolor}`, width: "80px", height: "80px", margin: "10px", textAlign: "center", padding: "30px" }}
                key={each.name}
                draggable
                onDragStart={(e) => onDragStart(e, each.name)}>
                <h4>{each.name}</h4>
            </div>
        )
    })

    const onDragStart = (e, name) => {
        e.dataTransfer.setData("name", name);
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e, category) => {
        let name = e.dataTransfer.getData("name");
        let newTasks = tasks.map((task) => {
            if (task.name == name) {
                task.category = category
            }
            return task;
        });
        setTask(newTasks);
    }
    return (
        <>
            <div style={{ textAlign: "center" }} >
                <h1>First Page using react functional component</h1>
                <h2>Drag and drop demo</h2>
            </div >
            <div style={{ background: "grey", padding: "50px", height: "500px", width: "200px", float: "left", marginLeft: "100px" }}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, "wip")}>
                <h4>WORK IN PROGRESS</h4>
                {tasksObj.wip}
            </div>
            <div style={{ background: "grey", padding: "50px", height: "500px", width: "200px", float: "right", marginRight: "100px" }}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, "complete")}>
                <h4>COMPLETE</h4>
                {tasksObj.complete}
            </div>
        </>
    )
}
export default Page