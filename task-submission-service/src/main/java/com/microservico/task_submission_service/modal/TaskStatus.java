package com.microservico.task_submission_service.modal;

public enum TaskStatus {
    PENDING("PENDING"),

    ASSIGNED("ASSIGNED"),

    DONE("DONE");


    TaskStatus(String done) {
    }
}
