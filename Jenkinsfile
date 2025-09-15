@Library('Shared-lib')_
<<<<<<< HEAD
pipeline{
    agent any
    
    stages{
        stage("Code clone"){
            steps{
            clone("https://github.com/RoshanTiwari07/todo-app-docker-k8s.git","main")
            }
        }
        stage("Code Build"){
            steps{
                srcipt {
            docker.build("todo-app","latest")
                }
            }
        }
        stage("Push to DockerHub"){
            steps{
                srcipt {
                docker_push("dockerHubCreds","todo-app","latest")
                }
            }
        }
        stage("Deploy"){
            steps{
                deploy()
            }
        }
        
    }
}
=======
pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "roshan03ish/fullstack-todo-list-app"
        DOCKER_TAG = "latest"
        DOCKERHUB_CREDS = "dockerHubCreds"
        GIT_REPO = "https://github.com/RoshanTiwari07/todo-app-docker-k8s.git"
        GIT_BRANCH = "main"
    }
    
    stages {
        stage("Code Clone") {
            steps {
                // Shared library function: clone(repo, branch)
                clone("${GIT_REPO}", "${GIT_BRANCH}")
            }
        }
        
        stage("Code Build") {
            steps {
                // Shared library function: docker_build(image, tag)
                docker_build("${DOCKER_IMAGE}", "${DOCKER_TAG}")
            }
        }
        
        stage("Push to DockerHub") {
            steps {
                // Shared library function: docker_push(credentials, image, tag)
                docker_push("${DOCKERHUB_CREDS}", "${DOCKER_IMAGE}", "${DOCKER_TAG}")
            }
        }
        
        stage("Deploy to Kubernetes") {
            steps {
                // Shared library function: deploy()
                deploy()
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo "✅ Pipeline completed successfully!"
            echo "🚀 Application deployed: ${DOCKER_IMAGE}:${DOCKER_TAG}"
        }
        failure {
            echo "❌ Pipeline failed. Check logs for details."
        }
    }
}
>>>>>>> 36f7f1d (Add Jenkinsfile from VS Code)
