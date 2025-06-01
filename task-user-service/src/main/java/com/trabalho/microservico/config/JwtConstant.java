package com.trabalho.microservico.config;
import io.github.cdimascio.dotenv.Dotenv;

public class JwtConstant {
    static Dotenv dotenv = Dotenv.load();

    public static final String SECRET_KEY = "minhaSuperChaveJWTsecretaQuePrecisaTer32Caracteres!";
    public static final String JWT_HEADER = "Authorization";
}
