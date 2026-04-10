import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Rate from "./Rate";

const ProductCard = ({product,onDelete}) => {
    return (
        <Card className="border-info text-bg-light m-3"
            style={{ height: "22rem", width: '12rem', overflow: "hidden" }}>

            <Image
                alt="Product name"
                src={product.thumbnail}
                width={150} height={150}
            />
            <CardBody className="d-flex flex-column">
                <CardTitle tag="h5" className="text-center">
                    {product.name}
                </CardTitle>
                <CardSubtitle 
                    className="mb-2 text-muted text-center "
                    tag="h6"
                >
                    {product.price}
                </CardSubtitle>
                
                
                 <div className="mt-auto text-center">
                    <Link href="" onClick={()=>onDelete(product.id)}>
                        <Image src="/delete.png" width="24" height="24" alt="delete image"></Image>
                    </Link>
                    <Rate></Rate>
                </div>


            </CardBody>
        </Card>

    )
}
export default ProductCard;