// start.js - Entry point that loads .env first
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Load .env
dotenv.config({ path: path.join(__dirname, '.env') });

// 2. Set defaults if not in .env
process.env.MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mydatabase';
process.env.PORT = process.env.PORT || 5000;

// 3. Log for debugging
console.log('=== Environment ===');
console.log('Directory:', __dirname);
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);
console.log('===================');

// 4. Import and start the server
import('./server.js');