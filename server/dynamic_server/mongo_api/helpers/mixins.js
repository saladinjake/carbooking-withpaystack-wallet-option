// Check File Type
function checkFileType(file, cb, fileTypeRegex = /jpeg|jpg|png|gif/) {
  // Allowed ext
  const filetypes = fileTypeRegex;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

const Mixins = {
  checkFileType,
};
export default Mixins;
