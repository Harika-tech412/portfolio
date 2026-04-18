# Harika Puchalapalli — Portfolio Website

A personal portfolio built with **React** and **React Router**, deployed via **GitHub Pages**.

---

## 🚀 Local Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at `http://localhost:3000`

---

## 📦 Deployment to GitHub Pages

### Step 1: Create GitHub Repo
- Go to GitHub → New Repository → name it `portfolio` → Create

### Step 2: Push your code
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Update `package.json`
Replace `your-username` in the `homepage` field:
```json
"homepage": "https://YOUR-USERNAME.github.io/portfolio"
```

### Step 4: Install gh-pages (already in dependencies)
```bash
npm install
```

### Step 5: Deploy
```bash
npm run deploy
```

### Step 6: Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Select branch: `gh-pages` → Save

Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio`

---

## ✏️ Customization Checklist

- [ ] Replace `your-username` in `package.json` homepage
- [ ] Replace `your-username` in GitHub links inside `Projects.js` and `Home.js`
- [ ] Add your **college email** in `Home.js` (Personal Details section)
- [ ] Add your **profile picture**: save it as `src/assets/profile.jpg`, then in `Home.js` replace the `<svg>` avatar with `<img src={require('../assets/profile.jpg')} alt="Harika" />`
- [ ] Update the RAG project and predictive maintenance GitHub links in `Projects.js`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   └── Navbar.css
├── pages/
│   ├── Home.js
│   ├── Home.css
│   ├── Projects.js
│   └── Projects.css
├── App.js
├── App.css
├── index.js
└── index.css
public/
└── index.html
```
