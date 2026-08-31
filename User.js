const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Lưu ý: thực tế nên hash mật khẩu bằng bcrypt
    avatar: { type: String, default: 'https://via.placeholder.com/150' },
    cover: { type: String, default: 'https://via.placeholder.com/600x200' },
    bio: { type: String, default: 'Chưa có tiểu sử' }
});

module.exports = mongoose.model('User', UserSchema);
