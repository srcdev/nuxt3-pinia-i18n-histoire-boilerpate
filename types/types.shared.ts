export interface IContactFormModel {
  name: string;
  emailAddress: string;
  interestedIn: string;
  comments: string;
}

export interface IContactFormResponseModel {
  formData: IContactFormModel;
  result: {
    dataRecieved: string;
    emailSent: boolean;
  }
}
