package com.larissa.first_project_java.controller;

import com.larissa.first_project_java.service.ViewTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello-world")
public class ViewTask {

    @Autowired
    private ViewTaskService viewTaskService;


    @GetMapping
    public String viewTask() {
        return viewTaskService.viewTask( "Larissa");
    }

}
