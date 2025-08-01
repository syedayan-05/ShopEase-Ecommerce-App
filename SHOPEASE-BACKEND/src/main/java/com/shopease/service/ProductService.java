package com.shopease.service;


import com.shopease.model.Product;

import java.io.IOException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;



public interface ProductService {
    Product addProduct(Product product);
    List<Product> getAllProducts();
    Product getProductById(Long id);
    Product updateProduct(Long id, Product product);
    void deleteProduct(Long id);
    void saveProduct(String name, double price, String description, MultipartFile file) throws IOException;
}
