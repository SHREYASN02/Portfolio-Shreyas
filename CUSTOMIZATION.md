# 🎯 Quick Customization Guide

## 📝 Essential Updates (5 Minutes)

### 1. Personal Info (index.html)
Search and replace these values:

- **Name**: Line 35 - `<h1 class="hero-title">Shreyas N</h1>`
- **Role**: Line 36 - `<h2 class="hero-subtitle">Python Full Stack Developer</h2>`
- **Email**: Line 47 - `href="mailto:edigashreyasn02@gmail.com"`
- **Phone**: Line 332 - `href="tel:+918073054833"`
- **GitHub**: Line 39 - `href="https://github.com/SHREYASN02"`
- **LinkedIn**: Line 48 - `href="https://www.linkedin.com/in/shreyasnsvit"`

### 2. Color Theme (style.css - Line 4)
```css
--primary-color: #2563eb;  /* Your main color */
```

### 3. About Me (index.html - Lines 92-99)
Update the two paragraphs with your own bio

### 4. Footer (index.html - Line 430)
```html
<p class="footer-text">&copy; 2024 Your Name. All rights reserved.</p>
```

## 🎨 Color Palette Options

Copy and paste into `style.css` (Line 4-7):

### Blue (Current)
```css
--primary-color: #2563eb;
--primary-dark: #1e40af;
--primary-light: #3b82f6;
--accent-color: #60a5fa;
```

### Purple
```css
--primary-color: #7c3aed;
--primary-dark: #6d28d9;
--primary-light: #8b5cf6;
--accent-color: #a78bfa;
```

### Green
```css
--primary-color: #10b981;
--primary-dark: #059669;
--primary-light: #34d399;
--accent-color: #6ee7b7;
```

### Orange
```css
--primary-color: #f59e0b;
--primary-dark: #d97706;
--primary-light: #fbbf24;
--accent-color: #fcd34d;
```

### Teal
```css
--primary-color: #14b8a6;
--primary-dark: #0f766e;
--primary-light: #2dd4bf;
--accent-color: #5eead4;
```

### Pink
```css
--primary-color: #ec4899;
--primary-dark: #db2777;
--primary-light: #f472b6;
--accent-color: #f9a8d4;
```

## 📸 Adding Your Photo

Replace lines 84-91 in `index.html` with:

```html
<div class="hero-image">
    <div class="image-container">
        <img 
            src="your-photo.jpg" 
            alt="Your Name" 
            style="border-radius: 50%; width: 100%; height: auto; box-shadow: var(--shadow-xl);"
        >
    </div>
</div>
```

## 🔗 Social Links to Update

Find and replace in `index.html`:

1. **Hero Section GitHub** (Line 39):
   ```html
   <a href="https://github.com/YOUR_USERNAME">
   ```

2. **Hero Section LinkedIn** (Line 48):
   ```html
   <a href="https://www.linkedin.com/in/YOUR_PROFILE">
   ```

3. **Hero Section Email** (Line 57):
   ```html
   <a href="mailto:your.email@example.com">
   ```

4. **Contact Section** (Lines 378-394): Update all three again

## ✏️ Content Sections to Customize

### Skills (Lines 126-230)
- Update skill names
- Adjust percentages
- Change `style="width: XX%"` to match

### Experience (Lines 234-270)
- Update dates
- Change company names
- Modify job descriptions

### Projects (Lines 274-325)
- Update project titles
- Change descriptions
- Modify tech tags
- Update GitHub links

### Education (Lines 329-345)
- Update degree
- Change institution
- Modify dates and CGPA

### Certifications (Lines 348-367)
- Add/remove cert cards
- Update titles and issuers

## 📄 Resume Download Setup

1. Save your resume PDF as `resume.pdf` in the portfolio folder
2. Update `script.js` (Line 380-410) with:

```javascript
downloadResumeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const a = document.createElement('a');
    a.href = 'resume.pdf';
    a.download = 'Your_Name_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
```

## 🌐 Google Fonts Integration

Add to `<head>` in `index.html` (after line 7):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Update `style.css` (Line 31):
```css
--font-primary: 'Inter', system-ui, -apple-system, sans-serif;
```

### Recommended Font Combinations:

**Modern & Clean:**
```
Font: Inter or Manrope
Link: Inter:wght@400;500;600;700;800
```

**Professional:**
```
Font: Work Sans
Link: Work+Sans:wght@400;500;600;700;800
```

**Creative:**
```
Font: Poppins
Link: Poppins:wght@400;500;600;700;800
```

## 📧 Contact Form Integration

### Using Formspree (Easiest):
1. Go to formspree.io and create free account
2. Get your form endpoint
3. Update `index.html` (Line 396):
```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Using EmailJS:
1. Sign up at emailjs.com
2. Create email template
3. Add to `index.html` before `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
4. Update `script.js` form handler

## 🚀 Quick Deployment

### GitHub Pages:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

### Netlify:
1. Drag portfolio folder to netlify.com/drop
2. Done! Site is live

## ✅ Testing Checklist

- [ ] All links work (especially social media)
- [ ] Contact form validates properly
- [ ] Dark/light mode toggle works
- [ ] Mobile menu opens and closes
- [ ] Smooth scrolling works
- [ ] All sections visible on mobile
- [ ] Images load correctly
- [ ] Resume downloads
- [ ] No console errors

## 🎨 Quick Styling Changes

### Change Section Background Colors
In `style.css`, find these classes and modify:

```css
.about { background-color: var(--bg-secondary); }
.experience { background-color: var(--bg-secondary); }
.education { background-color: var(--bg-secondary); }
```

Change to `var(--bg-color)` for white background.

### Adjust Section Spacing
In `style.css` (Line 26):
```css
--section-padding: 80px 0;  /* Change to 60px or 100px */
```

### Change Header Height
In `style.css` (Line 25):
```css
--header-height: 70px;  /* Adjust as needed */
```

## 🎯 Common Modifications

### Remove a Section
1. Delete the section HTML in `index.html`
2. Remove nav link from navigation menu
3. CSS will auto-adjust

### Add New Project
Copy project card HTML (Lines 280-305) and paste below, then modify:

```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">New Project Name</h3>
        <div class="project-links">
            <a href="YOUR_GITHUB_URL" class="project-link" aria-label="GitHub">
                <!-- Keep the SVG icon -->
            </a>
        </div>
    </div>
    <p class="project-description">Your project description here...</p>
    <div class="project-tech">
        <span class="tech-tag">Tech 1</span>
        <span class="tech-tag">Tech 2</span>
    </div>
</div>
```

### Change Button Styles
In `style.css` (Lines 88-110), modify:
```css
.btn {
    border-radius: 8px;  /* Change to 20px for pill shape, 0 for square */
}
```

## 💡 Pro Tips

1. **Consistent Naming**: Use your actual name everywhere for better SEO
2. **Quality Images**: Compress images with tinypng.com before adding
3. **Test Mobile**: Use Chrome DevTools mobile view
4. **Loading Speed**: Keep total page size under 3MB
5. **Backup**: Keep original files before making changes

## 🔍 Where to Find What

| What to Change | File | Approximate Line |
|----------------|------|------------------|
| Name & Title | index.html | 35-36 |
| Social Links | index.html | 39, 48, 57 |
| About Text | index.html | 92-99 |
| Skills | index.html | 126-230 |
| Experience | index.html | 234-270 |
| Projects | index.html | 274-325 |
| Colors | style.css | 1-30 |
| Fonts | style.css | 31 |
| Resume Download | script.js | 380-410 |

---

**Need more help?** Check the full README.md for detailed instructions!
