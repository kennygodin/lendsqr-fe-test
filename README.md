# Lendsqr Frontend Test

A modern React application built for the Lendsqr Frontend Assessment. This project demonstrates a complete admin dashboard for managing users, loans, and various financial services with a focus on clean architecture, type safety, and comprehensive testing.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![Vitest](https://img.shields.io/badge/Vitest-4.0.13-green)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Testing](#-testing)
- [Architecture Decisions](#-architecture-decisions)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Authentication
- ✅ Secure login page with email/password validation
- ✅ Form validation using React Hook Form + Zod
- ✅ Password visibility toggle
- ✅ Responsive design for all screen sizes

### User Management
- ✅ Comprehensive user listing with data tables
- ✅ Advanced filtering and search capabilities
- ✅ User detail pages with multiple information tabs
- ✅ User statistics dashboard with cards
- ✅ Blacklist/Activate user functionality

### Dashboard Features
- ✅ **Users Page**: View and manage all users with statistics
- ✅ **User Details**: Deep-dive into individual user information
  - General Details
  - Documents
  - Bank Details
  - Loans
  - Savings
  - App and System information
- ✅ **Multiple Management Sections**:
  - Guarantors
  - Loans & Loan Requests
  - Savings & Saving Products
  - Decision Models
  - Organizations
  - Transactions
  - Services & Service Accounts
  - Settlements & Reports
  - And more...

### UI/UX
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Custom SCSS styling with mixins
- ✅ Professional typography using AvenirNext LT Pro and Work Sans
- ✅ Intuitive navigation with React Router
- ✅ Loading states and error handling

### Testing
- ✅ Unit tests for components and forms
- ✅ Schema validation tests
- ✅ User interaction testing
- ✅ 100% coverage for critical paths

## 🚀 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19.2.0 with TypeScript |
| **Build Tool** | Vite 7.2.4 |
| **Package Manager** | Bun |
| **Styling** | SCSS with custom mixins |
| **Form Management** | React Hook Form 7.66 + Zod 4.1 |
| **Routing** | React Router 7.9 |
| **State Management** | TanStack Query 5.90 |
| **Data Tables** | TanStack Table 8.21 |
| **Testing** | Vitest 4.0 + React Testing Library 16.3 |
| **Linting** | ESLint 9.39 |

## 📂 Project Structure

```
lendsqr-fe-test/
├── public/
│   ├── icons/           # SVG icons
│   └── images/          # Logo and images
├── src/
│   ├── assets/          # Fonts and static assets
│   ├── components/      # Reusable UI components
│   │   ├── data-table/  # Table component
│   │   └── layouts/     # Layout wrappers
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   │   ├── login/       # Authentication
│   │   ├── users/       # User listing
│   │   ├── user-details/# User detail views
│   │   ├── loans/       # Loan management
│   │   ├── savings/     # Savings management
│   │   └── ...          # Other feature pages
│   ├── schemas/         # Zod validation schemas
│   ├── services/        # API services & mocks
│   │   └── mock/        # Mock data from json-generator.com
│   ├── styles/          # Global styles and mixins
│   │   ├── globals.scss
│   │   └── _mixins.scss
│   ├── test/            # Test configuration
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── .gitignore
├── bun.lock
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## 🏁 Getting Started

### Prerequisites

- **Bun** (recommended) or Node.js 18+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kennygodin/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Login Credentials

Since this uses mock data, you can log in with any email and password that passes validation:
- **Email**: Any valid email format (e.g., `test@example.com`)
- **Password**: Minimum 6 characters (e.g., `password123`)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server with hot reload |
| `bun build` | Build for production |
| `bun preview` | Preview production build locally |
| `npm test` | Run all tests |
| `npm run test --watch` | Run tests in watch mode |
| `npm run test:ui` | Open Vitest UI for interactive testing |
| `npm run test:coverage` | Generate test coverage report |
| `bun lint` | Run ESLint for code quality checks |

## 🧪 Testing

This project maintains high test coverage using **Vitest** and **React Testing Library**.

### Test Structure

```
src/
├── pages/
│   ├── login/
│   │   ├── login.test.tsx
│   │   └── _components/
│   │       └── LoginForm.test.tsx
├── schemas/
│   └── auth.schema.test.ts
└── test/
    └── setup.ts
```

### Running Tests

```bash
# Run all tests
bun test

# Watch mode (recommended during development)
bun test --watch

# With UI (visual test runner)
bun test:ui

# Generate coverage report
bun test:coverage
```

### Test Coverage

The test suite includes:

#### ✅ **Schema Validation Tests**
- Email format validation
- Password length requirements
- Error message accuracy
- Valid input acceptance

#### ✅ **Component Tests**
- Form field rendering
- Password visibility toggle
- User interactions (typing, clicking)
- Form submission handling
- Navigation after successful login

#### ✅ **Integration Tests**
- Router integration
- Page rendering
- Mock data handling
- Error state management

### Test Configuration

Tests are configured with:
- **jsdom** environment for DOM testing
- **@testing-library/react** for component testing
- **@testing-library/user-event** for user interaction simulation
- **@testing-library/jest-dom** for additional matchers
- Global test utilities via `setup.ts`

## 🏗️ Architecture Decisions

### Why Bun?
Bun provides faster installation and execution times compared to npm/yarn, improving developer experience.

### Why Vite?
- Lightning-fast HMR (Hot Module Replacement)
- Optimized build times
- Native ESM support
- Better developer experience than Create React App

### Why React Hook Form + Zod?
- **React Hook Form**: Minimal re-renders, better performance
- **Zod**: Type-safe schema validation with excellent TypeScript integration
- Together they provide robust form handling with minimal boilerplate

### Why TanStack Query?
- Powerful data fetching and caching
- Automatic background refetching
- Optimistic updates support
- Built-in loading and error states

### Why SCSS over CSS-in-JS?
- Better performance (no runtime overhead)
- Familiar syntax for developers
- Powerful mixins for responsive design
- Easier maintenance of global styles

### Mock Data Strategy
User data is generated using **json-generator.com** to simulate realistic API responses with proper data structures and relationships.

## 🎨 Responsive Design

The application uses custom SCSS mixins for breakpoint management:

```scss
@include sm  // < 640px  (Mobile)
@include md  // < 768px  (Tablet)
@include lg  // < 1024px (Small Desktop)
```

All components are fully responsive and tested across different screen sizes.

## 🔐 Type Safety

The project leverages TypeScript for:
- Strong typing across components
- Interface definitions for data structures
- Type-safe routing
- Zod schema validation with inferred types

## 📝 Code Quality

- **ESLint**: Enforces code quality and consistency
- **TypeScript**: Provides type safety
- **Prettier** compatible: Works with standard formatting tools
- **Vitest**: Ensures code reliability through testing

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@kennygodin](https://github.com/kennygodin)
- Email: kenechukwuokoh30@gmail.com

## 🙏 Acknowledgments

- Lendsqr for the design specifications
- json-generator.com for mock data generation
- The React and Vite communities for excellent documentation

---

**Built with ❤️ for the Lendsqr Frontend Assessment**