# Event Management & Registration System - React Frontend

Responsive, modern Single Page Application (SPA) built with **React 18**, **Bootstrap 5**, **React Router DOM 6**, **Axios**, and **HTML5 QR Code Scanner**.

## Tech Stack
- **Framework**: React 18.2.0
- **UI Framework**: Bootstrap 5.3.3 + Bootstrap Icons 1.11.3
- **Routing**: React Router DOM 6.22.3
- **HTTP Client**: Axios 1.6.8 (with JWT interceptors)
- **QR Code Scanner**: html5-qrcode 2.3.8 (Camera scanner + manual verification)
- **Design System**: Navy & Royal Blue professional responsive theme

## Prerequisites
- **Node.js**: v18 or v20+ (`node -v`)
- **NPM**: v9 or v10+ (`npm -v`)
- **Backend API**: Running at `http://localhost:8080` (from `event-backend`)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

The application will run at **http://localhost:3000** (or port 3001 if port 3000 is occupied).

## Pages & Routing
- `/` - Landing Home page with hero, stats, and search
- `/events` - Browse, search, and filter upcoming events
- `/events/:id` - Detailed event overview with one-click registration
- `/login` - Participant login
- `/register` - Participant account creation
- `/my-registrations` - Participant registration history & status
- `/my-registrations/:id` - Registration pass with downloadable QR code
- `/admin/login` - Secure administrator portal login
- `/admin/dashboard` - Admin analytics dashboard (metrics & quick links)
- `/admin/events` - Event management (Create, Edit, Delete events)
- `/admin/registrations` - View and manage participant bookings
- `/admin/participants` - Participant roster with search & filter
- `/admin/attendance` - Live camera QR barcode scanner & check-in
- `/admin/reports` - Comprehensive event attendance analytics

## Test Credentials
- **Admin**: `admin@eventmanagement.com` / `Admin@123`
- **User**: `alice.johnson@example.com` / `Password@123`
