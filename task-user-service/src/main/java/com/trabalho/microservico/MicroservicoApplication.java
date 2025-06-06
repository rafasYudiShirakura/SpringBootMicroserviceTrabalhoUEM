package com.trabalho.microservico;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MicroservicoApplication {

    public static void main(String[] args) {
        SpringApplication.run(MicroservicoApplication.class, args);
    }

}
