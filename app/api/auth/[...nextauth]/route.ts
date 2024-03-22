import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDatabase from "@/libs/database";
import bcrypt from "bcryptjs";
import User from "@/models/user";
import { Account, Profile } from "@/types/types";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID ||
        (() => {
          throw new Error("GOOGLE_CLIENT_ID is not set");
        })(),
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ||
        (() => {
          throw new Error("GOOGLE_CLIENT_ID is not set");
        })(),
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        try {
          await connectToDatabase();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user as any;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
    newUser: "/account",
  },
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({
        email: session?.user?.email,
      }).populate({
        path: "wishlist",
        select: "id",
      });
      (session?.user as any).id = sessionUser._id.toString();
      (session?.user as any).wishlist = sessionUser.wishlist;

      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // Check if the user is signing in with Google
      if (account?.provider === "google") {
        // Check if the user already exists in the database
        await connectToDatabase();
        const existingUser = await User.findOne({ email: profile?.email });

        // If the user doesn't exist, create a new one
        if (!existingUser) {
          const newUser = new User({
            email: profile?.email,
            name: profile?.name,
            password: "",
            phoneNumber: "",
            address: "",
            orders: [],
            wishlist: [],
          });
          await newUser.save();
          return true; // Allow sign-in
        } else {
          return true; // Allow sign-in
        }
      }

      // Check if the user is signing in with credentials
      if (account?.provider === "credentials") {
        // The user is already authenticated by the `authorize` callback in CredentialsProvider
        return true; // Allow sign-in
      }

      // If the sign-in method is not supported, deny access
      return false;
    },
  },
};

export const getAuth = async () => await getServerSession(authOptions);

export const handler = NextAuth(authOptions) as never;

export { handler as GET, handler as POST };
