FROM node:22-alpine

WORKDIR /app

# Copy backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install --omit=dev

# Copy application files
COPY backend ./backend
COPY frontend ./frontend

ENV PORT=2567
ENV NODE_ENV=production

EXPOSE 2567

CMD ["node", "backend/src/index.js"]
