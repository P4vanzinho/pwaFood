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
