const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "images/profiles");
    },

    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, file.fieldname + '-' + uniqueSuffix + '.png');
    }
})

const uploadProfileImage = multer({ storage });

module.exports = uploadProfileImage;