import request from '@/utils/request';

/**
 *
 * @param {*} data
 * @returns
 */
export async function getUser(data) {
  return request(`/api/user`, {
    method: 'GET',
    data,
  });
}
