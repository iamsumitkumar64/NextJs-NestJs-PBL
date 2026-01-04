import {
    List,
    ListItem,
    Button,
    Box,
    TextField,
    Tabs,
    Tab
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import RestoreIcon from '@mui/icons-material/Restore';
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import style from "./style.module.css";
import { taskInterface } from "./interface";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

const TodoComp = () => {
    const dummyData: taskInterface[] = [
        // { id: 1, task: "Wash", description: "Clothes should be washed today", status: 1 },
        // { id: 2, task: "Bath", description: "Take a bath today", status: 2 },
        // { id: 3, task: "Learn", description: "Learn somjething new today", status: 3 }
    ];

    const router = useRouter();
    const [active_tab, set_active_tab] = useState<number>(1);
    const [tasks, setTasks] = useState<taskInterface[]>([]);
    const [taskValue, setTaskValue] = useState<string>("");
    const [descriptionValue, setDescriptionValue] = useState<string>("");

    const fetchTodos = async () => {
        let result = await fetch(`http://localhost:2000/findTask`, { method: 'GET' });
        const response = await result.json();
        console.log(response)
        if (response.length) {
            response.forEach((currObj: taskInterface) => {
                dummyData.push(currObj);
            });
        }
        setTasks(dummyData);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAddTask = async () => {
        if (!taskValue.trim() || !descriptionValue.trim()) {
            enqueueSnackbar("Task and description are required", { variant: "error" });
            return;
        }
        const newTaskObj = {
            id: Date.now(),
            task: taskValue,
            description: descriptionValue,
            status: 1
        };
        await fetch(`http://localhost:2000/addTask`, {
            method: 'POST',
            body: JSON.stringify(newTaskObj),
            headers: {
                "content-type": "application/json"
            }
        });
        setTasks(prev => [
            ...prev, newTaskObj
        ]);
        setTaskValue("");
        setDescriptionValue("");
        enqueueSnackbar("Task added successfully", { variant: "success" });
    };

    const handleCompleteTask = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, status: 2 } : task
            )
        );
        enqueueSnackbar("Task Completed", { variant: "success" });
    };

    const handleDeleteTask = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, status: 3 } : task
            )
        );
        enqueueSnackbar("Task Deleted", { variant: "error" });
    };

    const handleRestoreTask = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, status: 1 } : task
            )
        );
        enqueueSnackbar("Task Restored", { variant: "info" });
    }

    const handleLogOut = () => {
        cookie.remove("credentials");
        enqueueSnackbar("Log Out", { variant: "error" });
        router.push("/");
    }

    return (
        <>
            <Box className={style.head}>
                <h1>Birwal To-Do</h1>
                <Button onClick={handleLogOut} className={style.logout}>
                    Log Out
                </Button>
            </Box>

            <Box className={style.gridcolumn}>
                <TextField
                    variant="standard"
                    label="Task"
                    value={taskValue}
                    onChange={e => setTaskValue(e.target.value)}
                    className={style.taskInput}
                />
                <TextField
                    variant="standard"
                    label="Description"
                    value={descriptionValue}
                    onChange={e => setDescriptionValue(e.target.value)}
                    className={style.taskInput}
                />

                <Button onClick={handleAddTask} className={style.button}>
                    Add
                </Button>
            </Box>

            <Tabs
                value={active_tab - 1}
                onChange={(e, newValue) => set_active_tab(newValue + 1)}
                className={style.tabs}
            >
                <Tab label="Active ToDo's" className={style.tabs} />
                <Tab label="Completed ToDo's" className={style.tabs} />
                <Tab label="Deleted ToDo's" className={style.tabs} />
            </Tabs>

            <List className={style.list}>
                {tasks.filter(task => task.status === active_tab).map(task => (
                    <ListItem key={task.id} className={style.gridrow}>
                        <Box>
                            <strong>{task.task}</strong>
                            <br />
                            {task.description}
                        </Box>

                        {task.status === 1 && (
                            <Button onClick={() => handleCompleteTask(task.id)} className={style.button}>
                                <DoneIcon />
                            </Button>
                        )}

                        {task.status !== 1 && (
                            <Button onClick={() => handleRestoreTask(task.id)} className={style.button}>
                                <RestoreIcon />
                            </Button>
                        )}

                        {task.status !== 3 && (
                            <Button onClick={() => handleDeleteTask(task.id)} className={style.button}>
                                <DeleteIcon />
                            </Button>
                        )}
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default TodoComp;