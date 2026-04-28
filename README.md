# Ajit Agarwal & Associates Website

Premium, full-stack website for a chartered accountant firm built with Next.js App Router, Tailwind CSS, MongoDB (Mongoose), and NextAuth.

## Tech Stack

- Next.js App Router (TypeScript)
- Tailwind CSS
- MongoDB with Mongoose
- NextAuth credentials login for admin

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create an `.env` file (copy from `.env.example`) and update the values:

```bash
MONGODB_URI=your-mongodb-uri
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
ADMIN_EMAIL=admin@aaca.in
ADMIN_PASSWORD=your-strong-password
```

3. Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Admin Access

- Visit `/admin/login` and sign in with the admin credentials from the `.env` file.
- On first login, if no admin exists, the system will auto-create the admin user using `ADMIN_EMAIL` and `ADMIN_PASSWORD`.

## Admin Features

- Manage services, team, gallery, certificates, careers
- View contact inquiries and career applications

## Notes

- Gallery and certificate uploads are stored in `public/gallery` and `public/certificates`.
- For production deployments, consider swapping local uploads with object storage (e.g., S3).

## Build

```bash
npm run build
npm start
```
