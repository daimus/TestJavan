export interface IFamily {
  id?: number;
  parent_id: number;
  name: string;
  sex: 'male' | 'female';
  created_at?: Date;
  updated_at?: Date;
}

export interface IFamilyInputDTO {
  name: string;
  parent_id: number;
  sex: 'male' | 'female';
}
