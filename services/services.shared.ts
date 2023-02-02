import useHttpClient from '@/compositions/useHttpClient'
import {
  IContactFormModel,
  IContactFormResponseModel,
} from '@/types/types.shared'

class SharedServices {
  async postContactForm(payload: IContactFormModel) {
    const apiResponse = await useHttpClient.post<IContactFormResponseModel>(
      `/api/basicForm.php`,
      payload
    )
    return apiResponse
  }
}

export default new SharedServices()
