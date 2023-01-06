import Avatar from '../img/foto_perfil.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Andrey Hiemer"></img>
      <p className="title">Desenvolvedor Front End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar