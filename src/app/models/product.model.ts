export class Product {
  id!: number;
  name!: string;
  presentation!: string;
  manufacturer!: string;
  recordNumber!: string;
  bullProfessionalHealth!: string;
  bullPatient!: string;
  tokenTechniqueProduct!: string;
}

export class ProductForm {
  id!: number;
  name!: string;
  presentation!: string;
  manufacturer!: string;
  recordNumber!: string;
  bullProfessionalHealth!: File;
  bullPatient!: File;
  tokenTechniqueProduct!: File;
}