pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Repo already cloned by Jenkins. Skipping manual git clone.'
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
