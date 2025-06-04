pipeline {
    agent any

    environment {
        // Add Node and npm to the PATH so Jenkins can find them
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {
        stage('Check Environment') {
            steps {
                sh 'which node'
                sh 'node -v'
                sh 'which npm'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build (Optional)') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
