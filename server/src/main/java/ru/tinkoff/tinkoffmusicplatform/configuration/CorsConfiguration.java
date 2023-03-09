package ru.tinkoff.tinkoffmusicplatform.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfiguration implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
                .addMapping("/**")
                // .allowedOrigins("**")
                // .allowedOrigins("http://localhost:8080")
                .allowedOrigins(
                    "http://localhost:8080",
                    "http://localhost:3000"
                )
                .allowCredentials(true);
    }
}
