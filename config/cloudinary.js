import { v2 as cloudinary } from 'cloudinary';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:  process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
    console.log("Keys:", process.env.CLOUDINARY_CLOUD_NAME, 
        process.env.CLOUDINARY_API_KEY, 
        process.env.CLOUDINARY_API_SECRET);

export default cloudinary;

