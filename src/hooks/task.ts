import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/src/firebaseConfig";
import { TaskService } from "../services/taskService";


export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    let unsubscribeTasks: any;

    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        // ✅ Start listening ONLY when logged in
        unsubscribeTasks = TaskService.subscribeTasks(setTasks);
      } else {
        // ✅ Clear tasks when logged out
        setTasks([]);

        // ✅ Stop previous listener
        if (unsubscribeTasks) {
          unsubscribeTasks();
        }
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeTasks) unsubscribeTasks();
    };
  }, []);

  return {
    tasks,
    addTask: TaskService.addTask,
    removeTask: TaskService.removeTask,
    toggleTask: TaskService.toggleTask,
    updateTask : TaskService.updateTask,
    
  };
};
