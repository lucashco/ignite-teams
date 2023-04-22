import 'styled-components/native'
import theme, { ThemeType } from '../theme'

declare module 'styled-components/native' {
    export interface DefaultTheme extends ThemeType {}
}