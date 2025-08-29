# GCash Clone - Mobile Wallet Application

![Vue.js](https://img.shields.io/badge/Vue.js-3.4.18-4FC08D?style=flat&logo=vue.js&logoColor=white)
![Quasar](https://img.shields.io/badge/Quasar-2.16.0-1976D2?style=flat&logo=quasar&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?style=flat&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red?style=flat)

A mobile-first GCash clone application built with Vue.js 3 and Quasar Framework, featuring a modern UI that replicates the core functionality and design of the popular Filipino mobile wallet app.

## 📱 Features

### Core Functionality
- **Digital Wallet Interface**: Clean, mobile-optimized wallet dashboard
- **Balance Management**: View and hide balance with toggle functionality
- **Quick Actions**: Send money, Load, Transfer, and Bills payment buttons
- **Service Integration**: Access to various GCash services like GInsure, Food Hub, Travel, etc.
- **Promotional Carousel**: Dynamic image carousel with promotional content
- **Multi-page Navigation**: Wallet, Borrow, and Grow sections

### UI/UX Features
- **Responsive Design**: Optimized for mobile devices
- **Material Design**: Using Quasar's Material Design components
- **Progressive Web App Ready**: PWA configuration included
- **Modern Navigation**: Bottom tab navigation with floating QR code button
- **Custom Styling**: GCash-inspired color scheme and branding

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3.4.18
- **UI Framework**: Quasar Framework 2.16.0
- **Build Tool**: Vite (via Quasar CLI)
- **Router**: Vue Router 4.0
- **Testing**: Vitest 3.2.4
- **Package Manager**: npm/yarn

## 📂 Project Structure

```
quasar-gcashclone/
├── public/                 # Static assets
│   └── caraousel/         # Carousel images
├── src/
│   ├── components/        # Reusable Vue components
│   │   └── EssentialLink.vue
│   ├── layouts/           # App layouts
│   │   └── MainLayout.vue # Main app layout with header/footer
│   ├── pages/             # Page components
│   │   ├── PageWallet.vue # Main wallet dashboard
│   │   ├── PageBorrow.vue # Borrow/Loan services
│   │   ├── PageGrow.vue   # Investment services
│   │   ├── IndexPage.vue  # Landing page
│   │   └── ErrorNotFound.vue
│   ├── router/            # Vue Router configuration
│   │   ├── index.js
│   │   └── routes.js      # Route definitions
│   ├── App.vue           # Root component
│   └── *.test.js         # Test files
├── quasar.config.js      # Quasar configuration
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v20+ recommended)
- npm (v6.13.4+) or yarn (v1.21.1+)
- Quasar CLI (optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/apollo-johnpaul/apollo-second-task.git
   cd quasar-gcashclone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Quasar CLI globally (optional)**
   ```bash
   npm install -g @quasar/cli
   # or
   yarn global add @quasar/cli
   ```

### Development

**Start the development server**
```bash
npm run dev
# or
yarn dev
# or if you have Quasar CLI installed
quasar dev
```

The app will be available at `http://localhost:9000` (or another port if 9000 is busy).

### Building for Production

```bash
npm run build
# or
yarn build
# or
quasar build
```

Build files will be generated in the `dist/` directory.

### Testing

```bash
npm test
# or
yarn test
```

## 📱 Application Pages

### 1. Wallet Page (`PageWallet.vue`)
The main dashboard featuring:
- **Balance Display**: Shows current wallet balance with hide/show toggle
- **Cash In Button**: Quick access to add funds
- **Quick Actions Grid**: 
  - Send Money
  - Load/Top-up
  - Bank Transfer
  - Bills Payment
- **Service Tabs**: Access to GCash services (GInsure, Food Hub, Travel, etc.)
- **Promotional Carousel**: Dynamic promotional content

### 2. Borrow Page (`PageBorrow.vue`)
Loan and borrowing services (currently placeholder)

### 3. Grow Page (`PageGrow.vue`)
Investment and savings services (currently placeholder)

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`#1976d2` to `#42a5f5`)
- **Secondary**: Material Design secondary colors
- **Background**: Light gray (`#e0e0e0`) for service sections
- **Text**: Primary dark text with white on colored backgrounds

### Typography
- **Primary Font**: Roboto (included via Quasar)
- **Display Font**: Poppins, Karla (for branding elements)

### Components
- **Cards**: Rounded corners (16px border-radius)
- **Buttons**: Pill-shaped for primary actions (999px border-radius)
- **Icons**: Material Icons set

## 🔧 Configuration

### Quasar Configuration (`quasar.config.js`)
Key configurations:
- **Build Target**: Modern browsers (ES2022, Firefox 115+, Chrome 115+, Safari 14+)
- **Router Mode**: Hash routing for easier deployment
- **PWA**: Configured for Progressive Web App features
- **Icons**: Material Icons and Roboto font included
- **Dev Server**: Auto-opens browser on start

## 🧪 Testing

The project uses Vitest for testing:
- **Unit Tests**: Component and function testing
- **Integration Tests**: Router and workflow testing
- **Test Files**: `*.test.js` files throughout the project

### Running Tests
```bash
npm test        # Run all tests
npm run test:watch  # Watch mode (if configured)
```


## 👨‍💻 Author

**johnpaul-apollo**

## 🔮 Future Enhancements

- [ ] Complete Borrow page functionality
- [ ] Implement Grow page with investment options
- [ ] Add authentication system
- [ ] Integrate with backend APIs
- [ ] Add transaction history
- [ ] Implement push notifications
- [ ] Add biometric authentication
- [ ] Create admin dashboard
- [ ] Add multi-language support
- [ ] Implement offline functionality

## 📚 Resources

- [Vue.js Documentation](https://vuejs.org/)
- [Quasar Framework Documentation](https://quasar.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Vitest Documentation](https://vitest.dev/)

