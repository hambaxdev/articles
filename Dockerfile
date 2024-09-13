# Базовый образ
FROM node:18

# Установка рабочей директории
WORKDIR /app

# Копирование файлов
COPY package*.json ./
RUN npm install

COPY . .

# Открытие порта
EXPOSE 3000

# Запуск сервера
CMD ["npm", "start"]
