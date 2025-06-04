pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Kannatvr/project_appium.git'
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
