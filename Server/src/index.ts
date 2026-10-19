import connectDB from './config/database.js';
import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
const PORT = process.env.PORT || 5000;
const app = express();
const startServer = async () => {
    try {
        await connectDB();

        const server = app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

        const shutdown = (signal: string) => {
            console.log(`${signal} received. Shutting down...`);

            server.close(async () => {
                try {
                    await mongoose.connection.close();
                    console.log('MongoDB connection closed');
                    process.exit(0);
                } catch (error) {
                    console.error('Error closing MongoDB:', error);
                    process.exit(1);
                }
            });
        };

        process.on('SIGINT', () => shutdown('SIGINT'));
        process.on('SIGTERM', () => shutdown('SIGTERM'));

    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();