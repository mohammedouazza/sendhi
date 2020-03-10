import AdservioLogo from '../../img/adservio.png'
import FreelanceLogo from '../../img/freelance.jpg'
import DigitalNomadeLogo from '../../img/digital_nomade.png'
import LearCorporationLogo from '../../img/lear_corporation.png'

const initialState = {
    experiences: [
        {
          key: 1,
          title: 'Adserio Maroc',
          from: 'Septembre 2019',
          to: 'En cours...',
          job: 'Ingénieur fullstack React/Laravel',
          img: AdservioLogo 
        },
        {
          key: 2,
          title: 'Consultant indépendant, Maroc',
          from: 'Novembre 2018',
          to: 'Septembre 2019',
          job: 'Ingénieur Laravel',
          img: FreelanceLogo 
        },
        {
          key: 3,
          title: 'Digital Nomade SARL, France',
          from: 'Avril 2018',
          to: 'Octobre 2018',
          job: 'Stage PFE, Ingénieur Laravel',
          img: DigitalNomadeLogo 
        },
        {
          key: 4,
          title: 'Lear Corporation, Maroc',
          from: 'Septembre 2019',
          to: 'En cours...',
          job: 'Ingénieur fullstack React/Laravel',
          img: LearCorporationLogo 
        }
      ],
      addModalOpen: false
}

const ExperienceReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'OPEN_ADD_MODAL':
        return {
          ...state,
          addModalOpen: true
        }
      case 'CLOSE_ADD_MODAL':
          return {
            ...state,
            addModalOpen: false
          }
      default:
        return state;
    }
}

export default ExperienceReducer