# Project Notes

## Hero Background Image

**File:** `components/HeroSection.tsx`, line 15 — replace the URL string.

### Recommended Specs

- **Dimensions:** At least 1920x1080px (landscape). The section is full-screen (`h-screen`) so wider is better — 2000px+ wide is ideal.
- **Aspect ratio:** Landscape/wide (16:9 or wider). Avoid portrait images — they'll get cropped heavily on desktop.
- **Format:** JPEG or WebP for best compression. PNG works but files will be larger.
- **File size:** Keep under ~500KB for fast loading. Use compressed/optimized versions.
- **Subject placement:** The text sits at the bottom-left of the screen, so the main subject of the photo should ideally be center or right-of-center to avoid being obscured.
- **Tone:** The image has a 60% black overlay on top (`bg-black/60`), so even lighter photos will look good. Darker photos will appear very dark.
- **Scaling:** `bg-cover bg-center` means the image scales to cover the full viewport and centers itself — edges may be cropped on different screen sizes.

### How to Swap

Replace the URL on line 15 of `components/HeroSection.tsx` with your new image URL, or use a local path like `/images/hero.jpg` (placed in the `public/images/` folder).
