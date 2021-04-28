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
                //sh 'npm install'
                echo 'finished build'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:10-alpine'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'npm test'
                echo 'Ran all test suites.'
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
