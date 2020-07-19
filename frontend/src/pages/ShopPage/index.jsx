import React, { useState } from 'react';
import './stylesheet.scss';
import Button from '../../components/Button';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CATEGORY_ENTIRE = 0;
const CATEGORY_DEVWAY = 3; 
const CATEGORY_INTERVIEW = 6;

export default function ShopPage() {
  const categories = [
    '전체',
    '컴퓨터 공학',
    'IT 일반',
    '개발방법론',
    '웹프로그래밍',
    '프로그래밍 언어',
    '인터뷰',
  ];

  const [category, setCategory] = useState({ index: 0 });

  return (
    <div className="ShopPage">
      <div className="container">
        <div className="header">
          {categories.map((value, index) => {
            return (
              <>
                <button key={'button-' + index} onClick={() => setCategory({index})}>
                  {category.index === index ? (<div  className="font-green" >{value}</div>) :  (<span>{value}</span>)} 
                </button>
                <span key={'span-' + index}>{categories.length -1 !== index ? "|" : ""}</span>
              </>
            )
          })}
        </div>
        <div className="content">
          {books[category.index] !== undefined ? books[category.index].map((value, index) => {
            return (
              <div className="order-content">

                {value.title !== undefined ? (
                  <>
                  <img
                    className="image-each"
                    key={index}
                    src={value.src !== undefined ? value.src : "https://lh6.googleusercontent.com/proxy/tE8rMvK0v9VWv_89qF16XPrjCNudZCGb5O5zui9auXPzTtkLaGW7Nvy2Ipg6XLnOyijq4R86g2Y6aKm1vhFWHZAqcVjraa3jRqffTC0MUeS6tx9G7E4zQ0Tnrq5YAKbYHTdpDWeaPhTddFUDfkDS=s0-d"}
                    alt="book"
                  />
                   <div className="title">{value.title}</div>
                   <div className="point"><FontAwesomeIcon icon={faCoins} /> {value.price} Angel</div>
                   <Button className="buy-it">구매하기</Button>
                  </>
                ) : <></>}
              </div>
            );
          }) : (
            <div className="book-unexist">
              <div>죄송합니다</div>
              <div>현재 상품을 준비중입니다. :(</div>
            </div>
          )
        }
        </div>
        {
          books[category.index] !== undefined ? (
            <div className="pagination">
              <button>
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button className="active">1</button>
              <button>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          ) : <></>
        }
      </div>
    </div>
  );
}

const books = {
  [CATEGORY_ENTIRE]: [
    {
      title: '유지보수하기 어렵게 코딩하는 방법',
      price: 1024,
      src: 'https://www.hanbit.co.kr/data/ebook/E2375873090_l.jpg',
    },
    {
      title: 'Cracking the Coding Interview ',
      price: 1024,
      src:
        'http://image.kyobobook.co.kr/images/book/large/857/l9780984782857.jpg',
    },
    {
      title: '코딩인터뷰 완전 정복',
      price: 1024,
      src: 'http://image.yes24.com/goods/44305533/800x0',
    },
    {
      title: '알고리즘 문제해결 전략',
      price: 1024,
      src: require('../../images/books/algorithm.png'),
    },
    {
      title: '미래를 바꾼 아홉가지 알고리즘',
      price: 1024,
      src: 'http://image.yes24.com/goods/8921236/L',
    },
    {
      title: '코딩 인터뷰 퀘스천',
      price: 1024,
      src: 'http://image.yes24.com/momo/TopCate0001/kepub/L_491813.jpg',
    },
    {
      title: '파이썬 알고리즘 인터뷰',
      price: 1024,
      src: 'http://image.yes24.com/goods/91084402/800x0',
    },
    {
      title: '소프트 스킬',
      price: 1024,
      src: 'http://image.yes24.com/momo/TopCate878/MidCate006/66449912.jpg',
    },
    {
      title: '함께 자라기',
      price: 1024,
      src: 'http://image.yes24.com/goods/67350256/800x0',
    },
    {
      title: '클린 코드',
      price: 1024,
      src: 'http://image.yes24.com/goods/11681152/800x0',
    },
    {
      title: '리팩토링',
      price: 1024,
      src: 'http://image.yes24.com/goods/89649360/800x0',
    },
    {
      title: '테스트 주도 개발',
      price: 1024,
      src: 'http://bimage.interpark.com/goods_image/8/9/8/7/214078987g.jpg',
    },
  ],
  [CATEGORY_DEVWAY]: [
  {
    title: '유지보수하기 어렵게 코딩하는 방법',
    price: 1024,
    src: 'https://www.hanbit.co.kr/data/ebook/E2375873090_l.jpg',
  },
  {
    title: '함께 자라기',
    price: 1024,
    src: 'http://image.yes24.com/goods/67350256/800x0',
  },
  {
    title: '클린 코드',
    price: 1024,
    src: 'http://image.yes24.com/goods/11681152/800x0',
  },
  {
    title: '테스트 주도 개발',
    price: 1024,
    src: 'http://bimage.interpark.com/goods_image/8/9/8/7/214078987g.jpg',
  },
], 
  [CATEGORY_INTERVIEW]: [
    {
      title: 'Cracking the Coding Interview ',
      price: 1024,
      src:
        'http://image.kyobobook.co.kr/images/book/large/857/l9780984782857.jpg',
    },
    {
      title: '코딩인터뷰 완전 정복',
      price: 1024,
      src: 'http://image.yes24.com/goods/44305533/800x0',
    },
    {
      title: '파이썬 알고리즘 인터뷰',
      price: 1024,
      src: 'http://image.yes24.com/goods/91084402/800x0',
    },
    {
      title: '코딩 인터뷰 퀘스천',
      price: 1024,
      src: 'http://image.yes24.com/momo/TopCate0001/kepub/L_491813.jpg',
    },

  ],  
}