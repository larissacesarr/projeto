package com.larissa.first_project_java.controller;

import com.larissa.first_project_java.domain.User;
import com.larissa.first_project_java.service.ViewTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hello-world")
public class ViewTask {

    @Autowired
    private ViewTaskService viewTaskService;


    @GetMapping
    public String viewTask() {
        return viewTaskService.viewTask( "Larissa");
    }

    @PostMapping
    public String viewTaskPost(@RequestBody User body) {
        return "Hello World " + body.getName();
    }

    @PostMapping("/{id}")
    public String viewTaskPost(@PathVariable String id, @RequestParam String filter) {
        return "Hello World " + filter;
    }
}
