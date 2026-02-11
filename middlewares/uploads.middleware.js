import { application } from 'express';
import multer from 'multer';
import path from 'path';

//----------STORAGE CONFIGURATION---------------
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'uploads/');
  },

  filename: (req, res, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);

    cb(null, unique + path.extname(fileURLToPath.originalname));
  },
});

//---------FILE VALIDATION--------------
const fileFilter = (req, res, cb) => {
  if (
    (file.mimetype.startsWith('image/') || 
    file.mimetype === 'application/pdf')
  ) {
    cb(null, true);
  } else {
    cb(new Error('only images or PDFs allowed'), false);
  }
};

// EXPORT MULTER INSTANCE
export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});