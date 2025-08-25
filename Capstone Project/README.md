# Capstone-Project-My-Blog-
Backend Capstone Project using Node.js, Express.js and EJS.
# Blog Web Application

A simple yet elegant blog web application built with Node.js, Express.js, and EJS. This application allows users to create, read, update, and delete blog posts with a clean, responsive interface.

## 🚀 Features

- **Create Posts**: Write and publish new blog posts
- **View Posts**: Browse all posts on the home page or view individual posts
- **Edit Posts**: Update existing posts with new content
- **Delete Posts**: Remove posts that are no longer needed
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern, user-friendly interface with smooth animations
- **Reading Statistics**: Display reading time, word count, and other metrics
- **Error Handling**: Custom 404 and 500 error pages

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Templating Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome
- **Styling**: Custom CSS with modern design principles

## 📁 Project Structure

```
blog-web-app/
├── node_modules/           # Dependencies
├── public/                 # Static files
│   └── styles/
│       └── main.css       # Main stylesheet
├── views/                  # EJS templates
│   ├── partials/          # Partial templates
│   │   ├── header.ejs     # Header component
│   │   └── footer.ejs     # Footer component
│   ├── index.ejs          # Home page
│   ├── create.ejs         # Create post page
│   ├── post.ejs           # Individual post view
│   ├── edit.ejs           # Edit post page
│   ├── 404.ejs            # 404 error page
│   └── 500.ejs            # 500 error page
├── server.js              # Main server file
├── package.json           # Project configuration
├── package-lock.json      # Dependency lock file
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14.0.0 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <your-repo-url>
   cd blog-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Or for production:
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📝 Usage

### Creating a Post
1. Click the "New Post" button in the header
2. Fill in the title, author (optional), and content
3. Click "Publish Post" to create the post

### Viewing Posts
- The home page displays all posts in reverse chronological order
- Click on any post title or "Read More" to view the full post

### Editing a Post
1. From the home page or individual post view, click "Edit"
2. Modify the content as needed
3. Click "Update Post" to save changes

### Deleting a Post
1. Click the "Delete" button on any post
2. Confirm the deletion in the popup dialog

## 🎨 Customization

### Styling
- Main styles are located in `public/styles/main.css`
- The design uses CSS Grid and Flexbox for responsive layouts
- Color scheme and animations can be easily customized

### Templates
- All EJS templates are in the `views/` directory
- Partials (header/footer) are in `views/partials/`
- Templates use semantic HTML for accessibility

### Server Configuration
- Main server logic is in `server.js`
- Port can be configured via environment variable `PORT` or defaults to 3000
- Routes are clearly organized and documented

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home page with all posts |
| GET | `/create` | Create new post form |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | View individual post |
| GET | `/posts/:id/edit` | Edit post form |
| PUT | `/posts/:id` | Update existing post |
| DELETE | `/posts/:id` | Delete post |

## 📱 Responsive Design

The application is fully responsive and works well on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (below 768px)

## ⚠️ Important Notes

- **Data Persistence**: Posts are stored in memory and will be lost when the server restarts
- **No Database**: This version doesn't use a database for simplicity
- **Single User**: The application doesn't have user authentication or multi-user support

## 🚀 Future Enhancements

Potential improvements for future versions:
- Database integration (MongoDB, PostgreSQL, etc.)
- User authentication and authorization
- Comment system
- Search functionality
- Categories and tags
- File upload for images
- Rich text editor
- Social sharing features

## 📄 License

This project is licensed under the MIT License - see the package.json file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💬 Support

If you have any questions or run into issues:
1. Check the console for error messages
2. Ensure all dependencies are properly installed
3. Verify that Node.js version meets requirements
4. Check that port 3000 is available

## 🎯 Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon (auto-restart)
- `npm test` - Run tests (not implemented yet)

---

Built with ❤️ using Node.js, Express.js, and EJS
