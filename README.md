# 🛍️ Product Management System

A simple **Product Management System** built with:
- **Node.js + Express.js**
- **MongoDB (Mongoose)**
- **Pug (Jade) template engine**
- **Bootstrap 5** for UI

## 📌 Features
1. **Web Interface**
    - View all products
    - Add a new product
    - Delete a product
    - Sort products by `ProductStoreCode` (descending)

2. **MVC Architecture**
    - `models/` → Mongoose models
    - `controllers/` → Business logic
    - `routes/` → Express routes
    - `views/` → Pug templates
    - `config/` → Database connection

---

## 📂 Project Structure
```bash
project/
│-- config/
│ └── database.js
│-- controllers/
│ └── product.controller.js
│-- models/
│ └── product.model.js
│-- routes/
│ └── product.routes.js
│-- views/
│ ├── layout.pug
│ └── products.pug
│-- index.js
│-- .env
│-- package.json
````
### Installation
```bash
# Clone repository
git clone https://github.com/nguyentrongbut/ENJS-practical.git
cd ENJS-practical

# Install dependencies
npm install
```

### Setup environment variables
Create a .env file in project root:
```bash
PORT=3000
MONGO_URL=mongodb://localhost:27017/enjs
```

### Run the application
```bash
npm start
```
Server will run at:
```bash
http://localhost:3000
```
### Image demo
<img width="1792" height="562" alt="image" src="https://github.com/user-attachments/assets/104b64ad-e2a4-4c0a-8014-d70853fa711e" />

