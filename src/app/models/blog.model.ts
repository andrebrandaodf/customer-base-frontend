export class Blog {
  id!: number;
  title!: string;
  description!: string;
  photograph!: string;
  content!: string;
}

export class BlogForm {
  id!: number;
  title!: string;
  description!: string;
  photograph!: File;
  content!: string;
}
