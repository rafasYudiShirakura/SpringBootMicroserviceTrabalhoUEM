package com.servico.task.service;

import com.servico.task.modal.Task;
import com.servico.task.modal.TaskStatus;
import com.servico.task.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskServiceImplementation implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task createTask(Task task, String requesterRole) throws Exception {
        if (!requesterRole.equals(("ROLE_ADMIM"))){
            throw new Exception("Only admin can create task!");
        }
        task.setStatus(TaskStatus.PENDING);
        task.setCreatedAt(java.time.LocalDateTime.now());
        return taskRepository.save(task);
    }

    @Override
    public Task getTaskById(Long id) throws Exception {
        return taskRepository.findById(id).orElseThrow(() -> new Exception("Task not found with the given id!" + id));
    }

    @Override
    public List<Task> getAllTask(TaskStatus status) {
        List<Task> allTasks = taskRepository.findAll();
        List<Task> filteredTasks = allTasks.stream().filter(
                task -> status == null || task.getStatus().name().equalsIgnoreCase(status.toString())
        ).collect(Collectors.toList());
        return filteredTasks;
    }

    @Override
    public Task updateTask(long id, Task updatedTask, Long userId) throws Exception {
        Task existingTask = getTaskById(id);

        if (updatedTask.getTitle() != null){
            existingTask.setTitle(updatedTask.getTitle());
        }
        if (updatedTask.getImage() != null){
            existingTask.setImage(updatedTask.getImage());
        }
        if (updatedTask.getDescription() != null){
            existingTask.setDescription(updatedTask.getDescription());
        }
        if (updatedTask.getStatus() != null){
            existingTask.setStatus(updatedTask.getStatus());
        }
        if (updatedTask.getDeadline() != null){
            existingTask.setDeadline(updatedTask.getDeadline());
        }

        return taskRepository.save(existingTask);
    }

    @Override
    public void deleteTask(Long id) throws Exception {

        getTaskById(id);
        taskRepository.deleteById(id);

    }

    @Override
    public Task assignedToUser(Long userId, Long taskId) throws Exception {
        Task task = getTaskById(taskId);
        task.setAssignedUserId(userId);
        task.setStatus(TaskStatus.ASSIGNED);

        return taskRepository.save(task);
    }

    @Override
    public List<Task> assignedUsersTask(Long userId, TaskStatus status) {
        List<Task> tasks = taskRepository.findByAssignedUserId(userId);
        List<Task> allTasks = taskRepository.findAll();
        List<Task> filteredTasks = allTasks.stream().filter(
                task -> status == null || task.getStatus().name().equalsIgnoreCase(status.toString())
        ).collect(Collectors.toList());

        return filteredTasks;
    }

    @Override
    public Task completeTask(Long taskId) throws Exception {
        Task task = getTaskById(taskId);
        task.setStatus(TaskStatus.DONE);
        return taskRepository.save(task);
    }


}
