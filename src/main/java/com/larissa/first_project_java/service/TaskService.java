package com.larissa.first_project_java.service;

import com.larissa.first_project_java.domain.Task;
import com.larissa.first_project_java.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task){
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public Optional<Task> getTaskById(Long id){
        return taskRepository.findById(id);
    }

    public Task updateTask(Long id, Task taskDetails){
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not fund!"));
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        return taskRepository.save(task);
    }

    public void deleteTaskById(Long id){
        taskRepository.deleteById(id);
    }

}
