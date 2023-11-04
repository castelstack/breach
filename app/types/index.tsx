export interface CardProps {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  author: {
    id: number;
    name: string;
  };
  category?: {
    id: 1;
    name: string;
    icon: string;
  };
  series: {
    id: number;
    name: string;
  };
  createdAt: string;
  smallImage?: boolean;
}

export interface FormProps {
  email: string;
  password: string;
}
export interface ResponseAxios {
  response: {
    data: {
      status: string;
      message: string;
    };
  };
}

export interface InterestsResponse {
  icon: any;
  name: string;
  id: string;
}
