cd backend
call mvn clean install
cd ..
call docker-compose up -d --build