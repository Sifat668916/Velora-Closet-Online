# VELOURA CLOSET 

**Veloura Closet** is a high-fashion, strategic e-commerce platform designed for the modern fashion architect. It blends a "Dark Mode" luxury aesthetic with advanced web protocols to deliver a curated, premium shopping experience. Built with a focus on typography, motion, and architectural honesty, it defines the digital transition between era and innovation.

---

## 🏛️ Strategic Architecture

The application is structured as a full-featured Single Page Application (SPA) with a dedicated emphasis on performance and smooth state transitions.

### Key Features
- **Master Archives**: A dynamic product gallery with multi-criteria filtering (category, price range) and real-time search.
- **Identity Vault**: A secure authentication system where users manage their "Strategic Profile" and procurement history.
- **Logistics Pipeline**: Integrated shopping cart with persistent state and a comprehensive multi-method checkout supporting local payment protocols (bKash, Nagad, Rocket) and Cash on Delivery.
- **Strategic Oversight**: A minimalist Admin Dashboard providing real-time intelligence on revenue, user growth, and transaction statuses.
- **Motion-Driven UI**: Deep integration of `motion` for fluid route transitions, staggered loading sequences, and interactive hover feedback.

---

## 🛠️ Technical Stack

- **Framework**: [React 18](https://reactjs.org/) (Functional Components & Hooks)
- **Build Tool**: [Vite](https://vitejs.dev/) for ultra-fast HMR and build optimization.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) using a custom "Dark Strategic" theme.
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion) for physics-based UI interaction.
- **Iconography**: [Lucide React](https://lucide.dev/) for consistent, minimalist visual indicators.
- **Routing**: [React Router v6](https://reactrouter.com/) for complex navigational logic.
- **State Management**: [React Context API](https://reactjs.org/docs/context.html) for Cart and Authentication persistence.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. **Clone the repository** (or download the source):
   ```bash
   git clone <repository-url>
   cd veloura-closet
   ```

2. **Install Asset Dependencies**:
   ```bash
   npm install
   ```

3. **Initiate Development Environment**:
   ```bash
   npm run dev
   ```

4. **Synchronize Production Build**:
   ```bash
   npm run build
   ```

---

## 🎨 Design Philosophy

Veloura Closet follows a **Product-First Design** approach:
- **Typography Pairing**: Distinctive serif headings for "Editorial Elegance" paired with mono-spaced accents for "Technical Precision."
- **Glassmorphism**: Heavy use of `backdrop-blur` and translucent borders to create depth without clutter.
- **Strategic Spacing**: Intentional rhythm in padding and margins to reinforce a sense of luxury and breathing room.

---

## 📂 Directory Structure

```text
src/
├── components/     # Reusable UI modules (Hero, Navbar, Footer, etc.)
├── context/        # Global state protocols (Auth, Cart)
├── pages/          # Primary route views (Shop, Profile, Checkout, Admin)
├── constants.ts    # Centralized archive data and configuration
├── types.ts        # Global TypeScript definitions
└── App.tsx         # Main application architecture
```

---

## ⚖️ License

SPDX-License-Identifier: **Apache-2.0**  
Defining premium fashion since 2024.
