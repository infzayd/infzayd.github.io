# 🦕 DINOSAURIA - Mesozoic Era Encyclopedia

An interactive and beautifully designed website showcasing fascinating dinosaurs from the Mesozoic Era. Now with **12 dinosaurs** and data stored in JSON format for easy management!

## ✨ Features

- **12 Detailed Dinosaur Profiles** - From T-Rex to Carnotaurus
- **JSON Data Structure** - Easy to add or modify dinosaurs
- **Dynamic Era Filtering** - Automatically generates filters based on data
- **Search Functionality** - Find dinosaurs by name or scientific name
- **Interactive Cards** - Click any dinosaur card to view detailed information
- **Responsive Design** - Works perfectly on all devices
- **Beautiful Animations** - Smooth transitions and engaging effects
- **Prehistoric Aesthetic** - Rich green gradients with gold accents

## 📦 Files Included

- `index.html` - Main website file
- `dinosaurs.json` - Dinosaur database (easy to edit!)
- `README.md` - This documentation

## 🚀 Quick Start

### Upload to GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload both files**:
   - `index.html`
   - `dinosaurs.json`
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Select `main` branch
   - Click Save
4. **Visit your site** at `https://yourusername.github.io/repository-name`

### Run Locally

1. Download both `index.html` and `dinosaurs.json`
2. Place them in the same folder
3. Open `index.html` in your browser

**Note:** Some browsers require a local server to load JSON files. If you see an error:
- Use VS Code with Live Server extension
- Or use Python: `python -m http.server 8000`
- Or just upload to GitHub Pages (recommended!)

## 🦖 Adding More Dinosaurs

Edit `dinosaurs.json` and add a new entry:

```json
{
  "id": 13,
  "name": "Your Dinosaur Name",
  "scientificName": "Scientific name",
  "era": "Late Cretaceous",
  "period": "XX-XX million years ago",
  "location": "Geographic location",
  "length": "X meters",
  "weight": "X kg",
  "diet": "Carnivore/Herbivore",
  "description": "Detailed description here",
  "funFact": "An interesting fact",
  "emoji": "🦖"
}
```

The website will automatically:
- Update the dinosaur count
- Add new era filters if needed
- Display the new dinosaur in the grid

## 🎨 Current Dinosaurs

1. **Tyrannosaurus Rex** 🦖 - The legendary apex predator
2. **Triceratops** 🦏 - Three-horned herbivore
3. **Velociraptor** 🦅 - Intelligent pack hunter
4. **Brachiosaurus** 🦕 - One of the tallest dinosaurs
5. **Stegosaurus** 🦎 - Famous back plates
6. **Pteranodon** 🦇 - Flying reptile
7. **Spinosaurus** 🐊 - Largest carnivore
8. **Ankylosaurus** 🛡️ - Living tank
9. **Diplodocus** 🦕 - Incredibly long sauropod
10. **Allosaurus** 🦖 - Jurassic apex predator
11. **Parasaurolophus** 🦆 - Duck-billed with crest
12. **Carnotaurus** 🐂 - Meat-eating bull

## 🔧 Customization

### Change Colors

Edit the CSS in `index.html`:
```css
/* Main background */
background: linear-gradient(135deg, #0a1f1a 0%, #1a3a2e 50%, #2d5a45 100%);

/* Gold accent */
color: #d4af37;
```

### Modify Data Structure

The JSON structure is flexible. You can add new fields like:
- `habitat`
- `speed`
- `discoveryYear`
- `imageUrl`

Just update the HTML template to display the new fields!

## 🌐 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Dinosaur information from paleontological research
- Font families from Google Fonts
- Icons inspired by Lucide icons

---

**Built with 🦕 for dinosaur enthusiasts everywhere!**

Explore the prehistoric world, one dinosaur at a time!
