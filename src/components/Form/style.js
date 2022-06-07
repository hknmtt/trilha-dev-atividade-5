import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 20,
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input:{
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#ff0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 10,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#fff',
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

export default styles;