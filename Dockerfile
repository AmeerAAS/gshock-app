FROM nginxinc/nginx-unprivileged:alpine

# Copy custom non-root Nginx server configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy web app source files into standard Nginx html directory
COPY index.html /usr/share/nginx/html/index.html

# Expose unprivileged HTTP port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]