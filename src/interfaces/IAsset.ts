export interface IAsset {
  id?: number;
  family_id?: number;
  name?: string;
  price?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface IAssetInputDTO {
  family_id?: number;
  name?: string;
  price?: number;
}
