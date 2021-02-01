docker rm -f rapp nginx-proxy nginx-proxy-letsencrypt
docker network remove test-net

docker network create test-net

docker run -d --network test-net \
-e VIRTUAL_HOST=127.0.0.1 \
-e LETSENCRYPT_HOST=127.0.0.1 \
-e LETSENCRYPT_EMAIL=kolegran@gmail.com \
--name rapp react-app

docker run -d --network test-net -p 80:80 -p 443:443 \
-v /root/nginx/certs:/etc/nginx/certs \
-v /root/nginx/vhost.d:/etc/nginx/vhost.d \
-v /usr/share/nginx/html \
-v /var/run/docker.sock:/tmp/docker.sock:ro \
--name nginx-proxy jwilder/nginx-proxy

docker run -d --network test-net --volumes-from nginx-proxy \
-v /var/run/docker.sock:/var/run/docker.sock:ro \
-e NGINX_PROXY_CONTAINER=nginx-proxy \
--name nginx-proxy-letsencrypt jrcs/letsencrypt-nginx-proxy-companion