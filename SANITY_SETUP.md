# Sanity CMS Setup for ManaCare NRI Platform

This guide explains how to connect Sanity CMS to edit your website's content dynamically (pricing, services, copy, and images).

---

## 1. Create a Sanity Project

1. Install the Sanity CLI (if you haven't already):
   ```bash
   npm install -g @sanity/cli
   ```
2. Initialize a new Sanity project inside your workspace directory:
   ```bash
   npm create sanity@latest
   ```
   * Choose **Create new project**.
   * Choose the **Clean project** or **Blog** template.
   * Choose to deploy with your preferred configuration (TypeScript is recommended).

---

## 2. Deploy Schema Templates

We have provided schema templates for your models in the `sanity/schemas/` folder. Copy these schemas into your Sanity Studio's schema directory (usually `schemas/` or `schemaTypes/` inside your sanity studio folder):
* `services.ts`
* `plans.ts`
* `locations.ts`
* `servostay.ts`

Import and add them to your main `index.ts` / `schema.ts` file in your studio configuration.

---

## 3. Configure Environment Variables

Create or update your `.env.local` file in the root of your Next.js project and add your Sanity project details:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
```

You can retrieve your `PROJECT_ID` by running `sanity project info` or by visiting [manage.sanity.io](https://manage.sanity.io/).

---

## 4. How the Code Connects

We have set up a query client in `lib/sanity.ts` that automatically checks for the environment variables:
* **Fallback Mode (Default)**: If no Project ID is supplied, the website automatically loads the local static files. It will not crash and will remain fully functional.
* **Live Mode**: Once the variables are set up and content is published, it queries the live Sanity dataset using GROQ query.
