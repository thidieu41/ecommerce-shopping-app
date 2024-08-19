import { Button, Card, Flex, Image, Rate, Typography } from "antd";
import { useState } from "react";
import "./style.css";

interface IProduct {
  name: string;
  sale: number;
  urlImg: string;
  price: number;
  salePrice: number;
  star: number;
  numberOfStar: number;
  isNew?: boolean;
  isWishListDelete?: boolean;
  isWishListView?: boolean;
}

interface IProps {
  product: IProduct;
}

const FlashSaleProduct = ({ product }: IProps) => {
  const [isHover, setHover] = useState(false);
  const { isWishListDelete, isWishListView } = product;
  return (
    <Card className="card-product">
      <div
        className="card-image-content"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          style={{
            margin: "40px 30px",
          }}
        >
          <Image src={product.urlImg} preview={false} />
        </div>

        {isHover && <Button className="add-to-cart-btn">Add To Cart</Button>}
        {product.sale > 0 && (
          <div className="product-sale">- {product.sale} %</div>
        )}

        {product.isNew && <div className="product-sale">New</div>}

        <div className="product-actions">
          {isWishListDelete ? (
            <Image
              src="/assets/images/products/filldelete.svg"
              preview={false}
            />
          ) : isWishListView ? (
            isWishListView && (
              <Image
                src="/assets/images/products/filleyes.svg"
                preview={false}
              />
            )
          ) : (
            <>
              <Image
                src="/assets/images/products/fillheart.svg"
                preview={false}
              />
              <Image
                src="/assets/images/products/filleyes.svg"
                preview={false}
              />
            </>
          )}
        </div>
      </div>

      <div className="product-content">
        <Typography className="product-name">{product.name}</Typography>
        <Flex className="product-price">
          <Typography className="sale-price">${product.salePrice}</Typography>
          {product.price > 0 && (
            <Typography className="origin-price">${product.price}</Typography>
          )}
        </Flex>
        {product.star > 0 && (
          <Flex gap={10}>
            <Rate disabled defaultValue={product.star} allowHalf />
            <Typography
              style={{
                color: "#808080",
              }}
            >
              ( {product.numberOfStar} )
            </Typography>
          </Flex>
        )}
      </div>
    </Card>
  );
};

export default FlashSaleProduct;
