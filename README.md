# 🎨 Meme Generator

A modern, feature-rich web-based meme generator with an intuitive interface and powerful customization options.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

## ✨ Features

### 🖼️ Image Upload
- **Click to Upload**: Traditional file picker interface
- **Drag & Drop**: Simply drag and drop images directly into the preview area
- **Visual Feedback**: Animated border when dragging images

### 🎨 Text Customization
- **Dual Text Input**: Add text to top and bottom of your meme
- **Live Preview**: See changes in real-time as you type
- **Color Picker**: Choose any color for your text
- **Outline Color**: Customize the text stroke color
- **Adjustable Font Size**: Slider control from 20px to 80px
- **Text Shadow**: Toggle shadow effect for better readability
- **Auto-Fit Text**: Automatically adjusts font size to fit the image width

### 💾 Export & Reset
- **High-Quality Download**: Generate and download memes as PNG files
- **One-Click Reset**: Clear all inputs and start fresh
- **Canvas-Based Export**: Uses html2canvas for pixel-perfect rendering

### 📱 Responsive Design
- Fully responsive layout that works on desktop and mobile devices
- Glassmorphism UI effects for a modern look
- Smooth transitions and animations

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/freemandjomo/Meme-Generator.git
   cd Meme-Generator
   ```

2. **Open in browser**
   ```bash
   # Simply open the HTML file
   start meme.html  # Windows
   open meme.html   # macOS
   xdg-open meme.html  # Linux
   ```

   Or drag `meme.html` into your browser.

## 📖 Usage Guide

### Creating Your First Meme

1. **Upload an Image**
   - Click the "Upload Image" button and select an image
   - OR drag and drop an image directly onto the preview area

2. **Add Text**
   - Type your top text in the upper textarea
   - Type your bottom text in the lower textarea
   - Text appears in real-time on your image

3. **Customize Appearance**
   - **Text Color**: Click the color picker next to "Text Color"
   - **Outline**: Change the outline color with the second color picker
   - **Font Size**: Drag the slider to adjust text size (20-80px)
   - **Text Shadow**: Toggle the checkbox for shadow effects

4. **Generate & Download**
   - Click the "Generate" button
   - Click "Download" to save your meme

5. **Start Over**
   - Click "Refresh" to reset all settings and start fresh

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients, flexbox, and animations
- **JavaScript (ES6+)**: Core functionality and event handling
- **jQuery 3.7.1**: DOM manipulation and event handling
- **html2canvas 1.4.1**: Canvas-based image rendering
- **Font Awesome 4.7**: Icons for UI elements

## 📁 Project Structure

```
Meme-Generator/
├── meme.html          # Main HTML file
├── meme.css           # Stylesheet
├── meme.js            # JavaScript logic
└── README.md          # Documentation
```

## 🎯 Key Functions

### JavaScript Functions

- `loadImage(file)` - Loads and displays uploaded images
- `updateText()` - Updates text overlays on the image
- `applyTextStyles($element)` - Applies custom styling to text elements
- `fitText($element, maxWidth, maxFontSize)` - Auto-adjusts text size to fit container

### CSS Features

- Glassmorphism effects with `backdrop-filter`
- Responsive breakpoints for mobile devices
- Smooth transitions and hover effects
- Custom styled form controls

## 🎨 Customization

### Changing Default Colors

Edit the `currentSettings` object in `meme.js`:

```javascript
let currentSettings = {
  textColor: '#ffffff',      // Default white
  strokeColor: '#000000',    // Default black
  fontSize: 40,              // Default 40px
  textShadow: true          // Shadow enabled
};
```

### Modifying Styles

Edit `meme.css` to customize:
- Background gradients
- Button colors
- Text styles
- Layout dimensions

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions

- Add more text positioning options
- Implement image filters
- Add preset meme templates
- Create text alignment controls
- Add support for multiple text layers
- Implement undo/redo functionality

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Freeman Djomo**

- GitHub: [@freemandjomo](https://github.com/freemandjomo)
- Repository: [Meme-Generator](https://github.com/freemandjomo/Meme-Generator)

## 🙏 Acknowledgments

- [html2canvas](https://html2canvas.hertzen.com/) - For canvas rendering
- [jQuery](https://jquery.com/) - For DOM manipulation
- [Font Awesome](https://fontawesome.com/) - For icons
- Inspiration from classic meme generators

## 📸 Screenshots

### Main Interface
![Meme Generator Interface](https://via.placeholder.com/800x600?text=Add+Your+Screenshot+Here)

### Customization Options
![Customization Panel](https://github.com/freemandjomo/Meme-Generator/blob/main/meme(1).png)

---

⭐ **Star this repo** if you find it useful!

Made with ❤️ by Freeman Djomo
