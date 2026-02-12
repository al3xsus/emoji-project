# 🎨 Emoji UI - Glassmorphism Design System

Web app showcasing usage of emojis + Unicode symbols as graphical elements with a beautiful glassmorphism design.

## ✨ Features

- **Glassmorphism Design**: Beautiful blur effects and semi-transparent glass-like cards
- **Unicode Icons Only**: No SVGs or images - only emojis and Unicode symbols
- **Pure CSS**: Manual atomic utility system for spacing, flexbox, and layout
- **Dark Mode**: Toggle between light and dark themes with system preference support
- **Responsive**: Works on all screen sizes
- **Svelte Transitions**: Smooth view switching animations
- **CSS Variables**: Fully customizable through CSS custom properties

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the app.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── GlassCard.svelte      # Reusable glassmorphism card component
│   └── ThemeToggle.svelte    # Dark/light mode toggle button
├── stores/
│   └── theme.js              # Theme state management with localStorage
├── views/
│   ├── ButtonsView.svelte    # Button showcase
│   ├── RadiosView.svelte     # Radio button examples
│   └── InputsView.svelte     # Input field demonstrations
├── App.svelte                # Main app with navigation
├── app.css                   # Global styles, CSS variables, atomic utilities
└── main.js                   # App entry point
```

## 🎨 Design System

### CSS Variables

All design tokens are defined as CSS variables:

- **Colors**: Separate light and dark theme palettes
- **Spacing**: Atomic scale from `--space-1` to `--space-12`
- **Typography**: Font sizes from `--text-xs` to `--text-3xl`
- **Border Radius**: From `--radius-sm` to `--radius-full`
- **Transitions**: Predefined timing functions

### Atomic Utilities

Manual utility classes for common patterns:

- **Flexbox**: `.flex`, `.flex-col`, `.items-center`, `.justify-between`
- **Spacing**: `.gap-{n}`, `.m-{n}`, `.p-{n}`, `.mt-{n}`, `.px-{n}`
- **Text**: `.text-primary`, `.text-center`, `.text-lg`

### Components

#### GlassCard
Reusable card component with glassmorphism effect:
- Optional title
- Configurable padding
- Hover effects

#### ThemeToggle
Button to switch between light/dark modes:
- Animated sun/moon icons
- Syncs with localStorage
- Respects system preferences

## 🌈 Views

### 🔘 Buttons
- Basic buttons (Primary, Secondary, Accent, Danger)
- Icon buttons with emoji icons
- Size variants (Small, Medium, Large)

### ⚪ Radios
- Basic radio groups
- Color selection
- Size selection
- Real-time state display

### 📝 Inputs
- Text inputs (Name, Email, Password)
- Textarea for longer content
- Number input and range slider
- Checkboxes with emoji labels

## 🛠️ Tech Stack

- **Framework**: Svelte 5
- **Build Tool**: Vite 7
- **Styling**: Pure CSS with CSS Variables
- **State Management**: Svelte stores
- **Animations**: Svelte transitions

## 📄 License

This project is open source and available under the MIT License.

