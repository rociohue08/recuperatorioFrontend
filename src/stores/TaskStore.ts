
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
    addTask(task: Task) {
      this.data.push(task);
    },
    removeTask(task: Task) {
      this.data = this.data.filter(t => t.id !== task.id);
    },
    updateTaskStatus(task: Task) {
      const index = this.data.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.data[index].status = task.status;
      }
    },

    //opcionales
    showCompleted(){

    },
    showPending(){

    },
    showAll(){

    },
  }



});
