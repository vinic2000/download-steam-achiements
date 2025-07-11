# 🖼️ Download Steam Achievements (Image Extractor)

This is a command-line application that automatically extracts **achievement images** from public Steam profile pages. It’s ideal for users who want to download and store achievement icons locally for visual archives, dashboards, or personal collections.

---

## ✨ Features

- 🔍 Accesses public Steam achievement pages
- 🖼️ Extracts achievement icons (`.achieveRow` elements)
- 📁 Automatically saves images into local folders
- 📦 Can be bundled as a `.exe` file using `pkg`
- ⚙️ Built https native node module and Cheerio for lightweight scraping
- 🧑‍💻 Runs directly in the command prompt

---

## ⚙️ Technologies Used

| Tech             | Description                     |
|------------------|---------------------------------|
| Node.js          | JavaScript runtime environment  |
| TypeScript       | Optional for type safety        |
| Cheerio          | Server-side HTML parser (jQuery style) |
| pkg              | For packaging the app as `.exe` |

---

## 📌 Notes

- This tool **only extracts achievement images** from the page.
- It does **not** fetch descriptions, titles, or achievement status.

---

## 🧑‍💻 How to Use (Command Line)

If you're running the raw Node.js project:
```bash
npm index.js
yarn start
pnpm  index.js