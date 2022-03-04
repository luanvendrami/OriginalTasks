import { ITask } from './../interfaces/ITask';
import { Api } from './../providers/index';

export async function getAllTasks(): Promise<ITask[]>{
  const response = await Api.get<ITask[]>('/tasks')
  return response.data
}
