# Next.js Fullstack Learning Project (Manual Setup)

This project is part of my journey through the Scrimba “Become a Fullstack Developer from Scratch” course, specifically the final section focused on Next.js.

Note: By following the tutorial, constant visit to the Next.js docs for review and comparison are often done. By following the docs and the tutorials almost the same synchronization at first but on the later part you have to find the topic.

## 🎯 Project Setup V1

Create Project from scratch

### Installation (manual installation)

```bash
npm i next@latest react@latest react-dom@latest
npm run dev
```

Run "npm run dev"; this will also add the scripts to your package.json, or copy the scripts in the docs. Once scripts was copied to the terminal, you can also rund "next dev" which run the same as the the "npm run dev" do.

Note: for the latest or quick start, check Next JS documentations.

## 🎯 Project Setup V2

Create Project from scratch

### Installation (manual installation)

```bash
npx create-next-app@latest .
```

Using the (.) will install dependencies in the current directory. On installation, you'll see the following prompts depending on the next current version: ( the prompt will be different from the video because of my current version)

Would you like to use the recommended Next.js defaults? No, customize settings
Would you like to use TypeScript? Yes
Which linter would you like to use? ESLint
Would you like to use React Compiler? No
Would you like to use Tailwind CSS? Yes
Would you like your code inside a `src/` directory? No
Would you like to use App Router? Yes
Would you like to customize the import alias (`@/*` by default)? No
Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code? No

```bash
npm run dev
```
Run "npm run dev"; this will also add the scripts to your package.json, or copy the scripts in the docs. Once scripts was copied to the terminal, you can also rund "next dev" which run the same as the the "npm run dev" do.

Note: for the latest or quick start, check Next JS documentations.

### Topics

- Manual Installation
- CLI Installation
- Fonts and Image Optimization
- File-based and Nested Routing
- Layouts and Links
- Models and Async Function > here now at 20:49:7
- Dynamic Routes
- Client and Server Components

### Creating New Route

In creating new route, you have to create a directory folder where you will put the tsx files.

## 🛠 Tech Stack

- Framework: Next.js
- Language: JavaScript / TypeScript
- Library: React
- Runtime: Node.js
- Package Manager: npm

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

## 📚 Learning Source

- Scrimba – Become a Fullstack Developer from Scratch (YouTube)
Ref: https://www.youtube.com/watch?v=LzMnsfqjzkA&t=155998s
at: 43:13:13

## 📄 License

This project is for educational and learning purposes.

# Next JS Default Readme

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
