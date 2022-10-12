import api from '../../utils/api'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await api.get('/products')

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (err) {
        dispatch({
            type: PRODUCT_LIST_FAIL, payload: err.response && err.response.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await api.get(`/products/${id}`)

        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (err) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL, payload: err.response && err.response.message
                ? err.response.data.message
                : err.message
        })
    }
}