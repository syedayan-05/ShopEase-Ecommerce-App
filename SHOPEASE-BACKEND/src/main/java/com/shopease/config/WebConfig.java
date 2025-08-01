package com.shopease.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // ✅ For CORS: React + Spring Boot Communication
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }

    // ✅ For Static Image Access
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String imagePath = Paths.get("product-images").toAbsolutePath().toUri().toString();
        registry.addResourceHandler("/product-images/**")
                .addResourceLocations(imagePath);
    }
}
