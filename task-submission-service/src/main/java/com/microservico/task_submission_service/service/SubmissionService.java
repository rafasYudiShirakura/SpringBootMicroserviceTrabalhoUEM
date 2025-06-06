package com.microservico.task_submission_service.service;

import com.microservico.task_submission_service.modal.Submission;

import java.util.List;

public interface SubmissionService {
    Submission submitTask(Long taskId, String githubLink, Long userId, String jwt) throws Exception;

    Submission getTaskSubmissionById(Long submissionId) throws Exception;

    List<Submission> getAllTaskSubmission();

    List<Submission> getTasksSubmissionsByTaskId(Long taskId);

    Submission acceptDeclineSubmission(Long id, String status) throws Exception;


}
