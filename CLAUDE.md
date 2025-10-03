# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hexo-based static website for ریختار (Rikhtaar), a Persian design group. The site is built with Hexo 7.2.0 and deployed via git to GitHub. The website showcases design products and projects with a focus on Persian/Farsi content (right-to-left language).

## Common Commands

### Development Workflow
- `hexo new <post-name>` - Create a new post
- `hexo clean && hexo generate` - Clean and rebuild the site
- `hexo serve` - Start local development server
- `hexo deploy` - Deploy to GitHub (configured for https://github.com/arashThr/rikhtaar.git)

### Image Processing
Before adding images to posts:
1. Compress images using http://optimizilla.com/ (appends `-min` to filename)
2. Add watermark: `composite -dissolve 50% -gravity southEast logo-white.png <image>.jpg <image>.jpg`
3. Create thumbnails: `sips -Z 400 <image>.jpg`

The `transform-images.sh` script automates batch image processing (resize to 1600x1600, apply watermark, create 400px thumbnails).

## Architecture

### Directory Structure
- `source/_posts/` - Blog posts/product pages (Markdown files)
- `source/` - Static assets (CSS, fonts, images, scripts)
- `scaffolds/` - Templates for new posts/pages
- `scripts/` - Custom Hexo plugins (helpers and tags)
- `public/` - Generated static site (gitignored)

### Configuration
- `_config.yml` - Main Hexo configuration
  - Site configured for Persian language (`language: fa`)
  - Timezone: Asia/Tehran
  - Theme: edinburgh
  - Deployment: Git-based to GitHub
  - Google Analytics tracking configured

### Custom Hexo Extensions

Located in `scripts/`:

**Helper Functions** (`helpers.js`):
- `indexCover` - Generates thumbnail paths by inserting `/thumbs/` subdirectory into image paths

**Custom Tags** (`tags.js`):
- `{% slides <name> <count> %}` - Generates PhotoSwipe-compatible image galleries
  - Reads image dimensions using `image-size` package
  - Creates responsive galleries with full-size and thumbnail versions
  - Images must follow pattern: `source/_posts/<name>/<name>_<number>.jpg`

- `{% order [link] [price] %}` - Displays order modal with purchase options
  - If no link: shows "coming soon" message
  - With link: shows order modal with terms and conditions, online payment and in-person delivery options

- `{% sale <link> %}` - Simple purchase button linking to external store

### Post Structure
Posts use front matter with:
- `title` - Post title
- `subtitle` - Optional subtitle
- `date` - Publication date
- `cover_image` - Path to cover image (relative to post folder)
- `tags` - Optional tags

Posts typically include product descriptions, image galleries using `{% slides %}` tag, technical specifications, and purchase options via `{% sale %}` or `{% order %}` tags.

### Image Organization
Each post with images has a corresponding folder in `source/_posts/<post-name>/`:
- Full-size images: `<post-name>_1.jpg`, `<post-name>_2.jpg`, etc.
- Thumbnails stored in: `thumbs/` subdirectory
- Watermark logo: `source/images/watermark/logo-white.png`

## Deployment
The site deploys to GitHub Pages via the hexo-deployer-git plugin. The deploy configuration pushes to the master branch of https://github.com/arashThr/rikhtaar.git with commit message "Site update".
