import { Container, Stars } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Tag } from "../Tag";

export function Movie({data, ...rest}) {
    const rating = data.rating;

    return (
        <Container {...rest}>
            <h3>{data.title}</h3>

            <Stars>
                {
                    rating &&
                    Array.from({ length: rating }, (_, index) => (

                        <AiFillStar 
                            key={String(index)} 
                        />

                    ))
                }

                {
                    rating &&
                    Array.from({ length: 5 - rating }, (_, index) => (

                        <AiOutlineStar 
                            key={String(index)} 
                        />

                    ))
                }

            </Stars>

            <p>{data.description}</p>
            
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} /> )
                    }
                </footer>
            }

        </Container>
    )
}