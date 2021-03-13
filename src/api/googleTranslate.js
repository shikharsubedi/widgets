import axios from 'axios'

const key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

export default axios.create({
  baseURL: 'https://translation.googleapis.com/language/translate/v2',
  params: {
    key,   
  }
})
