import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const options = ({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

  ],

  secret: process.env.JWT_SECRET,

  database: {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,

  },

  debug: true,
});

export default (req, res) => NextAuth(req, res, options);
