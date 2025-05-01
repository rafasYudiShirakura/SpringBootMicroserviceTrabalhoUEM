package com.trabalho.microservico;

import com.trabalho.microservico.producer.UsuarioProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MicroservicoApplication implements CommandLineRunner {

    @Autowired
    private UsuarioProducer usuarioProducer;

    public static void main(String[] args) {
        SpringApplication.run(MicroservicoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        usuarioProducer.enviarCriacaoUsuario("{\"id\":1,\"nome\":\"Rafael Yudi\",\"email\":\"ra124956@uem.br\"}");
    }

}
