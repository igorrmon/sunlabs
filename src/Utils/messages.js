import {color} from 'react-native-reanimated';
import Snackbar from 'react-native-snackbar';
import colors from '../UI/colors';

export default function SnackMessage(type, text) {
  return Snackbar.show({
    text: text,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: type,
    action: {
      text: 'Fechar',
      textColor: colors.white,
    },
  });
}
