import { STATIC_OPTIONS } from '../../components/organisms/home/home-page/homePageRedux/initialState'

export const addOptionsDataIntoRedux = ({ newOptions, oldOptions, oldOriginalOptions, setOptions, setOriginalOptions }) => {
    let resultantOptions
    resultantOptions = [...oldOptions, ...newOptions]
    setOptions(resultantOptions)
    setOriginalOptions([...STATIC_OPTIONS, ...newOptions])
}
