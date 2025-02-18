package com.larissa.first_project_java.service;

import org.springframework.stereotype.Service;

@Service
public class ViewTaskService {

    public String viewTask(String name){
        return "Hello World" + name;
    }
}
