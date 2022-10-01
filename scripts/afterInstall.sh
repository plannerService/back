#! /bin/bash

REPOSITORY="/home/ubuntu/root"

echo "> docker-compose 파일이 있는 디렉토리로 이동"
cd $REPOSITORY

echo "> docker-compose build 실행"
sudo docker-compose up --build -d

echo "> <none> <none> image 삭제"
sudo docker image prune -a