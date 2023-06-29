import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global';
import Layout from './Components/Layout';
import themes from './styles/themes'
import { ThemeProvider as ThemeProviderClass, ThemeContextLayout } from './context/ThemeContextLayout'
class App extends React.Component {

  //Executa assim que o component for montado em tela
  componentDidMount() {
    console.log('renderizou componentDidMount')
  }


  // Executa toda vez que o component for atualizado, sofrer atualização de state
  componentDidUpdate(prevProp, prevState) {
    console.log()
  }

  //Serve para capturar os erros dentro do component filho de onde esse metodo é chamado;
  componentDidCatch(error, info) {
    console.log({error, info})
  }

  //executa antes do component ser montado, nesse caso ele pode ser usado para verificar se o component deve ou não ser executado.
  shouldComponentUpdate(nextProp, nextState) {
  console.log('shouldComponentUpdate',{nextProp, nextState})

  return true
  }

  //Executado antes do component sair da tela. Bom para remover EventListner
  componentWillUnmount() {}

  render() {

    return (
      <ThemeProviderClass>
        {/* consumindo context por clases */}
        <ThemeContextLayout.Consumer>
         {({ theme }) => (
           <ThemeProvider theme={themes[theme] || themes.dark}>
           <GlobalStyle />
           <Layout />
         </ThemeProvider>
         )}
        </ThemeContextLayout.Consumer>
      </ThemeProviderClass>
    );
  }
}
// // function App() {
// //   const [theme, setTheme] = useState('dark')

// //   const curentTheme = useMemo(() => {
// //     return themes[theme] || themes.dark

// //   },[theme]);


// //   function handleToogleTheme(){
// //     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
// //   };

// //   useEffect(() => {
// //     localStorage.setItem('theme', JSON.stringify(theme))
// //   }, [theme])

// return (
//   <ThemeProvider theme={curentTheme}>
//     <GlobalStyle />
//     <Layout 
//       onToogleTheme={handleToogleTheme}
//       selectedTheme={theme}
//     />
//   </ThemeProvider>
// );

// // };

export default App;
