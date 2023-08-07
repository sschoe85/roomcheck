import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];

const previewCredentials = {
  admin: {
    username: "admin",
    password: "adminpassword",
  },
  teacher: {
    username: "teacher",
    password: "teacherpassword",
  },
};

providers.push(
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (
        credentials.username === previewCredentials.admin.username &&
        credentials.password === previewCredentials.admin.password
      ) {
        return {
          id: "1",
          name: "Admin",
          email: "admin@example.com",
          role: "admin",
        };
      } else if (
        credentials.username === previewCredentials.teacher.username &&
        credentials.password ===
          (process.env.VERCEL_ENV === "preview"
            ? "teacherpassword"
            : process.env.TEACHER_PW)
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

if (process.env.VERCEL_ENV !== "preview") {
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
