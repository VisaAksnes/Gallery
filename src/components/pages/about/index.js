import Styles from './About.module.css'
const About = () => {
    return(
        <div className={Styles.container}>
            <p>
                Desenvolvi este website para colocar no meu Github.
                O site é bem simples, e foi desenvolvido com javascript, css e html. Foi também utilizado o reactjs como biblioteca e o SASS para
                organizar melhor a estilização do site. Dos importes react: react-icon e react-router.
                Como o site é pequeno, não me dei ao trabalho de refator o código.
                Irei, com o tempo, desenvolver websites mais completos para postar no meu git.
            </p>
        </div>
    )
}

export default About;