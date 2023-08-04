import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];

providers.push(
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" },
    },
    // and adding a fake authorization with static username and password:
    async authorize(credentials) {
      if (
        credentials.username === "teacher" &&
        credentials.password === process.env.TEACHER_PW
      ) {
        return {
          id: "2",
          name: "Teacher",
          email: "teacher@example.com",
          role: "teacher",
        };
      } else {
        return null;
      }
    },
  })
);

if (process.env.VERCEL_ENV === "preview") {
  providers.push(
    // Create a credentials provider with dummy data, describing input fields:
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // and adding a fake authorization with static username and password:
      async authorize(credentials) {
        if (
          credentials.username === "admin" &&
          credentials.password === "adminpassword"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "ekaterinabruch@gmail.com",
          };
        } else {
          return null;
        }
      },
    })
  );
} else {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  );
}

function getRoleOfUser(email) {
  if (email === "ekaterinabruch@gmail.com") {
    return "admin";
  } else if (email === "teacher@example.com") {
    return "teacher";
  }
  return "viewer";
}

export const authOptions = {
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = getRoleOfUser(user.email);
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
};
export default NextAuth(authOptions);
