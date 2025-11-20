# PromoSpark

PromoSpark is a visually-driven web application designed to empower users to create stunning, illustrative, and highly engaging promotional web pages with ease. The application provides a set of beautifully designed, pre-built components—including hero sections, feature showcases, pricing tables, and call-to-action blocks—that can be customized to fit any brand. The core philosophy is to merge artistic, hand-drawn aesthetics with modern, clean UI/UX principles, enabling the creation of promotions that are not only effective but also a delight to look at.

[cloudflarebutton]

## ✨ Key Features

*   **Beautifully Designed Components**: A rich library of pre-built sections like Heroes, Feature Grids, Pricing Tables, and CTAs.
*   **Illustrative & Artistic Aesthetic**: A unique design language combining hand-drawn SVG illustrations with a clean, modern UI.
*   **Effortless Customization**: Easily adapt components to match your brand's look and feel.
*   **Fully Responsive**: Flawless layouts that look stunning on all devices, from mobile phones to large desktops.
*   **Interactive & Engaging**: Smooth animations and micro-interactions powered by Framer Motion to delight users.
*   **Developer-Friendly**: Built with a modern stack for a great development experience.

## 🚀 Technology Stack

*   **Framework**: React (Vite)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **UI Components**: shadcn/ui
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Backend**: Cloudflare Workers with Hono

## 🛠️ Getting Started

Follow these instructions to get a local copy of the project up and running for development purposes.

### Prerequisites

Make sure you have the following installed on your machine:
*   [Bun](https://bun.sh/)
*   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/promospark.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd promospark
    ```
3.  **Install dependencies:**
    ```bash
    bun install
    ```

## 🖥️ Development

To start the local development server, run the following command:

```bash
bun dev
```

This will start the Vite development server for the frontend and the Wrangler development server for the backend Cloudflare Worker. The application will be accessible at `http://localhost:3000`.

*   **Frontend**: All frontend code is located in the `src/` directory. You can modify pages, components, and styles here.
*   **Backend**: The Cloudflare Worker logic is in the `worker/` directory. API routes are defined in `worker/user-routes.ts`.
*   **Shared Types**: Shared TypeScript types between the frontend and backend are located in `shared/types.ts`.

## ☁️ Deployment

This project is configured for seamless deployment to Cloudflare Pages and Workers.

To deploy your application, simply run the build and deploy script:

```bash
bun run deploy
```

This command will build the React application and deploy it along with the serverless functions to your Cloudflare account.

Alternatively, you can deploy directly from your GitHub repository with a single click.

[cloudflarebutton]