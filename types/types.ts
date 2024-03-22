export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductList = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type Account = {
  provider: string; // The name of the authentication provider (e.g., 'google', 'facebook')
  type: string; // The account type (e.g., 'oauth', 'credentials')
  providerAccountId: string; // The unique identifier for the account from the provider
  refresh_token?: string; // The refresh token (if available)
  access_token?: string; // The access token (if available)
  expires_at?: number; // The expiration timestamp for the access token (if available)
  token_type?: string; // The token type (if available)
  scope?: string; // The scope of access granted by the user (if available)
  id_token?: string; // The ID token (if available)
  session_state?: string; // The session state (if available)
};

export type Profile = {
  // These properties are guaranteed to be present
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;

  // These properties may or may not be present, depending on the provider
  [key: string]: unknown;
};

export type WishlistItem = {
  _id: string;
  id: number;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  orders: any[]; // Assuming orders can be of any type
  wishlist: WishlistItem[];
  createdAt: string; // Assuming createdAt and updatedAt are strings representing dates
  updatedAt: string;
  __v: number;
};
