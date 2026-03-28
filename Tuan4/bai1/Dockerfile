FROM node:18

# Tạo thư mục trong container
WORKDIR /app

# Copy file vào container
COPY package.json ./
COPY app.js ./

# Install dependencies (không có gì nhưng cứ viết chuẩn)
RUN npm install

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "app.js"]