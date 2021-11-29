import Typography from 'typography'
import altonTheme from 'typography-theme-alton'
// altonTheme.baseFontSize = '20px' // was 20px.

const typography = new Typography(altonTheme)

export const { scale, rhythm, options } = typography
export default typography
