import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: 'uz',
    lng: 'uz',
    resources: {
        en: {
            translation: {
                quizApp: 'QuizApp',
                installApp: 'Install App'
            }
        },
        uz: {
            translation: {
                quizApp: 'Vektorina ilovasi',
                installApp: "Ilovani o'rnating"
            }
        }
    }
}); 

export default i18n;