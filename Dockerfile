FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY ./build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]