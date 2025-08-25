import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory storage for blog posts
let posts = [];
let nextId = 1;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// Home page - display all posts
app.get('/', (req, res) => {
    res.render('index', { 
        posts: posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        title: 'My Blog'
    });
});

// Create new post page
app.get('/create', (req, res) => {
    res.render('create', { title: 'Create New Post' });
});

// Handle post creation
app.post('/posts', (req, res) => {
    const { title, content, author } = req.body;
    
    if (!title || !content) {
        return res.render('create', { 
            title: 'Create New Post',
            error: 'Title and content are required!'
        });
    }

    const newPost = {
        id: nextId++,
        title: title.trim(),
        content: content.trim(),
        author: author ? author.trim() : 'Anonymous',
        createdAt: new Date(),
        updatedAt: new Date()
    };

    posts.push(newPost);
    res.redirect('/');
});

// View single post
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        return res.status(404).render('404', { title: 'Post Not Found' });
    }
    
    res.render('post', { post, title: post.title });
});

// Edit post page
app.get('/posts/:id/edit', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        return res.status(404).render('404', { title: 'Post Not Found' });
    }
    
    res.render('edit', { post, title: `Edit: ${post.title}` });
});

// Handle post update
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    const { title, content, author } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required!' });
    }
    
    posts[postIndex] = {
        ...posts[postIndex],
        title: title.trim(),
        content: content.trim(),
        author: author ? author.trim() : posts[postIndex].author,
        updatedAt: new Date()
    };
    
    res.json({ success: true, redirect: `/posts/${postId}` });
});

// Handle post deletion
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    posts.splice(postIndex, 1);
    res.json({ success: true, redirect: '/' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', { title: 'Server Error' });
});

app.listen(PORT, () => {
    console.log(`Blog server is running on ${PORT}`);
});