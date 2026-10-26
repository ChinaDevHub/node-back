# 1. Baza obrazını (Base image) seçirik
FROM node:18-alpine

# 2. Konteyner daxilində işçi qovluğu təyin edirik
WORKDIR /app

# 3. Asılılıq fayllarını kopyalayırıq və quraşdırırıq
COPY package*.json ./
RUN npm install

# 4. Layihənin digər bütün fayllarını kopyalayırıq
COPY . . 

# 5. Serverin işlədiyi portu bildiririk (məsələn, 4000)
EXPOSE 4000

# 6. Konteyner başlayanda icra olunacaq komandanı təyin edirik
CMD ["node", "server.js"]