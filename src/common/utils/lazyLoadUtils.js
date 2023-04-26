import { STATIC_OPTIONS } from '../../components/home-page/homePageRedux/initialState'

export const addOptionsDataIntoRedux = ({ newOptions, oldOptions, oldOriginalOptions, setOptions, setOriginalOptions }) => {
    console.log('newOptions', newOptions)
    let resultantOptions
    resultantOptions = [...oldOptions, ...newOptions]
    console.log('resultantOptions', resultantOptions)
    setOptions(resultantOptions)
    setOriginalOptions([...STATIC_OPTIONS], resultantOptions)
}
