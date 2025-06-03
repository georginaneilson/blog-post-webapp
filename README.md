# 📝 Blog Post WebApp

## Overview

This is a React-based application designed to perform basic **CRUD operations**
(Create, Read, Update, Delete) on blog posts using the
[JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts). The app is
developed in **TypeScript**.

---

## 🌐 Features

- ✅ Fetch and display posts from the JSONPlaceholder API
- 🔍 Search posts by title with filtering
- 🗑️ Delete posts from the list view

---

## 📸 Wireframes

### Mobile View

![Mobile View](assets/mobile_view.png?raw=true)

### Desktop View

![Desktop View](assets/pc_view.png?raw=true)

---

## 🚀 Getting Started

This project is powered by [Vite](https://vitejs.dev/) and includes the
following tech stack:

- React + TypeScript
- Vite
- Vitest for testing
- Playwright fo E2E testing
- ESLint and Prettier for code quality
- Tailwind CSS

---

## 🔧 Prerequisites

- Node.js version **20+**
- Yarn package manager

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/twinkltech/twinkl-react-tech-test.git
cd twinkl-react-tech-test
```

## 📦 Testing Strategy

The application uses Vitest and @testing-library/react to for unit and
integration test coverage, and Playwright for E2E.

- ✅ API data fetching
- ✅ Rendering posts
- ✅ Searching functionality
- ✅ Delete behavior
- 🔄 Mocked API responses to isolate tests from network

To run vitest tests

```
yarn test
```

playwright

```
yarn test:e2e
```

## Notes

The app interacts with JSONPlaceholder — a free mock API. Deletion is simulated
and does not persist on the server.

## Next steps

To expand this app in a real-world scenario, the following should be considered:

- Add create/update functionality
- Add loading state/spinner for delete post functionality
- User authentication
- Use React Query or SWR for data fetching
- Implement pagination or infinite scroll
- Harden tests by adding MSW or similar to simulate api responses
- Harden type definitions by adding stricter eslint config
