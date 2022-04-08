/* eslint-disable */
/* tslint:disable */
import { useQuery, useMutation } from 'react-query'
import { queryFn, mutationFn } from '../generatorHelpers';

const apiUrlConfigPath = 'mf.api';
const apiUrlValue = undefined;
const skipAuth = false;
const generatorConfig = {
    ...(apiUrlConfigPath && { apiUrlConfigPath }),
    ...(apiUrlValue && { apiUrlValue }),
    ...(skipAuth && { skipAuth }),
};
        

// get: {apiUrl}/v1/countries/{id}
export const getCountry = (pathParams, options = {}) => queryFn(generatorConfig)({ method: 'get', ...options })({ queryKey:['{apiUrl}/v1/countries/{id}', pathParams, {}, {}]})
export const useGetCountry = (pathParams, config, options = {}) => useQuery({
  queryKey: pathParams && pathParams.id && ['{apiUrl}/v1/countries/{id}', pathParams],
  queryFn: () => queryFn(generatorConfig)({ method: 'get', ...options })({ queryKey:['{apiUrl}/v1/countries/{id}', pathParams, {}, {}]}),
  ...config
})
useGetCountry.queryKey = '{apiUrl}/v1/countries/{id}'

// put: {apiUrl}/v1/countries/{id}
export const putCountry = (pathParams, body, options) => mutationFn(generatorConfig)('put', '{apiUrl}/v1/countries/{id}', pathParams, options)(body)
export const usePutCountry = (pathParams, config, options) => useMutation(mutationFn(generatorConfig)('put', '{apiUrl}/v1/countries/{id}', pathParams, {}, options), config)

// delete: {apiUrl}/v1/countries/{id}
export const deleteCountry = (pathParams, options) => mutationFn(generatorConfig)('delete', '{apiUrl}/v1/countries/{id}', pathParams, options)()
export const useDeleteCountry = (pathParams, config, options) => useMutation(mutationFn(generatorConfig)('delete', '{apiUrl}/v1/countries/{id}', pathParams, {}, options), config)

// patch: {apiUrl}/v1/countries/{id}
export const patchCountry = (pathParams, body, options) => mutationFn(generatorConfig)('patch', '{apiUrl}/v1/countries/{id}', pathParams, options)(body)
export const usePatchCountry = (pathParams, config, options) => useMutation(mutationFn(generatorConfig)('patch', '{apiUrl}/v1/countries/{id}', pathParams, {}, options), config)

// get: {apiUrl}/v1/countries
export const getCountries = (options = {}) => queryFn(generatorConfig)({ method: 'get', ...options })({ queryKey:['{apiUrl}/v1/countries', {}, {}, {}]})
export const useGetCountries = (config, options = {}) => useQuery({
  queryKey: ['{apiUrl}/v1/countries', ],
  queryFn: () => queryFn(generatorConfig)({ method: 'get', ...options })({ queryKey:['{apiUrl}/v1/countries', {}, {}, {}]}),
  ...config
})
useGetCountries.queryKey = '{apiUrl}/v1/countries'

// post: {apiUrl}/v1/countries
export const postCountry = (body, options) => mutationFn(generatorConfig)('post', '{apiUrl}/v1/countries', options)(body)
export const usePostCountry = (config, options) => useMutation(mutationFn(generatorConfig)('post', '{apiUrl}/v1/countries', {}, {}, options), config)

// post: {apiUrl}/v1/countries/search
export const searchCountries = (body, queryParams, options = {}) => queryFn(generatorConfig)({ method: 'post', ...options })({ queryKey:['{apiUrl}/v1/countries/search', {}, body, queryParams]})
export const useSearchCountries = (body, queryParams, config, options = {}) => useQuery({
  queryKey: ['{apiUrl}/v1/countries/search', body, queryParams],
  queryFn: () => queryFn(generatorConfig)({ method: 'post', ...options })({ queryKey:['{apiUrl}/v1/countries/search', {}, body, queryParams]}),
  ...config
})
useSearchCountries.queryKey = '{apiUrl}/v1/countries/search'
