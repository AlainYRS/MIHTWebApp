'use client'
import { iEnvironment } from './EnvironmentInterface';
import { en } from './Langs/en'
import { es } from './Langs/es'
import { fr } from './Langs/fr'

const UserState:iEnvironment = {
    User:{
            DefaultID: null,
            ClientID: null,
            SignUpDate: [],
            FirstName: null,
            LastName: null,
            Birthday: {
                year: null,
                month: null,
                day: null
            },
            Email: null,
            Phone: null,
            SIN: null,
            TaxID: null,
            Lang1: null,
            Lang2: null,
            Currency: null
        },
    Geo:{
            GLat: null,
            GLng: null,
            GAproach: 70,
            StartNavTime: null,
            GLinkURL: null,
            DetailGeolocation: null,
        },
    Digital:{
            Website: null,
            SocialMedia: [],
            Chat: [],
            Navigator: null,
            DarkMode: null,
            Cookies: null,
            CookiesSaved: []
        },
    Company:{
            Name: null,
            Brand: null,
            Logo: null,
            Slogan: null,
            BackgroundColor: null,
            FontColor: null
        },
    Membership:{
            Status: null,
            Category: null,
            Balance: 0,
            eStatements: false,
            MonthsDue: 0
        },
    Access:{
            Authenticated: null,
            StartNavTime: [],
            Alerts: []
        },
    Stickys:{
            Favorites: []
        },
    States: {
            // State1: true,
        },
    setStates: {
            // setState1: setTestState,
        },
    Languages: {
            es: es,
            en: en,
            fr: fr,
        },
    UsrLocal: null,
    AiModel: {
        model: 'gpt-4o-mini'
    },
};

export { UserState };