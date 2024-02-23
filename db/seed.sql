USE employees;

-- Populate the department table
INSERT INTO department (name) VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

-- Populate the role table with different salary values
INSERT INTO role (title, salary, department_id) VALUES
    ('Sales Lead', 110000, 1),
    ('Salesperson', 85000, 1),
    ('Lead Engineer', 160000, 2),
    ('Software Engineer (SWE)', 125000, 2),
    ('Accountant', 130000, 3),
    ('Legal Team Lead', 260000, 4),
    ('Lawyer', 200000, 4);

-- Populate the employee table with different names
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Michael', 'Jordan', 1, NULL),
    ('LeBron', 'James', 2, 1),
    ('Stephen', 'Curry', 3, NULL),
    ('Kevin', 'Durant', 4, 3),
    ('Kobe', 'Bryant', 5, 3),
    ('Magic', 'Johnson', 6, NULL),
    ('Larry', 'Bird', 7, 6),
    ('Tim', 'Duncan', 7, 6),
    ('Shaquille', 'O''Neal', 7, 6),
    ('Hakeem', 'Olajuwon', 7, 6);