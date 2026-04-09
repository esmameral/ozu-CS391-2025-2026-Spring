
import Rate from "./Rate";

const Catalog = ({ products }) => {


    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
            {products.map((item, index) => {
                return (<tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><Rate /></td>
                </tr>

                )
            }

            )
            }
            </tbody>
        </table>)
}
export default Catalog;