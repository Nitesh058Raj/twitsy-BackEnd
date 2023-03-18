sudo rm -rf /home/NextJS/database
sudo git pull
sudo docker-compose down -v --remove-orphans
sudo docker rmi nodeapp_jwt:v1
sudo docker-compose up -d
