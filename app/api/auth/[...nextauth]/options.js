import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/models/User";


const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        console.log("Google Profile:: ", profile);

        let userRole = "Google User";

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your own logic here to fetch the user from your database
        // This is just a placeholder example
        console.log(credentials)
        const user = await User.findOne({ email: credentials.email });
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role || "User",
          };
        }
        return null;

        // For demonstration purposes, we'll use a hardcoded user
        // if (credentials.email === "user@example.com" && credentials.password === "password") {
        //   return {
        //     id: "1",
        //     name: "Test User",
        //     email: "user@example.com",
        //     role: "User",
        //   };
        // }
        // return null;
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },

  },
  pages: {
    signIn: '/login',
  },
};

export default options;

