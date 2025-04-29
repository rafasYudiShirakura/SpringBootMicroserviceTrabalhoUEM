package com.trabalho.microservico;

import org.springframework.boot.SpringApplication;

public class TestMicroservicoApplication {

    public static void main(String[] args) {
        SpringApplication.from(MicroservicoApplication::main).with(TestcontainersConfiguration.class).run(args);
    }

}
