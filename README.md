# Mentoro - AI Career Coach 🚀

Mentoro is a powerful AI-powered career coaching platform that helps professionals navigate their career journey with smart tools and personalized guidance.

## Features

- **AI-Powered Career Guidance**
  - Personalized career advice and insights
  - Industry-specific recommendations
  - Real-time market analysis

- **Smart Resume Builder**
  - ATS-optimized resume creation
  - AI-assisted content generation
  - Professional formatting

- **AI Cover Letter Generator**
  - Customizable cover letter creation
  - Role-specific content
  - Easy editing and management

- **Interview Preparation**
  - AI-powered mock interviews
  - Role-specific practice questions
  - Real-time feedback and scoring
  - Performance analytics and tracking

- **Career Dashboard**
  - Industry trends visualization
  - Salary insights
  - Skill gap analysis
  - Progress tracking

## Tech Stack

- **Frontend Framework**: Next.js (App Router)
- **UI Components**: 
  - Radix UI
  - Tailwind CSS
  - Shadcn/ui Components
- **Authentication**: Clerk
- **Database**: Prisma ORM
- **Charts**: Recharts
- **Form Handling**: 
  - React Hook Form
  - Zod Validation
- **Markdown**: MDEditor
- **Date Handling**: date-fns
- **Notifications**: Sonner
- **Icons**: Lucide Icons

## Project Structure

```
Mentoro/
├── actions/           # Server actions for data operations
├── app/              # Next.js app router pages and layouts
│   ├── (auth)/      # Authentication related pages
│   └── (main)/      # Main application pages
├── components/       # Reusable UI components
│   └── ui/          # Base UI components
├── data/            # Static data and content
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
└── prisma/          # Database schema and migrations
```

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/mentoro.git
cd mentoro
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add the following:

```env
# Database
DATABASE_URL="your-database-url"

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```

4. **Run database migrations**

```bash
npx prisma migrate dev
```

5. **Start the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Security

- End-to-end encryption for data protection
- Secure authentication through Clerk
- Industry-standard security protocols
- No third-party data sharing

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Authentication](https://clerk.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs)

## Author

Made with 💗 by Abhishek Patidar

## License

[MIT](https://choosealicense.com/licenses/mit/)
