// src/main/java/com/shopease/repository/OrderRepository.java
package com.shopease.repository;

import com.shopease.model.OrderRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderRequest, Long> {
}
