export type FoodApiUpload = {
  id: number;
  name: string;
  originalName: string;
  mimetype: string;
  size: string;
  createdAt: Date;
  updatedAt: Date;
  url: string;
};

export type FoodApiProduct = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  enabled: boolean;
  upload: FoodApiUpload | null;
  slug: string;
  price: string | null;
  description: string | null;
  businessId: number | string;
};

export type FoodApiCategory = {
  enabled: boolean;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  businessId: number;
  product: FoodApiProduct[];
};

export type FoodApiOrder = {
  id: number;
  checkId: string;
  raw: {
    whatsapp: string;
  };
  itemsOrder: {
    qty: number;
    product: {
      name: string;
      description: string | null;
      price: number | null;
    };
  }[];
  user: {
    name: string;
    whatsapp: string;
  };
  business: {
    name: string;
    whatsapp: string;
  };
  cityAddress: string;
  address2?: string;
  homeTypeAddress: string;
  stateAddress: string;
  numberAddress: string;
  streetAddress: string;
  createdAt: Date;
};

export type FoodApiBusiness = {
  upload: {
    url: string;
  } | null;
  whatsapp: string | null;
  status: 'open' | 'close';
  name: string;
};
