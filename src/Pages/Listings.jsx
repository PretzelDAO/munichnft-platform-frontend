import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nfts: [
        {
          price: "300 ETH",
          tokenId: "3",
          tokenAddress: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
          name: "MunichNFT - London",
          description: "This is a test image for MunichNFT",
          owner: {
            user: {
              username: null,
            },
            profile_img_url:
              "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
            address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
            config: "",
            discord_id: "",
          },
          assetContract: {
            name: "GameItem",
            description: null,
            type: "non-fungible",
            schemaName: "ERC721",
            address: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
            tokenSymbol: "ITM",
            buyerFeeBasisPoints: 0,
            sellerFeeBasisPoints: 250,
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            imageUrl: null,
            externalLink: null,
          },
          collection: {
            createdDate: "2021-06-11T22:00:15.009Z",
            name: "GameItem - ovAm5johlZ",
            description: null,
            slug: "gameitem-ovam5johlz",
            hidden: false,
            featured: false,
            featuredImageUrl: null,
            displayData: {
              card_display_style: "contain",
              images: [],
            },
            paymentTokens: [
              {
                name: null,
                symbol: "ETH",
                decimals: 18,
                address: "0x0000000000000000000000000000000000000000",
                imageUrl: "",
                ethPrice: 1,
                usdPrice: 405.65,
              },
              {
                name: "",
                symbol: "WETH",
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl:
                  "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
                ethPrice: 5.728238629360286,
                usdPrice: 2323.66,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
            ],
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            payoutAddress: null,
            imageUrl: null,
            largeImageUrl: null,
            stats: {
              seven_day_volume: 0.02,
              total_volume: 0.02,
              seven_day_change: 0,
              seven_day_sales: 2,
              total_sales: 2,
              total_supply: 3,
              count: 3,
              num_owners: 3,
              seven_day_average_price: 0.01,
              average_price: 0.01,
              num_reports: 0,
              market_cap: 0.03,
            },
            traitStats: {},
            externalLink: null,
            wikiLink: null,
          },
          orders: [],
          sellOrders: [],
          buyOrders: [],
          isPresale: false,
          imageUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imagePreviewUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imageUrlOriginal:
            "https://ipfs.io/ipfs/QmTaK53Z2DnG5Rd8K5QmodWUgv4r9bwbnPAoJu4wxwPYKd",
          imageUrlThumbnail:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          externalLink: null,
          openseaLink:
            "https://rinkeby.opensea.io/assets/0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5/3",
          traits: [],
          numSales: 1,
          lastSale: {
            eventType: "successful",
            eventTimestamp: "2021-06-12T10:34:28",
            auctionType: null,
            totalPrice: "10000000000000000",
            transaction: {
              fromAccount: {
                address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
                user: {
                  username: null,
                },
              },
              toAccount: {
                address: "0x5206e78b21ce315ce284fb24cf05e0585a93b1d9",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/17.png",
                user: null,
              },
              createdDate: null,
              modifiedDate: null,
              transactionHash:
                "0xffef6fb160d36e3ff3de6dc0e454e68e136d43113e126993190660d7742589f2",
              transactionIndex: "1",
              blockNumber: "8750523",
              blockHash:
                "0x10259bbdea54b4227104abdc7acdd5458061f4eb9749fc275e84b885fd4eae78",
              timestamp: "2021-06-12T10:34:28.000Z",
            },
            paymentToken: {
              name: null,
              symbol: "ETH",
              decimals: 18,
              address: "0x0000000000000000000000000000000000000000",
              imageUrl: "",
              ethPrice: "1.000000000000000",
              usdPrice: "405.649999999999977263",
            },
          },
          backgroundColor: null,
          transferFee: null,
          transferFeePaymentToken: null,
        },
        {
          tokenId: "3",
          tokenAddress: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
          name: "MunichNFT - London",
          description: "This is a test image for MunichNFT",
          owner: {
            user: {
              username: null,
            },
            profile_img_url:
              "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
            address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
            config: "",
            discord_id: "",
          },
          assetContract: {
            name: "GameItem",
            description: null,
            type: "non-fungible",
            schemaName: "ERC721",
            address: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
            tokenSymbol: "ITM",
            buyerFeeBasisPoints: 0,
            sellerFeeBasisPoints: 250,
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            imageUrl: null,
            externalLink: null,
          },
          collection: {
            createdDate: "2021-06-11T22:00:15.009Z",
            name: "GameItem - ovAm5johlZ",
            description: null,
            slug: "gameitem-ovam5johlz",
            hidden: false,
            featured: false,
            featuredImageUrl: null,
            displayData: {
              card_display_style: "contain",
              images: [],
            },
            paymentTokens: [
              {
                name: null,
                symbol: "ETH",
                decimals: 18,
                address: "0x0000000000000000000000000000000000000000",
                imageUrl: "",
                ethPrice: 1,
                usdPrice: 405.65,
              },
              {
                name: "",
                symbol: "WETH",
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl:
                  "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
                ethPrice: 5.728238629360286,
                usdPrice: 2323.66,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
            ],
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            payoutAddress: null,
            imageUrl: null,
            largeImageUrl: null,
            stats: {
              seven_day_volume: 0.02,
              total_volume: 0.02,
              seven_day_change: 0,
              seven_day_sales: 2,
              total_sales: 2,
              total_supply: 3,
              count: 3,
              num_owners: 3,
              seven_day_average_price: 0.01,
              average_price: 0.01,
              num_reports: 0,
              market_cap: 0.03,
            },
            traitStats: {},
            externalLink: null,
            wikiLink: null,
          },
          orders: [],
          sellOrders: [],
          buyOrders: [],
          isPresale: false,
          imageUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imagePreviewUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imageUrlOriginal:
            "https://ipfs.io/ipfs/QmTaK53Z2DnG5Rd8K5QmodWUgv4r9bwbnPAoJu4wxwPYKd",
          imageUrlThumbnail:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          externalLink: null,
          openseaLink:
            "https://rinkeby.opensea.io/assets/0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5/3",
          traits: [],
          numSales: 1,
          lastSale: {
            eventType: "successful",
            eventTimestamp: "2021-06-12T10:34:28",
            auctionType: null,
            totalPrice: "10000000000000000",
            transaction: {
              fromAccount: {
                address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
                user: {
                  username: null,
                },
              },
              toAccount: {
                address: "0x5206e78b21ce315ce284fb24cf05e0585a93b1d9",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/17.png",
                user: null,
              },
              createdDate: null,
              modifiedDate: null,
              transactionHash:
                "0xffef6fb160d36e3ff3de6dc0e454e68e136d43113e126993190660d7742589f2",
              transactionIndex: "1",
              blockNumber: "8750523",
              blockHash:
                "0x10259bbdea54b4227104abdc7acdd5458061f4eb9749fc275e84b885fd4eae78",
              timestamp: "2021-06-12T10:34:28.000Z",
            },
            paymentToken: {
              name: null,
              symbol: "ETH",
              decimals: 18,
              address: "0x0000000000000000000000000000000000000000",
              imageUrl: "",
              ethPrice: "1.000000000000000",
              usdPrice: "405.649999999999977263",
            },
          },
          backgroundColor: null,
          transferFee: null,
          transferFeePaymentToken: null,
        },
        {
          tokenId: "3",
          tokenAddress: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
          name: "MunichNFT - London",
          description: "This is a test image for MunichNFT",
          owner: {
            user: {
              username: null,
            },
            profile_img_url:
              "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
            address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
            config: "",
            discord_id: "",
          },
          assetContract: {
            name: "GameItem",
            description: null,
            type: "non-fungible",
            schemaName: "ERC721",
            address: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
            tokenSymbol: "ITM",
            buyerFeeBasisPoints: 0,
            sellerFeeBasisPoints: 250,
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            imageUrl: null,
            externalLink: null,
          },
          collection: {
            createdDate: "2021-06-11T22:00:15.009Z",
            name: "GameItem - ovAm5johlZ",
            description: null,
            slug: "gameitem-ovam5johlz",
            hidden: false,
            featured: false,
            featuredImageUrl: null,
            displayData: {
              card_display_style: "contain",
              images: [],
            },
            paymentTokens: [
              {
                name: null,
                symbol: "ETH",
                decimals: 18,
                address: "0x0000000000000000000000000000000000000000",
                imageUrl: "",
                ethPrice: 1,
                usdPrice: 405.65,
              },
              {
                name: "",
                symbol: "WETH",
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl:
                  "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
                ethPrice: 5.728238629360286,
                usdPrice: 2323.66,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
            ],
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            payoutAddress: null,
            imageUrl: null,
            largeImageUrl: null,
            stats: {
              seven_day_volume: 0.02,
              total_volume: 0.02,
              seven_day_change: 0,
              seven_day_sales: 2,
              total_sales: 2,
              total_supply: 3,
              count: 3,
              num_owners: 3,
              seven_day_average_price: 0.01,
              average_price: 0.01,
              num_reports: 0,
              market_cap: 0.03,
            },
            traitStats: {},
            externalLink: null,
            wikiLink: null,
          },
          orders: [],
          sellOrders: [],
          buyOrders: [],
          isPresale: false,
          imageUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imagePreviewUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imageUrlOriginal:
            "https://ipfs.io/ipfs/QmTaK53Z2DnG5Rd8K5QmodWUgv4r9bwbnPAoJu4wxwPYKd",
          imageUrlThumbnail:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          externalLink: null,
          openseaLink:
            "https://rinkeby.opensea.io/assets/0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5/3",
          traits: [],
          numSales: 1,
          lastSale: {
            eventType: "successful",
            eventTimestamp: "2021-06-12T10:34:28",
            auctionType: null,
            totalPrice: "10000000000000000",
            transaction: {
              fromAccount: {
                address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
                user: {
                  username: null,
                },
              },
              toAccount: {
                address: "0x5206e78b21ce315ce284fb24cf05e0585a93b1d9",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/17.png",
                user: null,
              },
              createdDate: null,
              modifiedDate: null,
              transactionHash:
                "0xffef6fb160d36e3ff3de6dc0e454e68e136d43113e126993190660d7742589f2",
              transactionIndex: "1",
              blockNumber: "8750523",
              blockHash:
                "0x10259bbdea54b4227104abdc7acdd5458061f4eb9749fc275e84b885fd4eae78",
              timestamp: "2021-06-12T10:34:28.000Z",
            },
            paymentToken: {
              name: null,
              symbol: "ETH",
              decimals: 18,
              address: "0x0000000000000000000000000000000000000000",
              imageUrl: "",
              ethPrice: "1.000000000000000",
              usdPrice: "405.649999999999977263",
            },
          },
          backgroundColor: null,
          transferFee: null,
          transferFeePaymentToken: null,
        },
        {
          tokenId: "3",
          tokenAddress: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
          name: "MunichNFT - London",
          description: "This is a test image for MunichNFT",
          owner: {
            user: {
              username: null,
            },
            profile_img_url:
              "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
            address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
            config: "",
            discord_id: "",
          },
          assetContract: {
            name: "GameItem",
            description: null,
            type: "non-fungible",
            schemaName: "ERC721",
            address: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
            tokenSymbol: "ITM",
            buyerFeeBasisPoints: 0,
            sellerFeeBasisPoints: 250,
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            imageUrl: null,
            externalLink: null,
          },
          collection: {
            createdDate: "2021-06-11T22:00:15.009Z",
            name: "GameItem - ovAm5johlZ",
            description: null,
            slug: "gameitem-ovam5johlz",
            hidden: false,
            featured: false,
            featuredImageUrl: null,
            displayData: {
              card_display_style: "contain",
              images: [],
            },
            paymentTokens: [
              {
                name: null,
                symbol: "ETH",
                decimals: 18,
                address: "0x0000000000000000000000000000000000000000",
                imageUrl: "",
                ethPrice: 1,
                usdPrice: 405.65,
              },
              {
                name: "",
                symbol: "WETH",
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl:
                  "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
                ethPrice: 5.728238629360286,
                usdPrice: 2323.66,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
            ],
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            payoutAddress: null,
            imageUrl: null,
            largeImageUrl: null,
            stats: {
              seven_day_volume: 0.02,
              total_volume: 0.02,
              seven_day_change: 0,
              seven_day_sales: 2,
              total_sales: 2,
              total_supply: 3,
              count: 3,
              num_owners: 3,
              seven_day_average_price: 0.01,
              average_price: 0.01,
              num_reports: 0,
              market_cap: 0.03,
            },
            traitStats: {},
            externalLink: null,
            wikiLink: null,
          },
          orders: [],
          sellOrders: [],
          buyOrders: [],
          isPresale: false,
          imageUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imagePreviewUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imageUrlOriginal:
            "https://ipfs.io/ipfs/QmTaK53Z2DnG5Rd8K5QmodWUgv4r9bwbnPAoJu4wxwPYKd",
          imageUrlThumbnail:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          externalLink: null,
          openseaLink:
            "https://rinkeby.opensea.io/assets/0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5/3",
          traits: [],
          numSales: 1,
          lastSale: {
            eventType: "successful",
            eventTimestamp: "2021-06-12T10:34:28",
            auctionType: null,
            totalPrice: "10000000000000000",
            transaction: {
              fromAccount: {
                address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
                user: {
                  username: null,
                },
              },
              toAccount: {
                address: "0x5206e78b21ce315ce284fb24cf05e0585a93b1d9",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/17.png",
                user: null,
              },
              createdDate: null,
              modifiedDate: null,
              transactionHash:
                "0xffef6fb160d36e3ff3de6dc0e454e68e136d43113e126993190660d7742589f2",
              transactionIndex: "1",
              blockNumber: "8750523",
              blockHash:
                "0x10259bbdea54b4227104abdc7acdd5458061f4eb9749fc275e84b885fd4eae78",
              timestamp: "2021-06-12T10:34:28.000Z",
            },
            paymentToken: {
              name: null,
              symbol: "ETH",
              decimals: 18,
              address: "0x0000000000000000000000000000000000000000",
              imageUrl: "",
              ethPrice: "1.000000000000000",
              usdPrice: "405.649999999999977263",
            },
          },
          backgroundColor: null,
          transferFee: null,
          transferFeePaymentToken: null,
        },
        {
          tokenId: "3",
          tokenAddress: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
          name: "MunichNFT - London",
          description: "This is a test image for MunichNFT",
          owner: {
            user: {
              username: null,
            },
            profile_img_url:
              "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
            address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
            config: "",
            discord_id: "",
          },
          assetContract: {
            name: "GameItem",
            description: null,
            type: "non-fungible",
            schemaName: "ERC721",
            address: "0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5",
            tokenSymbol: "ITM",
            buyerFeeBasisPoints: 0,
            sellerFeeBasisPoints: 250,
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            imageUrl: null,
            externalLink: null,
          },
          collection: {
            createdDate: "2021-06-11T22:00:15.009Z",
            name: "GameItem - ovAm5johlZ",
            description: null,
            slug: "gameitem-ovam5johlz",
            hidden: false,
            featured: false,
            featuredImageUrl: null,
            displayData: {
              card_display_style: "contain",
              images: [],
            },
            paymentTokens: [
              {
                name: null,
                symbol: "ETH",
                decimals: 18,
                address: "0x0000000000000000000000000000000000000000",
                imageUrl: "",
                ethPrice: 1,
                usdPrice: 405.65,
              },
              {
                name: "",
                symbol: "WETH",
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl:
                  "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
                ethPrice: 5.728238629360286,
                usdPrice: 2323.66,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
              {
                name: null,
                symbol: null,
                decimals: 18,
                address: "0xc778417e063141139fce010982780140aa0cd5ab",
                imageUrl: "",
                ethPrice: null,
                usdPrice: null,
              },
            ],
            openseaBuyerFeeBasisPoints: 0,
            openseaSellerFeeBasisPoints: 250,
            devBuyerFeeBasisPoints: 0,
            devSellerFeeBasisPoints: 0,
            payoutAddress: null,
            imageUrl: null,
            largeImageUrl: null,
            stats: {
              seven_day_volume: 0.02,
              total_volume: 0.02,
              seven_day_change: 0,
              seven_day_sales: 2,
              total_sales: 2,
              total_supply: 3,
              count: 3,
              num_owners: 3,
              seven_day_average_price: 0.01,
              average_price: 0.01,
              num_reports: 0,
              market_cap: 0.03,
            },
            traitStats: {},
            externalLink: null,
            wikiLink: null,
          },
          orders: [],
          sellOrders: [],
          buyOrders: [],
          isPresale: false,
          imageUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imagePreviewUrl:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          imageUrlOriginal:
            "https://ipfs.io/ipfs/QmTaK53Z2DnG5Rd8K5QmodWUgv4r9bwbnPAoJu4wxwPYKd",
          imageUrlThumbnail:
            "https://storage.opensea.io/files/eafb276b04fc1ea7094acc08cc8236be.mp4",
          externalLink: null,
          openseaLink:
            "https://rinkeby.opensea.io/assets/0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5/3",
          traits: [],
          numSales: 1,
          lastSale: {
            eventType: "successful",
            eventTimestamp: "2021-06-12T10:34:28",
            auctionType: null,
            totalPrice: "10000000000000000",
            transaction: {
              fromAccount: {
                address: "0x945381fdaa369f81772a590a74f9381949a2e4ad",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
                user: {
                  username: null,
                },
              },
              toAccount: {
                address: "0x5206e78b21ce315ce284fb24cf05e0585a93b1d9",
                config: "",
                profileImgUrl:
                  "https://storage.googleapis.com/opensea-static/opensea-profile/17.png",
                user: null,
              },
              createdDate: null,
              modifiedDate: null,
              transactionHash:
                "0xffef6fb160d36e3ff3de6dc0e454e68e136d43113e126993190660d7742589f2",
              transactionIndex: "1",
              blockNumber: "8750523",
              blockHash:
                "0x10259bbdea54b4227104abdc7acdd5458061f4eb9749fc275e84b885fd4eae78",
              timestamp: "2021-06-12T10:34:28.000Z",
            },
            paymentToken: {
              name: null,
              symbol: "ETH",
              decimals: 18,
              address: "0x0000000000000000000000000000000000000000",
              imageUrl: "",
              ethPrice: "1.000000000000000",
              usdPrice: "405.649999999999977263",
            },
          },
          backgroundColor: null,
          transferFee: null,
          transferFeePaymentToken: null,
        },
      ],
    };
    this.RenderListings = this.RenderListings.bind(this);
  }

  RenderListings() {
    const classes = useStyles();
    return (
      <Box display="flex">
        {this.state.nfts.map((nft) => (
          <Card key={nft.tokenId}>
            <CardActionArea>
              <CardMedia
                component="video"
                className={classes.media}
                src={nft.imageUrlOriginal}
                title={nft.name}
                autoPlay
                loop
              />
              <CardContent>
                <Typography>{nft.name}</Typography>
                <Typography>{nft.description}</Typography>
                <Typography>
                  {nft.owner.user.username ? nft.owner.user.username : "Owner"}
                </Typography>
              </CardContent>
              <CardActions>
                {nft.price ? (
                  <Box>
                    <Typography>{nft.price}</Typography>
                    <Button>
                      <Typography>Buy</Typography>
                    </Button>
                  </Box>
                ) : (
                  <Typography>Not for sale</Typography>
                )}
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    );
  }

  render() {
    return <this.RenderListings />;
  }
}

export default Listings;
