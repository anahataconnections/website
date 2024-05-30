export interface JobsData {
  id: string;
  attributes: {
    role_title: string;
    role_description: string;
    createdAt: Date;
    publishedAt: Date;
    role_picture: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
