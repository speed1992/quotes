import { STATIC_OPTIONS } from '../../components/home-page/homePageRedux/initialState'

export const addOptionsDataIntoRedux = ({ newOptions, oldOptions, oldOriginalOptions, setOptions, setOriginalOptions }) => {
    let resultantOptions
    resultantOptions = [...oldOptions, ...newOptions]
    setOptions(resultantOptions)
    setOriginalOptions([...STATIC_OPTIONS], resultantOptions)
}
