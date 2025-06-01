package com.trabalho.microservico;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@Import(TestcontainersConfiguration.class)
@SpringBootTest
class MicroservicoApplicationTests {

    @Test
    void contextLoads() {
    }

}
