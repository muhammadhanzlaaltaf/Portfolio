# Muhammad Hanzla — Portfolio Website

> Personal portfolio of Muhammad Hanzla, Data Scientist & BS Software Engineering student.

**Live URL:** `https://muhammadhanzlaaltaf.github.io/portfolio`

---

## 🗂 Project Structure

```
portfolio/
├── index.html              ← All sections (Hero, About, Skills, Projects, Contact)
├── css/
│   └── style.css           ← All styles (Light White + Deep Blue theme)
├── js/
│   └── main.js             ← Animations, typing, skill bars, filter, form
└── assets/
    ├── images/
    │   └── profile.jpg     ← Add your photo here
    └── cv/
        └── Muhammad_Hanzla_CV.pdf  ← Add your CV here
```

---

## ✅ Customization Checklist

- [ ] Replace `assets/images/profile.jpg` with your real photo
- [ ] Replace `assets/cv/Muhammad_Hanzla_CV.pdf` with your actual CV
- [ ] Set up Formspree (see below) and update the form action URL
- [ ] Update project GitHub links once repos are live
- [ ] Update Kaggle links once notebooks are published
- [ ] Update stat counters in `index.html` (20+, 15+, 18+) as you grow

---

## 📬 Setting Up the Contact Form (Formspree)

1. Go to [https://formspree.io](https://formspree.io) → sign up free
2. Create a new form → get your ID (looks like `xpwzrbjk`)
3. In `index.html`, find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```
4. Replace `YOUR_FORMSPREE_ID` with your actual ID
5. Done! Messages land in your email inbox 📥

---

## 🖼 Adding Your Profile Photo

1. Copy your photo to `assets/images/profile.jpg`
2. In `index.html`, find this block and replace it:
   ```html
   <!-- BEFORE (placeholder) -->
   <div class="img-placeholder">
     <div class="img-initials">MH</div>
   </div>

   <!-- AFTER (your photo) -->
   <img src="assets/images/profile.jpg" alt="Muhammad Hanzla" class="profile-photo" />
   ```

---

## 🚀 Deployment to GitHub Pages (Step-by-Step)

### Step 1 — Install Git
Download from [https://git-scm.com](https://git-scm.com) and install.
Verify: open terminal and type `git --version`

### Step 2 — Configure Git (one time only)
```bash
git config --global user.name "Muhammad Hanzla"
git config --global user.email "muhammadhanzlaaltaf@gmail.com"
```

### Step 3 — Create GitHub Repository
1. Go to [https://github.com/muhammadhanzlaaltaf](https://github.com/muhammadhanzlaaltaf)
2. Click **New** (green button)
3. Repository name: `portfolio`  ← exactly this
4. Set to **Public**
5. Do NOT check "Add README" (we already have one)
6. Click **Create repository**

### Step 4 — Initialize & Push from VS Code Terminal
Open the terminal in VS Code (`Ctrl + backtick`), navigate to your portfolio folder:

```bash
# Navigate to your portfolio folder
cd path/to/your/portfolio

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "🚀 Initial portfolio launch"

# Connect to GitHub (copy the URL from your new repo page)
git remote add origin https://github.com/muhammadhanzlaaltaf/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** (left sidebar)
4. Under **Source** → select `Deploy from a branch`
5. Branch: `main`, Folder: `/ (root)`
6. Click **Save**
7. Wait ~2 minutes ⏳

### Step 6 — Your Live URL
```
https://muhammadhanzlaaltaf.github.io/portfolio
```
🎉 Share this everywhere — LinkedIn, resume, Kaggle profile!

---

## 🔄 Updating Your Portfolio Later

Whenever you want to update content:
```bash
# Make your changes in VS Code, then:
git add .
git commit -m "✨ Updated projects section"
git push
```
GitHub Pages auto-deploys within 1-2 minutes!

---

## 🛠 Tech Stack
- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — No frameworks, fast & lightweight
- **Google Fonts** — DM Serif Display + Plus Jakarta Sans + JetBrains Mono
- **Font Awesome 6** — Icons
- **Formspree** — Contact form backend
