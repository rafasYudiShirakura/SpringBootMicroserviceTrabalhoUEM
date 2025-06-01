package com.trabalho.microservico.controller;

import com.trabalho.microservico.modal.User;
import com.trabalho.microservico.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/profile")
    public ResponseEntity<User>getUserProfile(@RequestHeader("Authorization") String jwt){
        User user = userService.getUserProfile(jwt);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping()
    public ResponseEntity<List<User>>getUsers(@RequestHeader("Authorization") String jwt){
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
