import SharedServices from '@/services/services.shared'
import {
  IContactFormModel,
  IContactFormResponseModel,
} from '@/types/types.shared'

export const rootActions = {
  async postContactForm(payload: IContactFormModel) {
    console.log(`store.action postContactForm() called`)
    const response =
      await SharedServices.postContactForm<IContactFormResponseModel>(payload)
    return response
  },
}
