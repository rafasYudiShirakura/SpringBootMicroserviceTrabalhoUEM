package com.trabalho.microservico.service;

import com.trabalho.microservico.modal.User;

import java.util.List;

public interface UserService {
    public User getUserProfile(String jwt);

    public List<User> getAllUsers();
}
