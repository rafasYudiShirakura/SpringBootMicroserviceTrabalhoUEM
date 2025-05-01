package com.trabalho.microservico.producer;

import com.trabalho.microservico.config.RabbitConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioProducer {

    private final RabbitTemplate rabbitTemplate;

    public void enviarCriacaoUsuario(String mensagemJson) {
        rabbitTemplate.convertAndSend(
                RabbitConfig.EXCHANGE,
                RabbitConfig.CHAVE,
                mensagemJson
        );
    }
}
