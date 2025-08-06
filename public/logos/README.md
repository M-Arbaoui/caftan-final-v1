# Adding Your Logo to YAQOUT Moroccan Elegance

## 📁 Logo Directory
This directory is where you should place your YAQOUT logo files.

## 🎨 How to Add Your Logo

### Step 1: Add Your Logo File
1. Place your logo file in this directory (`public/logos/`)
2. Recommended filename: `yaqout-logo.png` (or `.jpg`, `.svg`)
3. Recommended size: 200x200px minimum for good quality

### Step 2: Update the Header Component
Once you've added your logo file, update the Header component:

1. Open `src/components/Header.tsx`
2. Find the logo section (around line 30-40)
3. Replace the placeholder logo div with your actual logo:

```tsx
{/* Replace this placeholder with your actual logo */}
<img 
  src="/logos/yaqout-logo.png" 
  alt="YAQOUT" 
  className="h-12 w-auto transition-all duration-500 group-hover:scale-105" 
/>

{/* Remove or comment out this placeholder div */}
{/* <div className="h-12 w-12 bg-gradient-royal rounded-lg flex items-center justify-center shadow-elegant group-hover:shadow-luxury transition-all duration-500 group-hover:scale-105">
  <span className="text-primary-foreground font-display font-bold text-xl">Y</span>
</div> */}
```

### Step 3: Logo Styling Options
The logo will automatically inherit these styles:
- Smooth hover animations
- Scale effect on hover
- Glow effect on hover
- Responsive sizing

## 🎯 Logo Requirements
- **Format**: PNG, JPG, or SVG (SVG recommended for best quality)
- **Size**: Minimum 200x200px, larger is better
- **Background**: Transparent background preferred
- **Colors**: Should work well with the luxury Moroccan color palette

## 🌟 Logo Features
Your logo will automatically get:
- ✅ Smooth hover animations
- ✅ Scale effect on hover
- ✅ Glow effect
- ✅ Responsive sizing
- ✅ Dynamic sizing based on scroll position
- ✅ Mobile-friendly display

## 📱 Mobile Considerations
- Logo will be smaller on mobile devices
- Text will be hidden on scroll for cleaner mobile experience
- Touch-friendly hover states

## 🎨 Brand Integration
The logo is designed to work seamlessly with:
- Luxury Moroccan color palette
- Elegant typography (Playfair Display)
- Sophisticated animations
- Professional backdrop blur effects

---

**Ready to add your logo?** Just place your logo file in this directory and follow the steps above! ✨ 