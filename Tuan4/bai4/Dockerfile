FROM nginx:latest

# Xóa file mặc định của nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy file web vào thư mục nginx
COPY index.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80