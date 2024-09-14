-- Insert Data into Customers Table
INSERT INTO Customers (FirstName, LastName, Email, PhoneNumber, Address, City, Country) VALUES
('John', 'Doe', 'john.doe@example.com', '1234567890', '123 Elm St', 'New York', 'USA'),
('Jane', 'Smith', 'jane.smith@example.com', '0987654321', '456 Oak St', 'Los Angeles', 'USA');

-- Insert Data into Requesters Table
INSERT INTO Requesters (FirstName, LastName, Email, PhoneNumber, Address, City, Country, Approved) VALUES
('Alice', 'Brown', 'alice.brown@example.com', '1122334455', '789 Pine St', 'Chicago', 'USA', TRUE),
('Bob', 'Johnson', 'bob.johnson@example.com', '2233445566', '101 Maple St', 'Houston', 'USA', FALSE);

-- Insert Data into Categories Table
INSERT INTO Categories (CategoryName, Description) VALUES
('Electronics', 'Devices, gadgets, and accessories'),
('Books', 'Printed and digital books in various genres');

-- Insert Data into Products Table
INSERT INTO Products (RequesterID, CategoryID, ProductName, Description, Price, StockQuantity) VALUES
(1, 1, 'Smartphone', 'Latest model smartphone with advanced features', 699.99, 50),
(1, 2, 'Fiction Novel', 'Bestselling fiction novel', 14.99, 200),
(2, 1, 'Laptop', 'High-performance laptop suitable for work and play', 999.99, 30);

-- Insert Data into Orders Table
INSERT INTO Orders (CustomerID, TotalAmount) VALUES
(1, 714.98),
(2, 1014.98);

-- Insert Data into OrderDetails Table
INSERT INTO OrderDetails (OrderID, ProductID, Quantity, Price) VALUES
(1, 1, 1, 699.99),
(1, 2, 1, 14.99),
(2, 3, 1, 999.99);

-- Insert Data into Reviews Table (Optional)
INSERT INTO Reviews (ProductID, CustomerID, Rating, Comment) VALUES
(1, 1, 5, 'Amazing smartphone, highly recommend!'),
(2, 2, 4, 'Good read, but a bit slow in the middle.');

-- Insert Data into Wishlists Table (Optional)
INSERT INTO Wishlists (CustomerID, ProductID) VALUES
(1, 3),
(2, 1);

-- Insert Data into Shipping Table (Optional)
INSERT INTO Shipping (OrderID, ShippingAddress, City, Country, DeliveryDate) VALUES
(1, '123 Elm St', 'New York', 'USA', '2024-09-07 10:00:00'),
(2, '456 Oak St', 'Los Angeles', 'USA', '2024-09-08 14:00:00');
