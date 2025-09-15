@Library('Shared-lib')_
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
            docker.build("todo-app","latest")
            }
        }
        stage("Push to DockerHub"){
            steps{
                docker.push("dockerHubCreds","todo-app","latest")
            }
        }
        stage("Deploy"){
            steps{
                deploy()
            }
        }
        
    }
}
