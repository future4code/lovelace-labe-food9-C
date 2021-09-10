import { createTheme, withTheme } from '@material-ui/core/styles';
import { PlayCircleFilledWhite } from '@material-ui/icons';
import { primaryColor, secundaryColor} from "./colors"

const theme = createTheme ({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
        primary: secundaryColor
    }
}
})

export default theme