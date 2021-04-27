pipeline {
    agent none
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:6-alpine' 
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'npm install'
                sh 'cd backend && npm install'
                echo 'finished build'
            }
        }
        stage('Backend Tests') {
            agent {
                docker {
                    image 'node:10-alpine'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'cd backend && npm run test'
                echo 'Finished backend Tests'
            }
        }
/*pipeline {
    agent none
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:6-alpine' 
                    args '-p 3000:3000'
                }
            }
            steps {
                //sh 'npm install'
                echo 'finished build'
            }
        }
        stage('Backend Tests') {
            agent {
                docker {
                    image 'node:10-alpine'
                    args '-p 3000:3000'
                }
            }
            steps {
                //sh 'npm test'
                echo 'Finished backend Tests'
            }
        }
        /*
        stage('Static Analysis') {
            agent {
                docker {
                    image 'node:10-alpine'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'npm run analysis'
                echo 'Finished Static Analysis'
            }
        }
        stage('Code Coverage') {
            agent {
                docker {
                    image 'node:10-alpine'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'npm run coverage'
                echo 'Finished Code Coverage'
            }
        }
        */
    }
}
