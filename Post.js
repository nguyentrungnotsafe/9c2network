const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String },
    content: { type: String, required: true },
    mediaUrl: { type: String }, // Link ảnh/video hoặc trạng thái livestream
    mediaType: { type: String, enum: ['image', 'video', 'livestream', 'none'], default: 'none' },
    likes: [{ type: String }], // Mảng chứa tên người dùng đã like
    comments: [{
        author: String,
        text: String,
        createdAt: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
