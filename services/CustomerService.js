import { baseUrl } from '../util/AppConstants'
import { baseUrl1 } from '../util/AppConstants2'
import axios from 'axios'

export function listOfCustomers() {
    return axios.get(baseUrl + "/getAllCustomers");
}

export function getCustomerById(customerId) {
    return axios.get(baseUrl + "/getCustomerById/" + customerId);
}

export function addCustomer(customer) {
    return axios.post(baseUrl+"/addCustomer", customer)
}

export function updateCustomer(customer) {
    return axios.post(baseUrl+"/updateCustomer", customer)
}

export function deleteCustomer(customerId) {
    return axios.delete(baseUrl+"/deleteCustomer/"+customerId)
}

export function signUp() {
    return axios.delete(baseUrl1+"/signUp")
}

