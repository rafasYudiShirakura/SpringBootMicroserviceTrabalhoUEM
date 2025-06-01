package com.microservico.task_submission_service.controller;

import com.microservico.task_submission_service.modal.Submission;
import com.microservico.task_submission_service.modal.UserDto;
import com.microservico.task_submission_service.service.SubmissionService;
import com.microservico.task_submission_service.service.TaskService;
import com.microservico.task_submission_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/submissions")
public class SubmissionController {
    @Autowired
    private SubmissionService submissionService;

    @Autowired
    private UserService userService;

    @Autowired
    private TaskService taskService;

    // Criar nova submissão
    @PostMapping
    public ResponseEntity<Submission> submitTask(
            @RequestParam Long task_id,
            @RequestParam String github_link,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        UserDto user = userService.getUserProfile(jwt);
        Submission submission = submissionService.submitTask(task_id, github_link, user.getId(), jwt);
        return new ResponseEntity<>(submission, HttpStatus.CREATED);
    }

    // Obter submissão por ID
    @GetMapping("/{id}")
    public ResponseEntity<Submission> getSubmissionById(
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        userService.getUserProfile(jwt);
        Submission submission = submissionService.getTaskSubmissionById(id);
        return new ResponseEntity<>(submission, HttpStatus.OK);
    }

    // Obter todas as submissões
    @GetMapping
    public ResponseEntity<List<Submission>> getAllSubmissions(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        userService.getUserProfile(jwt);
        List<Submission> submissions = submissionService.getAllTaskSubmission();
        return new ResponseEntity<>(submissions, HttpStatus.OK);
    }

    // Obter todas as submissões por taskId
    @GetMapping("/task/{taskId}")
    public ResponseEntity<List<Submission>> getAllSubmissionsByTaskId(
            @PathVariable Long taskId,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        userService.getUserProfile(jwt);
        List<Submission> submissions = submissionService.getTasksSubmissionsByTaskId(taskId);
        return new ResponseEntity<>(submissions, HttpStatus.OK);
    }

    // Aceitar ou recusar uma submissão
    @PutMapping("/{id}")
    public ResponseEntity<Submission> acceptOrDeclineSubmission(
            @PathVariable Long id,
            @RequestParam("status") String status,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        userService.getUserProfile(jwt);
        Submission submission = submissionService.acceptDeclineSubmission(id, status);
        return new ResponseEntity<>(submission, HttpStatus.OK);
    }
}

