# Project Structure

nextjs-project/
├── locales/ 				 					# Directory containing translation files for internationalization
│	├── [en]/									# Directory for English language translations
│   │	├── common.json/ 						# JSON file containing common English translations
│   │	├── ...									# Additional JSON files for English translations if needed
│   └── ...					 					# Additional JSON files for English translations if needed
├── public/                  					# Static assets (images, fonts, etc.)
├── src/                     					# Source code
│   ├── components/          					# Reusable UI components
│   ├── app/               	 					# Next.js pages
│   │	├── [locale]/
│   │	│	├── page.tsx            			# Home page (route: /[locale]/)
│   │	│	├── page.module.css            		# CSS module for Home page (route: /[locale]/)
│   │	│	├── globals.css            			# CSS module for Global
│   │	│	├── layout.tsx            			# Layout for page
│   │	│	├── login/							# Login subdirectory
│   │	│	│	├── _components					# Component for Login page (route: /[locale]/login)
│   │	│	│	├── page.tsx					# Login page (route: /[locale]/login)
│   │	│	│	├── page.module.css				# CSS module for Login page
│   │	│	│	└── ...
│   │	│	├── products/						# Products subdirectory
│   │	│	│	├── _components					# Component for Products page (route: /[locale]/products)
│   │	│	│	├── page.tsx					# Products page (route: /[locale]/products)
│   │	│	│	├── page.module.css				# CSS module for Products page
│   │	│	│	├── [id]						# Dynamic product pages (route: /[locale]/products/[id])
│   │	│	│	│	├── _components				# Component for Dynamic product page (route: /[locale]/products/:id)
│   │	│	│	│	├── page.tsx				# Dynamic product page (route: /[locale]/products/:id)
│   │	│	│	│	├── page.module.css			# CSS module for the Dynamic product page
│   │	│	│	│	├── edit					# Dynamic product edit pages (route: /[locale]/products/[id]/edit)
│   │	│	│	│	│	├── _components			# Component for Dynamic product page (route: /[locale]/products/:id/edit)
│   │	│	│	│	│	├── page.tsx			# Dynamic product edit page (route: /[locale]/products/:id/edit)
│   │	│	│	│	│	├── page.module.css		# CSS module for the Dynamic product edit page
│   │	│	│	│	│	└── ...
│   │	│	│	│	├── create					# Dynamic product create pages (route: /[locale]/products/[id]/create)
│   │	│	│	│	│	└── ...
│   │	│	│	│	└── ...
│   │	│	│	└── ...
│   │	│	└── ...
│   │	├── layouts/             				# Layout components
│   │	├── styles/              				# Global styles (CSS, SCSS, or CSS-in-JS)
│   │	├── utils/               				# Utility functions, helpers
│   │	├── functions/           				# API calls, data fetching functions
│   │	├── hooks/               				# Custom hooks
│   │	├── constants/           				# Constant values (config)
│   │	├── enums/           	 				# Constant values (enums)
│   │	├── types/               				# Data models or types
│   │	├── stores/              				# React Contexts
│   │	├── lib/                 				# Utility libraries, third-party integrations
│   │	├── tests/               				# Test files (unit, integration, e2e)
│   │	└── ...
│   └── ...
├── .gitignore               # Git ignore file
├── .babelrc                 # Babel configuration !!!Todo: pending...
├── package.json             # Node.js dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
├── README.md                # Project documentation
├── i18nConfig.ts            # I18n configuration
├── .prettierrc.json         # Prettier configuration
├── .gitlab-ci.yml			 # CI configuration
├──	.eslintrc.json			 # ESlint configuration
├── .env.example             # Local environment variables/Example
└── ...

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

## Run docker
``` To build the Docker containers, execute the following command:
docker-compose build
``` To start the Docker containers in detached mode (background), execute the following command:
docker-compose up -d

## Rule:

- Before pushing code or creating a merge request, please ensure the following checks have been performed. In case of errors during these processes, they must be addressed, even if they are warnings.

# TypeScript and Code Quality Checks

``` Linting: Ensure code style and best practices are adhered to by executing:
npm run lint:check

``` Code Formatting: Verify consistent code formatting with:
npm run format:check

``` TypeScript Type Checking: Validate type correctness with:
npm run ts

# Building the Application

``` Building the Application: Generate production-ready build artifacts by running:
npm run build

!!! These commands ensure code quality, adherence to standards, and the generation of a production-ready build.