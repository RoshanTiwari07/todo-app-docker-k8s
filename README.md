# 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐓𝐨𝐝𝐨 𝐋𝐢𝐬𝐭 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 🚀

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/76626529/185441736-3de3ccec-045d-42b2-9533-b786fdf12e02.png">
</p>

## ⭐ Introduction

This project is a Full Stack Todo List Application built with Docker and Kubernetes support, using MongoDB, NodeJS, ExpressJS, CSS, and JavaScript. It implements comprehensive todo list functionalities including CRUD operations and containerized deployment.

-  Users are able to Create new tasks.
-  Users are able to Read the created tasks data.
-  Users are able to Complete the task by checking off the task with a strike through.
-  Users are able to Delete the task.
-  Users are able to Update the tasks with many customized options.
   Users are able to View a Banner with current date-time.
-  Users can Check the count of remaining tasks, Complete all tasks together, Delete all completed tasks together.
-  Users can View All, Incomplete, Completed Tasks.
-  Users can mark Due Date & Priority Levels for the Tasks.
   <br/>
   <br/>

## 🔥 Getting Started With The Project

### 🐳 **Option 1: Docker Setup (Recommended)**

**Prerequisites:**
- Docker Desktop installed on your system
- Git

**Quick Start:**
```bash
# Clone the repository
git clone https://github.com/RoshanTiwari07/todo-app-docker-k8s.git

# Navigate to project directory
cd todo-app-docker-k8s

# Build and start all services with Docker Compose
docker-compose up --build

# Access the application at http://localhost:8000
```

**Docker Commands:**
```bash
# Start the application (after first build)
docker-compose up

# Stop the application
docker-compose down

# View logs
docker-compose logs

# Rebuild containers
docker-compose up --build --force-recreate

# Clean restart (removes volumes)
docker-compose down --volumes --remove-orphans
docker-compose up --build
```

### ☸️ **Option 2: Kubernetes Setup**

**Prerequisites:**
- Kubernetes cluster (Docker Desktop, Minikube, or cloud provider)
- kubectl configured

**Deploy to Kubernetes:**
```bash
# Navigate to Kubernetes manifests
cd devops\ prep

# Apply namespace
kubectl apply -f namespace.yml

# Apply all configurations
kubectl apply -f .

# Check deployment status
kubectl get pods -n todo-app

# Access the application
kubectl port-forward service/todo-app-service 8000:8000 -n todo-app
# Then visit http://localhost:8000
```

**Kubernetes Commands:**
```bash
# Check all resources
kubectl get all -n todo-app

# View logs
kubectl logs -f deployment/todo-app -n todo-app

# Scale the application
kubectl scale deployment todo-app --replicas=3 -n todo-app

# Delete all resources
kubectl delete namespace todo-app
```

### 💻 **Option 3: Local Development Setup**

**Prerequisites:**
- NodeJS (v16 or higher)
- MongoDB installed locally
- Git

**Setup Steps:**
1. **Clone & Install:**
   ```bash
   git clone https://github.com/RoshanTiwari07/todo-app-docker-k8s.git
   cd todo-app-docker-k8s
   npm install
   ```

2. **Environment Configuration:**
   ```bash
   # Create .env file (use ENV_FORMAT.json as reference)
   DEPLOYMENT=local
   ENVIRONMENT=development
   DB_LOCAL=mongodb://127.0.0.1:27017/todo_list
   PORT=8000
   ```

3. **Start MongoDB Service:**
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```

4. **Run the Application:**
   ```bash
   npm start
   # Access at http://localhost:8000
   ```

### 🔧 **Environment Configurations**

| Mode | DEPLOYMENT | ENVIRONMENT | Description |
|------|------------|-------------|-------------|
| Docker | `docker` | `development` | Docker containers with auto-reload |
| Kubernetes | `docker` | `production` | K8s deployment with scaling |
| Local Dev | `local` | `development` | Local MongoDB with live reload |
| Local Prod | `local` | `production` | Local MongoDB production mode |

### 🚀 **Additional Commands**

```bash
# Install dependencies
npm install

# Start development server
npm start

# Check application health (Docker)
curl http://localhost:8000/health

# View container status
docker ps

# Access MongoDB (Docker)
docker exec -it fullstack-todo-list-application-mongo-1 mongosh -u root -p admin123
```

### 🐛 **Troubleshooting**

If you encounter connection issues:

1. **Check container status:**
   ```bash
   docker ps -a
   ```

2. **View application logs:**
   ```bash
   docker logs fullstack-todo-list-application-node-app-1
   ```

3. **Test database connection:**
   ```bash
   docker exec -it fullstack-todo-list-application-mongo-1 mongosh -u root -p admin123 --eval "db.adminCommand('ping')"
   ```

4. **Restart containers:**
   ```bash
   docker-compose down && docker-compose up --build
   ```

For any issues related to the project, raise an ISSUE in the respective Repository.
<br/>
<br/>

## 🔨 Tools Used

<p align="justify">
<img height="140" width="140" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png">
<img height="140" width="140" src="https://logodix.com/logo/470309.png">
<img height="140" width="140" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">
<img height="140" width="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2l-4Y-ZVZm77rzV9CRJxmgNPpy36zgePIA&usqp=CAU">
<img height="140" width="140" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX7p-_Zo1LqsEfO1v3B6Zw0Jgvhk4vo1fKA&usqp=CAU">
<img height="140" width="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASBParCnQhsRkKZ8opkkRjtk9XJ-MHdy0jA&usqp=CAU">
<img height="140" width="140" src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png">
<img height="140" width="140" src="https://kubernetes.io/images/kubernetes-horizontal-color.png">
<img height="140" width="140" src="https://code.visualstudio.com/assets/apple-touch-icon.png">
</p>

-  Library:
   -  cors
   -  dotenv
   -  ejs
   -  express
   -  mongoose
   -  nodemon
   -  express-ejs-layouts
-  Framework: ExpressJS
-  Database: MongoDB
-  Containerization: Docker & Docker Compose
-  Orchestration: Kubernetes
-  Version Control System: Git
-  VCS Hosting: GitHub
-  Programming / Scripting: JavaScript
-  Front-End: HTML, CSS, EJS
-  Runtime Environment: NodeJS
-  Integrated Development Environment: VSCode
   <br/>
   <br/>

## 🔗 Links

> ## Checkout the Repository [GitHub](https://github.com/RoshanTiwari07/todo-app-docker-k8s)
>
> ## Live Application [Web Application](http://localhost:8000) (After Docker setup)

<br/>

## 💻 Screens

<p align="justify">
<img src="https://user-images.githubusercontent.com/76626529/185441736-3de3ccec-045d-42b2-9533-b786fdf12e02.png">
</p>
<br/>

## 🐦 Follow Me:

> [GitHub](https://github.com/RoshanTiwari07)

I hope you like the project. Thanks for reading :)
