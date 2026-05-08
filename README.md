# Sereniq

Sereniq is a modern wellness and mindfulness platform built to help users slow down, reflect, focus, and build healthier emotional habits.

The platform combines mood tracking, journaling, breathing exercises, focus sessions, wellness insights, streak systems, and personalized reflections into one calm digital experience.

---

## Features

### Wellness Dashboard
- Personalized dashboard experience
- Dynamic greetings
- Wellness recommendations
- Weekly reflections
- Wellness scoring system

### Mood Tracking
- Log moods daily
- Track emotional consistency
- Emotional insights and trends

### Journaling
- Daily reflective journaling
- Emotional clarity through writing
- Consistency tracking

### Breathing Exercises
- Guided breathing sessions
- Box breathing
- 4-7-8 breathing
- Deep calm sessions

### Focus Sessions
- Mindful productivity timer
- Focus streak tracking
- Session persistence

### Wellness Insights
- Dynamic behavioral observations
- Personalized recommendations
- Reflection system
- Wellness score calculation

### Authentication
- Email/password authentication
- Google OAuth login
- Secure session handling with Auth.js

### UI / UX
- Responsive design
- Light & dark mode
- Calm and minimal interface
- Smooth animations and transitions

---

## Tech Stack

### Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons

### Backend
- Next.js Server Actions
- Prisma ORM
- PostgreSQL (Neon)

### Authentication
- Auth.js
- Google OAuth
- Credentials authentication

### Deployment
- Vercel

---

## Screenshots

_Add screenshots here later._

---

## Environment Variables

Create a `.env` file locally:

```env
DATABASE_URL=

NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Generate Prisma client:

```bash
npx prisma generate
```

Push database schema:

```bash
npx prisma db push
```

Run development server:

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

---

## Project Structure

```txt
src/
 ├── app/
 ├── components/
 ├── lib/
 ├── actions/
 ├── auth.ts
 └── prisma/
```

---

## Future Improvements

- Mood heatmap calendar
- Wellness analytics expansion
- Mobile app version
- Habit systems
- Smart reminders
- Data export
- Community wellness features

---

## License

This project is for educational and portfolio purposes.
