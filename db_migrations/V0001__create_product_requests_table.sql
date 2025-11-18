CREATE TABLE IF NOT EXISTS product_requests (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    customer_phone VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_product_name ON product_requests(product_name);
CREATE INDEX idx_created_at ON product_requests(created_at);
