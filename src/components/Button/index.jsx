import { Container } from "./styles";

export function Button({ icon: Icon, deleteStyle, title, ...rest }) {
    return (
        <Container 
            type="button"
            $delete={deleteStyle}
            {...rest}
        >
            {Icon && <Icon style={16}/>}
            {title}
        </Container>
    )
}