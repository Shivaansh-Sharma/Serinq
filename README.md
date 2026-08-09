# Sereniq

Sereniq is a modern wellness and mindfulness platform built to help users slow down, reflect, focus, and build healthier emotional habits.

The platform combines mood tracking, journaling, breathing exercises, focus sessions, wellness insights, streak systems, and personalized reflections into one calm digital experience.

---

## Features

### Wellness Dashboard
- Personalized dashboard experience
- Dynamic greetings
- Wellness recommendations
- AI-powered weekly reflections
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
- Wellness score calculation
- AI-powered weekly reflections based on recent mood and journal activity
- Mood pattern analysis across the last 7 days
- Identification of positive developments, challenges, and meaningful changes
- Personalized reflection questions

### AI-Powered Weekly Reflection

Sereniq uses a language model to generate personalized weekly reflections from the user's recent mood and journal entries.

The reflection pipeline:

1. Fetches the user's mood and journal entries from the database
2. Filters the data to the most recent 7 days
3. Sends the relevant wellness context to the AI model through LangChain
4. Generates a structured reflection using a predefined schema
5. Displays the reflection interactively in the dashboard

The generated reflection includes:

- Weekly summary
- Mood pattern
- Positive developments
- Challenges
- Meaningful changes
- Personalized reflection questions

The system also handles cases where the user has:
- Only mood entries
- Only journal entries
- Both mood and journal entries
- No entries during the selected period

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

### AI / LLM
- LangChain.js
- Groq API
- OpenAI GPT-OSS 120B
- Zod structured output validation

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

GROQ_API_KEY=
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



## 👨‍💻 Authors

**Shivaansh Sharma**  - Frontend and User Authentication  
GitHub: https://github.com/Shivaansh-Sharma

**Harman Singh**  - Backend   
GitHub: https://github.com/bhangu1335

**Mehul Kala**  - AI Integration, Security and Database  
GitHub: https://github.com/mehulkala

**Feroz Ahmad**  - Research & File Structure   
GitHub: https://github.com/phroze846

---
## License

This project is for educational and portfolio purposes.
