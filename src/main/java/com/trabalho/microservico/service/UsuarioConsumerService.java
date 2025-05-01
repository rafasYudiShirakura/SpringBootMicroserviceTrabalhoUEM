package com.trabalho.microservico.service;

import com.trabalho.microservico.config.RabbitConfig;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class UsuarioConsumerService {

    @RabbitListener(queues = RabbitConfig.QUEUE)
    public void receberMensagem(String mensagemJson) {
        System.out.println("Mensagem recebida: " + mensagemJson);
    }
}
