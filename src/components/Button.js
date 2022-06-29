import './Button.css'

const Button = (props) => {
    const addition = props.children === 'Reset' ? 'reset':'fill';
    return <button className={addition} onClick={props.onClick} >{props.children}</button>
}
export default Button;