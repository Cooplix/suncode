import api from '@helpers/api.helper';

const userServices = {

  getUniq: async id => api.get(
    `/api/table/unique/${id}`
  ),

  getNotUniq: async id => api.get(
    `/api/table/notUnique/${id}`
  )
};

export default userServices;
