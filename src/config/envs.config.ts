import { registerAs } from '@nestjs/config';

export default registerAs('env.config', () => {
    return{
        DATABASE: {
          DB_TYPE: process.env.DB_TYPE,
          DB_HOST: process.env.DB_HOST,
          DB_PORT: process.env.DB_PORT,
          DB_USER: process.env.DB_USER,
          DB_PASSWORD: process.env.DB_PASSWORD,
          DB_NAME: process.env.DB_NAME,
        }
    }
})