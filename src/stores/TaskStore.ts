
import { defineStore } from 'pinia';
import type { Task } from '../models/TaskModel'
import type { TaskState } from '../models/TaskState'

export const useTaskStore  = defineStore({
  id: "task",
  state: (): TaskState => ({

    loading: false,
    data:[],


  }),
  actions: {
    agregarTarea(task: Task) {
      this.data.push(task);
    },
    eliminarTarea(task: Task) {
      this.data = this.data.filter(t => t.id !== task.id);
    },

  },
});
