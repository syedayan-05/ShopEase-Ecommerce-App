package com.shopease.controller;

import com.shopease.model.OrderRequest;
import com.shopease.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping
    public ResponseEntity<String> placeOrder(@RequestBody OrderRequest orderRequest) {
        System.out.println("✅ Order received:");
        System.out.println("Name: " + orderRequest.getName());
        System.out.println("Address: " + orderRequest.getAddress());
        System.out.println("Phone: " + orderRequest.getPhone());
        System.out.println("Items: " + orderRequest.getItems());

        // ✅ This will save to DB
        orderRepository.save(orderRequest);

        return ResponseEntity.ok("Order placed successfully!");
    }
}
