#! /bin/bash

echo "> docker container 종료 및 삭제"

back_container_name="root-back-1"
nginx_container_name="root-nginx-1"

sudo docker rm -f ${back_container_name}
sudo docker rm -f ${nginx_container_name}
