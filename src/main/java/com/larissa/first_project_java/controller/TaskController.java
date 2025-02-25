package com.larissa.first_project_java.controller;

import com.larissa.first_project_java.domain.Task;
import com.larissa.first_project_java.repository.TaskRepository;
import com.larissa.first_project_java.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hello-world")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {

    }

    @PostMapping
    public Task createTask(@RequestBody Task task {
        return taskService.createTask(task);
    }

    @PostMapping("/{id}")
    public String viewTaskPost(@PathVariable String id, @RequestParam String filter) {
        return "Hello World " + filter;
    }
}
