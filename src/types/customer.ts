/**
 * KRAK & CO. — Customer & Address TypeScript Contracts
 */

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  addressType: "Home" | "Office" | "Other";
  isDefault: boolean;
}

export interface CustomerProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  defaultAddressId?: string;
  createdAt: string;
}
