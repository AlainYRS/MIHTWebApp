'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { iEnvironment } from './EnvironmentInterface';
import { UserState } from './UserState';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import es from './Langs/es-MX.json'
import en from './Langs/en-US.json'
import fr from './Langs/fr-CA.json'

interface iAppContext {
    userState: iEnvironment;
    setUserState: React.Dispatch<React.SetStateAction<iEnvironment>>; // Agregar función para actualizar
    Locale: string;
    setLocale: (locale: string) => void;
    Authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  };

const AppContext = createContext<iAppContext | undefined>(undefined);

export function ContextProvider({children}:{children: React.ReactNode}){
    const [userState, setUserState] = useState<iEnvironment>(UserState); // Convertir `userState` en un estado mutable
    const [Locale, setLocale] = useState('en-US');
    const [AiModel, setAiModel] = useState('gpt-4o-mini');
    const [AiEndPoint, setAiEndPoint] = useState('text-moderation-latest');
    const [AiAssistant, setAiAssistant] = useState('MAT&S');
    const [Authenticated, setAuthenticated] = useState(false);
    const [LangLegends, setLangLegends] = useState({})
    const [HideHeaderFooter, setHideHeaderFooter] = useState<boolean|null>(null) //Ocultar Heater y footer
    
    useEffect(() => {
        switch (Locale) {
            case 'es-MX': setLangLegends(es); break;
            case 'en-US': setLangLegends(en); break;
            case 'fr-CA': setLangLegends(fr); break;
            default: setLangLegends(en); setLocale('en-US');
        }
    }, [Locale]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          let Init = window.pageYOffset
          window.onscroll = function (){
              let Last = window.pageYOffset
              if(Init >= Last){
                setHideHeaderFooter(false)
            } else {
                setHideHeaderFooter(true)
            }
            Init = Last
          }
        }
    });
    
    return(
        <AppContext.Provider value={{ userState: userState, setUserState: setUserState, Locale, setLocale, Authenticated, setAuthenticated }}>
            <IntlProvider messages={LangLegends} locale={Locale} defaultLocale="en-US">
                {children}
            </IntlProvider>
        </AppContext.Provider>
    )
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppContext must be used within a ContextProvider');
    }
    return context;
  };