
# 📊 HubSpot Evaluation Dashboard

This project is a **Vue 3 + Nuxt 4** dashboard that visualizes evaluation data from **HubSpot Marketing Hub** using **Chart.js**. It includes a dynamic filtering panel and a clear, responsive UI built with **Tailwind CSS**.

## 🌟 Features

- ✅ Built with **Nuxt 4** (latest version, even though requirement was Nuxt 3)
- 📈 Interactive bar chart using **Chart.js**
- 🧩 Modular component structure
- 🎯 Filtering by company size
- 🧭 Navigation between Dashboard and About page
- 💅 Responsive and aesthetic UI using Tailwind CSS

---

## 📁 Project Structure

```
project-root/
│
├── components/           # FilterPanel, ChartComponent
├── composables/          # useHubSpotData composable
├── app/pages/
│        ├── index.vue         # Main Dashboard
│        └── about.vue         # Project documentation page
├── public/
│   └── data.json         # Source dataset (~15k entries)
├── nuxt.config.ts        # Nuxt project config
└── README.md             # You're reading it :)
```

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/misbahadam/hubspot-dashboard.git
   cd hubspot-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Access the app**
   - Visit `http://localhost:3000` in your browser.

---

## 📄 About This Project

This project was developed as part of a frontend take-home challenge. The requirements included:

- Visualizing **HubSpot Marketing Hub evaluation data** from a provided `data.json`.
- Implementing one of three survey questions (we chose **Q1**).
- Using **Vue 3**, **Nuxt 3**, **Tailwind CSS**, and **Chart.js**.
- Providing a clean `/about` page explaining the implementation.

### 🔎 Why Q1?
We selected **Q1** because:
- The data distribution was clean and reliable.
- The responses were easy to visualize.
- Given the limited time, Q1 offered the best balance between depth and clarity.

### ℹ️ Extra Notes

- Although the requirement was **Nuxt 3**, we used **Nuxt 4** for better module support and DX.
- We focused on modular components for maintainability and reusability.
- Minimal dependencies were used to keep the project lightweight.

### 🤖 Support Used

While building this project, we referred to:

- **ChatGPT** (AI assistant) – for brainstorming and guidance
- **StackOverflow** – common implementation clarifications
- **Reddit Dev Communities** – suggestions around Chart.js customization
- **Nuxt and Vue Docs** – official documentation

We did *not* use any AI to auto-generate major code chunks. The implementation was fully hands-on.

---

## 🧑‍💻 Author

**Misbah Adam**  
Fullstack Developer | Vue.js | Nuxt | Tailwind | .NET  
📫 misbahadam10@gmail.com


## Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
